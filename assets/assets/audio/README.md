# Audio Assets

이 폴더는 `JUST MAKE` 포트폴리오 첫 화면의 실사용 배경 음악 자산을 둔다.

## 현재 적용 트랙

- 트랙: Uppbeat `Matrix` by `Pecan Pie`
- 청음 URL: https://uppbeat.io/track/pecan-pie/matrix
- 파일: `assets/audio/matrix-pecan-pie.mp3`
- 상태: 포트폴리오 기본 배경음으로 연결됨.
- 출력 음량: `web/assets/js/audio_engine.js`의 `audibleVolume`으로 조절한다. 현재 값은 `0.18`.
- 시작 방식: 첫 진입 시 음소거 자동재생을 하지 않는다. 사용자가 첫 화면을 클릭하면 Matrix가 소리 나는 상태로 시작한다.

## 교체 방법

1. 라이선스가 확인된 `mp3`, `wav`, `ogg` 파일을 이 폴더에 추가한다.
2. `lib/audio/audio_track.dart`의 `portfolioAudioTracks`에서 `assetPath`, `title`, `artist`, `bpm`, `mood`, `intent`를 바꾼다.
3. `fvm flutter build web`로 빌드해 브라우저에서 `RUN AUDIO`를 눌러 확인한다.

브라우저 정책상 소리 나는 자동 재생은 하지 않는다. 사용자가 화면을 클릭하면 `web/assets/js/audio_engine.js`가 Matrix를 재생하고 Web Audio API로 저역, 중역, 고역, 에너지, beat 신호를 계산한다. 실제 분석값이 없으면 가짜 BPM/fallback pulse를 만들지 않는다.
