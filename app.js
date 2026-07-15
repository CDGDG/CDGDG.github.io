const projects = {
  finalsay: {
    title: "FinalSay",
    meta: "PERSONAL · MOBILE · AI",
    lead: "사람의 주장과 공감은 남기고, 그다음 판단을 AI에 맡긴 토론 앱입니다.",
    problem: "AI가 토론 전체를 대신하면 결과를 신뢰하기 어렵고 사용자가 참여할 이유도 줄어든다고 봤습니다.",
    decision: "사람은 주장과 공감까지만 참여하고, 공감이 높은 양측 주장을 추린 뒤 AI가 개입 없이 판결하도록 흐름을 나눴습니다.",
    result: "OAuth, JWT 갱신, FCM, 딥링크, 광고까지 연결해 App Store에 배포했고 토론 seed와 숏폼 운영 자동화로 확장했습니다.",
    stack: "Flutter, BLoC, Dio, Hive CE, Firebase, OAuth, OpenAI API, Python, MoviePy",
    images: [
      ["assets/images/finalsay_graphic.png", "FinalSay 프로젝트 소개 이미지"],
      ["assets/images/gallery/finalsay_ios_03_topic_detail_actual.png", "FinalSay 토론 상세 화면"],
      ["assets/images/gallery/finalsay_ios_02_ranking_actual.png", "FinalSay 랭킹 화면"],
    ],
    links: [["App Store", "https://apps.apple.com/app/id6758050388"]],
  },
  sdbn: {
    title: "쓰다보니",
    meta: "WORK · MOBILE",
    lead: "일기 작성부터 광고 보상과 포인트 사용까지 하나의 습관 흐름으로 연결한 리워드 앱입니다.",
    problem: "인증, 일기, 이미지, 광고와 서버 보상이 서로 다른 상태에서 끊기지 않고 이어져야 했습니다.",
    decision: "Cubit으로 API와 광고 상태를 나누고, 토큰 갱신과 이미지 압축·Presigned URL 업로드를 공통 흐름으로 정리했습니다.",
    result: "홈, 다이어리, 스토어, 마이페이지의 주요 기능과 실패·재시도 상태를 구현했습니다.",
    stack: "Flutter, Cubit, Dio Interceptor, JWT, Hive CE, Firebase, AdMob, Presigned URL",
    images: [
      ["assets/images/sdbn_graphic.png", "쓰다보니 프로젝트 소개 이미지"],
      ["assets/images/gallery/sdbn_diary.png", "쓰다보니 다이어리 화면"],
      ["assets/images/gallery/sdbn_roulette.png", "쓰다보니 리워드 화면"],
    ],
    links: [],
  },
  msg: {
    title: "뭐 생겨?",
    meta: "PERSONAL · MOBILE",
    lead: "집 근처 공사 중인 가게에 무엇이 생기는지 궁금해 시작한 공공데이터 위치 앱입니다.",
    problem: "인허가 데이터는 업종별 API와 필드가 달랐고 일부 API가 실패해도 나머지 결과는 보여줘야 했습니다.",
    decision: "40개 이상 API를 병렬 조회하고 후보 키 기반 파서, 좌표 변환, API별 부분 성공 상태를 구성했습니다.",
    result: "현재 위치와 검색 지역의 최근 인허가 정보를 지도에서 확인하도록 완성해 Android와 iOS에 배포했습니다.",
    stack: "Flutter, BLoC, Dio, Naver Maps, Geolocator, proj4dart, Freezed, AdMob",
    images: [
      ["assets/images/msg_graphic.png", "뭐 생겨 프로젝트 소개 이미지"],
      ["assets/images/gallery/msg_detail_screen.png", "뭐 생겨 인허가 상세 화면"],
      ["assets/images/gallery/msg_data_source_sheet.png", "뭐 생겨 데이터 출처 화면"],
    ],
    links: [
      ["Google Play", "https://play.google.com/store/apps/details?id=com.cdgdg.msg"],
      ["App Store", "https://apps.apple.com/kr/app/id6759196990"],
    ],
  },
  savetree: {
    title: "SaveTree",
    meta: "WORK · WEB · BACKEND",
    lead: "도시 수목의 위치, 관리 이력, 로드뷰와 IoT 정보를 한곳에서 다루는 B2G 관리 플랫폼입니다.",
    problem: "기존 외부 시스템은 느렸고 수천 그루의 수목을 노선과 행정 단위로 비교하기 어려웠습니다.",
    decision: "원본 데이터를 자체 MySQL과 Node.js API로 옮기고 Flutter Web 지도, 로드뷰, IoT 화면을 연결했습니다.",
    result: "강남구 수목 3,908그루를 관리하는 플랫폼을 납품했습니다.",
    stack: "Flutter Web, Node.js, MySQL, Naver Maps, LiDAR data, IoT",
    images: [
      ["assets/images/savetree_treemap.jpg", "SaveTree 수목 지도 화면"],
      ["assets/images/gallery/savetree_dashboard.jpg", "SaveTree 관리 대시보드"],
      ["assets/images/gallery/savetree_roadview.jpg", "SaveTree 로드뷰 화면"],
    ],
    links: [],
  },
  bapsang: {
    title: "밥상코스피",
    meta: "PERSONAL · MOBILE · WEB",
    lead: "장바구니 물가를 주식 시세처럼 직관적으로 비교하는 생활물가 서비스입니다.",
    problem: "식재료 가격 데이터는 있어도 지금 비싼지 싼지 한눈에 판단하기 어려웠습니다.",
    decision: "KAMIS 데이터를 지수와 등락 형태로 가공하고 앱, 웹, 관리자와 서버를 하나의 운영 구조로 연결했습니다.",
    result: "웹 서비스를 운영하고 Flutter 앱을 App Store에 배포했습니다.",
    stack: "Flutter, React, Node.js, Supabase, KAMIS API, Vercel",
    images: [
      ["assets/images/bapsang_feature.png", "밥상코스피 프로젝트 소개 이미지"],
      ["assets/images/gallery/bapsang_01_home.png", "밥상코스피 홈 화면"],
      ["assets/images/gallery/bapsang_02_market.png", "밥상코스피 시세 화면"],
    ],
    links: [
      ["Web", "https://bapsang-kospi.vercel.app"],
      ["App Store", "https://apps.apple.com/app/id6776868090"],
    ],
  },
  koreatrend: {
    title: "최신유행사이트",
    meta: "PERSONAL · AI · WEB",
    lead: "최근 48시간의 밈과 유행어를 출처 근거와 함께 보여주는 트렌드 대시보드입니다.",
    problem: "흩어진 유행 정보에 일반 뉴스와 팬덤 편향, AI가 만든 가짜 밈까지 섞여 있었습니다.",
    decision: "후보 수집 뒤 출처와 확산 근거를 확인하고 노이즈를 거르는 검증 절차를 데이터 갱신 전에 두었습니다.",
    result: "랭킹, 히트맵, 상세 분석을 제공하는 Flutter Web 서비스를 매일 운영하고 있습니다.",
    stack: "Flutter Web, Python, AI agents, evidence validation, Vercel",
    images: [
      ["assets/images/koreatrend_home.jpg", "최신유행사이트 홈 화면"],
      ["assets/images/gallery/koreatrend_full.jpg", "최신유행사이트 전체 화면"],
    ],
    links: [["Live", "https://koreatrend.vercel.app"]],
  },
};

