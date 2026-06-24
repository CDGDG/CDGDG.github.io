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

  function syntheticSnapshot() {
    if (!audio || !state.playing) {
      return {
        energy: 0,
        low: 0,
        mid: 0,
        high: 0,
        beat: false,
        playing: state.playing,
        muted: state.muted,
        status: state.status,
      };
    }
    const bpm = state.bpm || 84;
    const beatLength = 60 / bpm;
    const phase = (audio.currentTime % beatLength) / beatLength;
    const pulse = Math.exp(-phase * 7);
    const slow = (Math.sin(audio.currentTime * 1.4) + 1) / 2;
    return {
      energy: clamp(0.20 + pulse * 0.42 + slow * 0.10),
      low: clamp(0.18 + pulse * 0.52),
      mid: clamp(0.12 + slow * 0.26),
      high: clamp(0.10 + Math.max(0, Math.sin(audio.currentTime * 8)) * 0.18),
      beat: phase < 0.12,
      playing: state.playing,
      muted: state.muted,
      status: state.status,
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

  async function autoplayMuted(src, title, artist, mood, bpm) {
    console.info('JustMakeAudio autoplay muted', title, src);
    disconnectGraph();
    ensureAudio(src, title, artist, mood, bpm);
    audio.muted = true;
    audio.volume = 0;
    state.muted = true;
    state.status = 'autoplay-muted';

    try {
      await audio.play();
      state.status = 'autoplay-muted';
      state.playing = true;
    } catch (error) {
      state.status = 'autoplay-blocked';
      state.playing = false;
    }
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
    audio.volume = 1;
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

  function snapshot() {
    if (!analyser || !frequencyData || !state.playing) {
      return syntheticSnapshot();
    }

    analyser.getByteFrequencyData(frequencyData);
    const low = clamp(average(frequencyData, 1, 18) * 1.28);
    const mid = clamp(average(frequencyData, 18, 88) * 1.12);
    const high = clamp(average(frequencyData, 88, frequencyData.length) * 1.04);
    const energy = clamp(low * 0.52 + mid * 0.30 + high * 0.18);
    const now = performance.now();
    const beat = energy > 0.34 && energy - lastEnergy > 0.055 && now - lastBeatAt > 180;

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
    };
  }

  const bridge = {
    autoplayMuted,
    start,
    stop,
    snapshot,
  };
  window.JustMakeAudio = bridge;
  globalThis.JustMakeAudio = bridge;
  console.info('JustMakeAudio bridge ready');
})();
