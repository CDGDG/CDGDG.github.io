# Audio Assets

이 폴더는 `JUST MAKE` 포트폴리오 첫 화면의 교체 가능한 배경 음악 자산을 둔다.

## 교체 방법

1. 라이선스가 확인된 `mp3`, `wav`, `ogg` 파일을 이 폴더에 추가한다.
2. `lib/audio/audio_track.dart`의 `sampleAudioTracks`에서 `assetPath`, `title`, `artist`, `bpm`, `mood`, `intent`를 바꾼다.
3. `fvm flutter build web`로 빌드해 브라우저에서 `RUN AUDIO`를 눌러 확인한다.

브라우저 정책상 소리 나는 자동 재생은 하지 않는다. 첫 진입 시에는 muted autoplay로 음원을 무음 재생하고, 사용자가 `UNMUTE`를 누르면 `web/assets/js/audio_engine.js`가 Web Audio API로 저역, 중역, 고역, 에너지, beat 신호를 계산한다.
