(function () {
  let context = null;
  let analyser = null;
  let sourceNode = null;
  let audio = null;
  let frequencyData = null;
  let lastEnergy = 0;
  let lastBeatAt = 0;
  let state = {
    title: '',
    artist: '',
    mood: '',
    bpm: 0,
    status: 'idle',
    playing: false,
    muted: false,
  };
  const audibleVolume = 0.18;

  function clamp(value) {
    return Math.max(0, Math.min(1, value));
  }

  function average(data, start, end) {
    if (!data || end <= start) return 0;
    let sum = 0;
    for (let i = start; i < end; i += 1) {
      sum += data[i] || 0;
    }
    return sum / ((end - start) * 255);
  }

  // Log-spaced, normalised frequency spectrum (real equalizer data) so the
  // visualisers can react per-frequency instead of to one global level.
  function buildSpectrum(data, bins) {
    const out = new Array(bins);
    const minBin = 1;
    const maxBin = data.length; // 512 for fftSize 1024
    for (let i = 0; i < bins; i++) {
      const f0 = minBin * Math.pow(maxBin / minBin, i / bins);
      const f1 = minBin * Math.pow(maxBin / minBin, (i + 1) / bins);
      const a = Math.max(minBin, Math.floor(f0));
      const b = Math.max(a + 1, Math.ceil(f1));
      let sum = 0;
      let cnt = 0;
      for (let k = a; k < b && k < maxBin; k++) {
        sum += data[k];
        cnt++;
      }
      const v = cnt ? sum / cnt / 255 : 0;
      out[i] = clamp(Math.pow(v * 1.35, 0.82));
    }
    return out;
  }

  function emptySnapshot() {
    return {
      energy: 0,
      low: 0,
      mid: 0,
      high: 0,
      beat: false,
      playing: state.playing,
      muted: state.muted,
      status: state.status,
      spectrum: [],
    };
  }

  async function ensureContext() {
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) {
      state.status = 'unsupported';
      return false;
    }
    if (!context) {
      context = new AudioContextCtor();
    }
    if (context.state === 'suspended') {
      await context.resume();
    }
    return true;
  }

  function setState(src, title, artist, mood, bpm, status, playing, muted) {
    state = {
      title,
      artist,
      mood,
      bpm,
      status,
      playing,
      muted,
    };
  }

  function disconnectGraph() {
    if (sourceNode) {
      sourceNode.disconnect();
    }
    if (analyser) {
      analyser.disconnect();
      analyser = null;
    }
  }

  function ensureAudio(src, title, artist, mood, bpm) {
    if (audio) {
      if (audio.src.endsWith(src)) {
        return;
      }
      disconnectGraph();
      sourceNode = null;
      audio.pause();
      audio.src = '';
    }

    audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audio.playsInline = true;
    audio.addEventListener('playing', () => {
      state.status = state.muted ? 'autoplay-muted' : 'playing';
      state.playing = true;
    });
    audio.addEventListener('pause', () => {
      state.status = 'paused';
      state.playing = false;
    });
    audio.addEventListener('error', () => {
      state.status = 'error';
      state.playing = false;
    });
    setState(src, title, artist, mood, bpm, state.status, state.playing, state.muted);
  }

  async function start(src, title, artist, mood, bpm) {
    console.info('JustMakeAudio start', title, src);
    ensureAudio(src, title, artist, mood, bpm);
    state.status = 'loading';

    if (!(await ensureContext())) {
      return;
    }

    disconnectGraph();
    analyser = context.createAnalyser();
    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.74;
    frequencyData = new Uint8Array(analyser.frequencyBinCount);

    if (!sourceNode) {
      sourceNode = context.createMediaElementSource(audio);
    }
    sourceNode.connect(analyser);
    analyser.connect(context.destination);

    audio.muted = false;
    audio.volume = audibleVolume;
    state.muted = false;

    try {
      await audio.play();
      state.status = 'playing';
      state.playing = true;
    } catch (error) {
      state.status = 'gesture-required';
      state.playing = false;
    }
  }

  function stop() {
    if (audio) {
      audio.pause();
    }
    state.playing = false;
    state.muted = false;
    state.status = 'paused';
  }

  function setMuted(muted) {
    state.muted = muted;
    if (audio) {
      audio.muted = muted;
      if (!muted) {
        audio.volume = audibleVolume;
      }
    }
    if (state.playing) {
      state.status = muted ? 'muted' : 'playing';
    }
  }

  function snapshot() {
    if (!analyser || !frequencyData || !state.playing) {
      return emptySnapshot();
    }

    analyser.getByteFrequencyData(frequencyData);
    const rawLow = average(frequencyData, 1, 18);
    const rawMid = average(frequencyData, 18, 88);
    const rawHigh = average(frequencyData, 88, frequencyData.length);
    const low = clamp(Math.pow(rawLow * 2.15, 0.72));
    const mid = clamp(Math.pow(rawMid * 1.82, 0.78));
    const high = clamp(Math.pow(rawHigh * 1.55, 0.82));
    const energy = clamp(low * 0.62 + mid * 0.27 + high * 0.11);
    const now = performance.now();
    const beat = energy > 0.26 && energy - lastEnergy > 0.035 && now - lastBeatAt > 150;

    if (beat) {
      lastBeatAt = now;
    }
    lastEnergy = lastEnergy * 0.62 + energy * 0.38;

    return {
      energy,
      low,
      mid,
      high,
      beat,
      playing: state.playing,
      muted: state.muted,
      status: state.status,
      spectrum: buildSpectrum(frequencyData, 64),
    };
  }

  const bridge = {
    start,
    stop,
    setMuted,
    snapshot,
  };
  window.JustMakeAudio = bridge;
  globalThis.JustMakeAudio = bridge;
  console.info('JustMakeAudio bridge ready');
})();