const showcaseProjects = {
  finalsay: {
    type: "Mobile · AI",
    title: "FinalSay",
    copy: "사람이 주장하고 공감하면 AI가 판결하는 토론 앱",
    image: "assets/images/finalsay_graphic.png",
    alt: "FinalSay 앱 대표 화면",
  },
  msg: {
    type: "Mobile · Public Data",
    title: "뭐 생겨?",
    copy: "내 주변의 최근 인허가 정보를 지도에서 찾는 위치 앱",
    image: "assets/images/msg_home_map.png",
    alt: "뭐 생겨 앱 지도 화면",
  },
  bapsang: {
    type: "Mobile · Web · Data",
    title: "밥상코스피",
    copy: "식재료와 생필품 가격을 시세처럼 보여주는 생활물가 서비스",
    image: "assets/images/bapsang_feature.png",
    alt: "밥상코스피 서비스 화면",
  },
};

const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectCards = Array.from(document.querySelectorAll("[data-categories]"));

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    for (const candidate of filterButtons) {
      candidate.setAttribute("aria-pressed", String(candidate === button));
    }

    for (const card of projectCards) {
      const categories = card.dataset.categories.split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    }
  });
}

const showcaseMedia = document.querySelector(".showcase-media");
const showcaseImage = document.querySelector("#showcase-image");
const showcaseType = document.querySelector("#showcase-type");
const showcaseTitle = document.querySelector("#showcase-title");
const showcaseCopy = document.querySelector("#showcase-copy");
const showcaseLink = document.querySelector("#showcase-link");
const showcaseButtons = Array.from(document.querySelectorAll("[data-showcase-project]"));
let selectedShowcase = "finalsay";

