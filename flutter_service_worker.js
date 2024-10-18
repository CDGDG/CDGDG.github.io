'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c70e1f89ea8a412dd569a44de7e244fc",
"version.json": "c49069c0f21d8e9066a96392d1020971",
"favicon.ico": "68818d659e9357599823ac623e473011",
"index.html": "c544e9acc3da0f4c776a73fd63edd3f9",
"/": "c544e9acc3da0f4c776a73fd63edd3f9",
"main.dart.js": "7e3c1eb22ec4a3180cd038abbeb45390",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/static.yml": "6dece455dc91e6f867499fabc7ac5be9",
"manifest.json": "32c39daafefc5d31e84993a937bf32fa",
".git/config": "ecf17fa5668791466af70c0dda67f69d",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/10d95888929e1d11496229e5d70a422d287307": "17761293a6e6bbc10fce7ab62c6dc5cf",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/4c2bb46af665a1c2b677cf2880611965510a45": "ca65df0bfd3097dfe89c8d927a21079b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/ed/edacddfd9d19239245484d1857c21d799f9854": "827ae06b6eb8ec5b1e9082a6c4a22b95",
".git/objects/pack/pack-43e633a9c977184f8056896d7e74f2dbf90231ac.pack": "46508bb9d8676d80a1e92f5a677860e5",
".git/objects/pack/pack-43e633a9c977184f8056896d7e74f2dbf90231ac.rev": "56312cc3bc1d86c4a705843056f0c20b",
".git/objects/pack/pack-43e633a9c977184f8056896d7e74f2dbf90231ac.idx": "c8cfc6f46ff3f641e825d095b1fe1817",
".git/objects/7c/ba13668e514f1f32af59ed5594a03e256e6b06": "5c804979228f022f226b4dc3e8d7eb37",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/0e275f23712fc83d9df240d9aacb19c6f27c21": "bc0cee73fc0640424ad94691e36c817e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/80adadcef9a69f9ef20be6fbd779eb6557e526": "1f9c0d71f933d03b15ef0ceac4c3ae62",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/c2/af55edc19afbb7a5b710cb34242515af52bafc": "0476ff724b053075a49ee7dca336d60e",
".git/objects/2d/3562826a0d1b87670160e5bf0808ce514c8dc8": "904b7fb7900faa351d5cae3f71a23b58",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/e52c6e6b7de163b6405741ab1a5cb00dea3fe9": "9b5ff0ef4debb04ce50d9c527b9245cb",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/926fa6d6bf5f15be025b8c00bc6176c45c3e1a": "4d5d2f1ed52483266363b8696f04bcb2",
".git/objects/7a/b50da540c4fe0cd6e27457af60233e1aed7f30": "87345f5731f03d95b3d3284a69504f78",
".git/objects/25/27230a81e9751bccb72bd9e0aba585fd803197": "85a924a74a8c5fea87decb40cc3dab71",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a041051e50581226b6ee7847f6e34596",
".git/logs/refs/heads/main": "a041051e50581226b6ee7847f6e34596",
".git/logs/refs/remotes/origin/HEAD": "e21a153df140c0fe14096e5b3b0fb901",
".git/logs/refs/remotes/origin/main": "ece6c47dbd30947f7a4c38f6a879d5ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7fcc540d99170ca5b3fd5852bcc61df2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "7fcc540d99170ca5b3fd5852bcc61df2",
".git/index": "90b3dbdfd4d478ba4c6d6ed592faf509",
".git/packed-refs": "e6e834f7253a8e20078c72076288bcb8",
".git/COMMIT_EDITMSG": "4ba10d251fa348a89b9b5c073855fd50",
".git/FETCH_HEAD": "052db2ba479cc2b91be8f8a5bf6bdf96",
"assets/AssetManifest.json": "8144e3b8280d82d754cc7b69c6f4d2b0",
"assets/NOTICES": "ef01254f5614a35f490e6a930f54b801",
"assets/FontManifest.json": "cab0067f917c1fe5da6c67bbae551a69",
"assets/AssetManifest.bin.json": "2614cb1f5485d197a62d9fe2bff9ae8d",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9b6d35d89c29fa4cd2540e4cd08c4c56",
"assets/fonts/MaterialIcons-Regular.otf": "be1268ac7cfe85ba5758d47779b1af17",
"assets/assets/images/js_icon.svg": "75a2cc3393300119a5446751dd63c0ab",
"assets/assets/images/java_icon.svg": "c690b7a95b5da03fab6d0caefae16ccd",
"assets/assets/images/mysql_icon.svg": "0b5bd1b7dc517deb2b8f85e2bcb87dfb",
"assets/assets/images/tensorflow_icon.svg": "d770560dee47fdbf62ffcfccb1d95f34",
"assets/assets/images/python_icon.svg": "4fa5adc39ab2d2c2cd5ef1ca102e7176",
"assets/assets/images/artc_validator_4.jpg": "4080ebcd0da817d3f867369aae3dd949",
"assets/assets/images/artc_validator_capture_light.jpg": "cf5087875f96e93b7c80dc6d7091b22a",
"assets/assets/images/artc_validator_5.jpg": "056daa5569eaeb41072b9a69333497eb",
"assets/assets/images/mariadb_icon.svg": "1a932bef3e3d634365a2e7e24d09fbb2",
"assets/assets/images/gitlab_icon.svg": "ca1cbf0872fc8042946d12524203dc2e",
"assets/assets/images/bloc_icon.svg": "27d733ca50820f24f12bf2be4360da3c",
"assets/assets/images/firebase_icon.svg": "a866e2dd1056834ab7e78656dcaf4a1f",
"assets/assets/images/artc_validator_2.jpg": "bb1a4a4259839b5ed1455b06cfe3e865",
"assets/assets/images/dart_icon.svg": "cd3aad8a4aaee8f14b0512b941cad6f1",
"assets/assets/images/artc_validator_3.jpg": "7ee40ae244d8995cd9ac60b68563b557",
"assets/assets/images/artc_validator_1.jpg": "b56296564dbcb7add31838b5a7b4e4d9",
"assets/assets/images/usw_logo.png": "2f71901a246839d828225ffd24fa1f60",
"assets/assets/images/oracle_icon.svg": "6ad0eec06ed93615a81b0e7ad12db113",
"assets/assets/images/css_icon.svg": "09e4ec27756a18c936f92f4e2957e822",
"assets/assets/images/bootstrap_icon.svg": "96b594ff3490bd194221be5fbd6611ea",
"assets/assets/images/github_icon.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/images/logo.png": "2394c4942b80201be4dab7029f5f9a0d",
"assets/assets/images/html_icon.svg": "a2d427be56a5448f2788d0e0f68aba0c",
"assets/assets/images/spring_icon.svg": "300de6f54cb19b1d6d488faf23841369",
"assets/assets/images/graphql_icon.svg": "610191bfe8d82441112b192575fc82b8",
"assets/assets/images/build_performance_icon.png": "3ef42a152ff839de958124aeabfe887c",
"assets/assets/images/sliding_puzzle_icon.png": "9837d1388c55f951c12fdf9ed326666b",
"assets/assets/images/build_performance_2.png": "682f45033b09742785813c178edc1c7c",
"assets/assets/images/django_icon.svg": "14520033b2af94187c9f54e079867b53",
"assets/assets/images/google_play_logo.png": "f6cc83e5d4406c2ecd7565eee5ff6cb5",
"assets/assets/images/highschool_logo.png": "a1ee6f2e149de4b1f9a7fe8a4e9373a5",
"assets/assets/images/elementalschool_logo.png": "29d55b5d040f94b29f71ae6a2bb09d8d",
"assets/assets/images/sliding_puzzle_1.gif": "0e4aa2ef9f0551331b30d977c5a65eb0",
"assets/assets/images/slack_icon.svg": "48a3232b44d5ac5cc40f44ae6941373d",
"assets/assets/images/artc_validator_icon.png": "dafc7706faaa8d178f1923a3f3fcbe55",
"assets/assets/images/build_performance_3.png": "cb86a446bc8691f0d032c389e6c1216c",
"assets/assets/images/sliding_puzzle_capture_dark.png": "7db5ae9b1abb498cadce7f5bb0c04f9b",
"assets/assets/images/build_performance_1.png": "7267db94343a55520774d125c1f07a6a",
"assets/assets/images/sliding_puzzle_3.gif": "6f146a63fb3d1fae779a8f7aafcd6094",
"assets/assets/images/opencv_icon.svg": "c229ba5dd070b2027bf2a062112577d6",
"assets/assets/images/middleschool_logo.png": "b8c2493f2b6fa706cb88b65dbe706463",
"assets/assets/images/build_performance_capture.png": "8484d3d3cc1f3e42b079aff266cbc7be",
"assets/assets/images/sliding_puzzle_2.gif": "06a2e4eb5842b7627dec68f7ed06c6a0",
"assets/assets/images/build_performance_4.png": "179a3cf7cdfa5fd422a6c067d08130b0",
"assets/assets/images/sliding_puzzle_capture_light.png": "2077dfa35233db158bf3dbc67ed7f1e9",
"assets/assets/images/artc_validator_capture_dark.jpg": "597e05f33fa1702604ac53252d134dfb",
"assets/assets/images/flutter_icon.svg": "b696f912b6c75845665692210772405b",
"assets/assets/images/sliding_puzzle_4.gif": "9fc7304be2e6e04c63ec745a5bdc09a8",
"assets/assets/videos/sliding_puzzle_3.mp4": "f28aa094cd82b280ca08e8402f6f8c30",
"assets/assets/videos/sliding_puzzle_2.mp4": "92e4c622612b0ae715de84a43bd7a374",
"assets/assets/videos/sliding_puzzle_1.mp4": "e07bcf4660cd6acd882ed7c52b3260c2",
"assets/assets/videos/sliding_puzzle_4.mp4": "99ec2cd766ee6e0651e45631e828fd8b",
"assets/assets/fonts/Urbanist/Urbanist-VariableFont_wght.ttf": "bfeaaa729391fa9dfdfb3ae36cf5429b",
"assets/assets/fonts/Urbanist/Urbanist-Italic-VariableFont_wght.ttf": "4a875201edd86825f213e268124d301e",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "c54486c33610a1fca147afc18af3034f",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "a49032b6a945b021303f16b664f87e6c",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "94fbe93542f684134cad1d775947ca92",
"assets/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "ff9c45e92d16324b8964447d12d1f458",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "a7fe50578d9aa3966c925cb9722db03a",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "b3638b16904211d1d24d04ce53810c4d",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "2ed625fc9f039d801a5aab9b6f9cd8ef",
"assets/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "a67f4df02f4d73bb8bfd5bff421e4d1f",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "9c3e2f21cc8fba26dc3da67e89a9365d",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "cce7ff8c1d7999f907b6760fbe75d99d",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"assets/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "75c4176c64611f32faf01a5de7631877",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "8a4a6844448e210672d54f8b32932ee9",
"assets/assets/fonts/Pacifico/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/fonts/Diphylleia/Diphylleia-Regular.ttf": "c64ea36c6f04231770e8798fb6058503",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