function selectShowcase(projectId) {
  const project = showcaseProjects[projectId];
  if (!project || projectId === selectedShowcase) return;
  selectedShowcase = projectId;

  for (const button of showcaseButtons) {
    button.setAttribute("aria-selected", String(button.dataset.showcaseProject === projectId));
  }

  showcaseMedia.classList.add("is-changing");
  window.setTimeout(() => {
    showcaseImage.src = project.image;
    showcaseImage.alt = project.alt;
    showcaseType.textContent = project.type;
    showcaseTitle.textContent = project.title;
    showcaseCopy.textContent = project.copy;
    showcaseMedia.classList.remove("is-changing");
  }, 150);
}

showcaseButtons.forEach((button, index) => {
  button.addEventListener("click", () => selectShowcase(button.dataset.showcaseProject));
  button.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
    const next = (index + direction + showcaseButtons.length) % showcaseButtons.length;
    showcaseButtons[next].focus();
    showcaseButtons[next].click();
  });
});

const dialog = document.querySelector("#project-dialog");
const dialogClose = dialog.querySelector(".dialog-close");
const dialogImage = dialog.querySelector("#dialog-image");
const dialogImageCount = dialog.querySelector("#dialog-image-count");
const dialogThumbnails = dialog.querySelector("#dialog-thumbnails");
let lastProjectTrigger = null;

function setDialogImage(project, index) {
  const [source, alt] = project.images[index];
  dialogImage.style.opacity = "0";
  window.setTimeout(() => {
    dialogImage.src = source;
    dialogImage.alt = alt;
    dialogImageCount.textContent = `${index + 1} / ${project.images.length}`;
    dialogImage.style.opacity = "1";
  }, 100);

  for (const [thumbnailIndex, button] of Array.from(dialogThumbnails.children).entries()) {
    button.setAttribute("aria-pressed", String(thumbnailIndex === index));
  }
}

function openProject(projectId, trigger) {
  const project = projects[projectId];
  if (!project) return;
  lastProjectTrigger = trigger;

  dialog.querySelector("#dialog-meta").textContent = project.meta;
  dialog.querySelector("#dialog-title").textContent = project.title;
  dialog.querySelector("#dialog-lead").textContent = project.lead;
  dialog.querySelector("#dialog-problem").textContent = project.problem;
  dialog.querySelector("#dialog-decision").textContent = project.decision;
  dialog.querySelector("#dialog-result").textContent = project.result;
  dialog.querySelector("#dialog-stack").textContent = project.stack;

  dialogThumbnails.replaceChildren();
  project.images.forEach(([source, alt], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `${project.title} 화면 ${index + 1} 보기`);
    button.setAttribute("aria-pressed", String(index === 0));
    const image = document.createElement("img");
    image.src = source;
    image.alt = "";
    button.append(image);
    button.addEventListener("click", () => setDialogImage(project, index));
    dialogThumbnails.append(button);
  });

  const links = dialog.querySelector("#dialog-links");
  links.replaceChildren();
  project.links.forEach(([label, href]) => {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    const icon = document.createElement("i");
    icon.dataset.lucide = "external-link";
    link.append(icon);
    links.append(link);
  });

  setDialogImage(project, 0);
  dialog.showModal();
  dialog.scrollTop = 0;
  if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
}

for (const button of document.querySelectorAll("[data-open-project]")) {
  button.addEventListener("click", () => openProject(button.dataset.openProject, button));
}

showcaseLink.addEventListener("click", (event) => {
  event.preventDefault();
  openProject(selectedShowcase, showcaseLink);
});

dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => lastProjectTrigger?.focus());

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".section-heading, .career-list li, .project-card, .automation-list article, .skill-columns > div"
  );
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );
  for (const target of revealTargets) {
    target.classList.add("reveal-ready");
    revealObserver.observe(target);
  }
}

const navLinks = Array.from(document.querySelectorAll(".main-nav a[href^='#']"));
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      const active = entries.find((entry) => entry.isIntersecting);
      if (!active) return;
      for (const link of navLinks) {
        link.setAttribute("aria-current", String(link.getAttribute("href") === `#${active.target.id}`));
      }
    },
    { rootMargin: "-25% 0px -65%", threshold: 0 }
  );
  navSections.forEach((section) => navObserver.observe(section));
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

if (window.lucide) {
  window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
}
