'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d6d1fceb68254636278527351bf3992f",
"version.json": "c49069c0f21d8e9066a96392d1020971",
"favicon.ico": "68818d659e9357599823ac623e473011",
"index.html": "c544e9acc3da0f4c776a73fd63edd3f9",
"/": "c544e9acc3da0f4c776a73fd63edd3f9",
"main.dart.js": "82486a5464296f3ac0dd28e7bb7493f1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "32c39daafefc5d31e84993a937bf32fa",
"assets/AssetManifest.json": "c164f51d3a19330be90e74b339e36bae",
"assets/NOTICES": "83b7b17021f537f10b30e8e7119f68ab",
"assets/FontManifest.json": "58d70fde181afd2373004507271659bb",
"assets/AssetManifest.bin.json": "0a46ea640503d87eed9d64566dc7097c",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "055972ca54a2f5760b3e1b5beedef914",
"assets/fonts/MaterialIcons-Regular.otf": "bc77ba3d4d8202c199fa26c9ea69eadf",
"assets/assets/images/js_icon.svg": "75a2cc3393300119a5446751dd63c0ab",
"assets/assets/images/box_ocr_4.jpeg": "d069def049618e9a862e89414fffc5a0",
"assets/assets/images/parking_app_2.jpeg": "a0f2c806027663494f3c0a68e1a34bb3",
"assets/assets/images/about_error_image.png": "d2fb477a0c59e992b975d4ef8017a925",
"assets/assets/images/java_icon.svg": "c690b7a95b5da03fab6d0caefae16ccd",
"assets/assets/images/clap_icon.png": "26865ce82e4cd0d544614c602907bcff",
"assets/assets/images/clap_login.png": "e0161c2e889f70a6d03b048203424cf4",
"assets/assets/images/banner_1.png": "555181ef81e31afced8c6d0e44d927f2",
"assets/assets/images/clap_add_location_2.png": "36cfa27b7a0f6b1fd0a6426d3bd03fea",
"assets/assets/images/bloc_code.png": "11d3d97b9bdb11f395169a4574208231",
"assets/assets/images/clap_login_github.png": "1703e923aaf8e662796f8d5cd761e28e",
"assets/assets/images/clap_friend.png": "29ddc3d520e7c0693fe40c322d69fb25",
"assets/assets/images/mysql_icon.svg": "0b5bd1b7dc517deb2b8f85e2bcb87dfb",
"assets/assets/images/banner_2.png": "431e3bca17f57b10049aa50b7d7f0c8f",
"assets/assets/images/parking_app_3.jpeg": "8170a55dfe955db6c83fb05e2da3d6c1",
"assets/assets/images/clap_add_location_1.png": "7bf93f622189ee48dc29c15c196effea",
"assets/assets/images/tensorflow_icon.svg": "d770560dee47fdbf62ffcfccb1d95f34",
"assets/assets/images/python_icon.svg": "4fa5adc39ab2d2c2cd5ef1ca102e7176",
"assets/assets/images/artc_validator_4.jpg": "4080ebcd0da817d3f867369aae3dd949",
"assets/assets/images/akbocado_3.png": "53c10ae2f65acbd0d851ca505607d212",
"assets/assets/images/clap_capture_1.png": "5ce2dccd653f497dd9377b9298b677ad",
"assets/assets/images/artc_validator_capture_light.jpg": "cf5087875f96e93b7c80dc6d7091b22a",
"assets/assets/images/artc_validator_5.jpg": "056daa5569eaeb41072b9a69333497eb",
"assets/assets/images/akbocado_2.png": "af611edb76fbba5666ced49fbe75cd83",
"assets/assets/images/mariadb_icon.svg": "1a932bef3e3d634365a2e7e24d09fbb2",
"assets/assets/images/gitlab_icon.svg": "ca1cbf0872fc8042946d12524203dc2e",
"assets/assets/images/clap_capture_2.png": "8cd4e0bccb1a03c5eedc936afc85d324",
"assets/assets/images/box_ocr_2.jpeg": "0959ecd54d80059c69087134a96fd77a",
"assets/assets/images/parking_app_4.jpeg": "512b656ceeafe9f221b6832e26ed852c",
"assets/assets/images/clap_capture_3.png": "ee1cb2bcbea81a2d388d6c9f35ba49a3",
"assets/assets/images/bloc_icon.svg": "27d733ca50820f24f12bf2be4360da3c",
"assets/assets/images/akbocado_1.png": "4704c7eaa48bdc49f235564313c2cc9e",
"assets/assets/images/firebase_icon.svg": "a866e2dd1056834ab7e78656dcaf4a1f",
"assets/assets/images/banner_icon.png": "63dd89a7653a2298298b22c7f8bf0174",
"assets/assets/images/artc_validator_2.jpg": "bb1a4a4259839b5ed1455b06cfe3e865",
"assets/assets/images/dart_icon.svg": "cd3aad8a4aaee8f14b0512b941cad6f1",
"assets/assets/images/parking_app_5.jpeg": "1047996aa013b99fe8b3355e6d4e36ed",
"assets/assets/images/box_ocr_3.jpeg": "9d25c1217260817e5c74740fc7bf71b6",
"assets/assets/images/artc_validator_3.jpg": "7ee40ae244d8995cd9ac60b68563b557",
"assets/assets/images/artc_validator_1.jpg": "b56296564dbcb7add31838b5a7b4e4d9",
"assets/assets/images/clap_capture_4.png": "f517d376fb8ead10e052d5d387c52584",
"assets/assets/images/usw_logo.png": "2f71901a246839d828225ffd24fa1f60",
"assets/assets/images/parking_app_icon.png": "ab6ef022a9e76ca304fddeac4371b5e9",
"assets/assets/images/oracle_icon.svg": "6ad0eec06ed93615a81b0e7ad12db113",
"assets/assets/images/clap_home.png": "76209c8c2557af215927777107eb6078",
"assets/assets/images/css_icon.svg": "09e4ec27756a18c936f92f4e2957e822",
"assets/assets/images/bootstrap_icon.svg": "96b594ff3490bd194221be5fbd6611ea",
"assets/assets/images/clap_add_3.png": "02ab35df914bced10fb3e71c6c71ac65",
"assets/assets/images/clap_add_2.png": "a51af3993dfab6d70bce48abd7666d22",
"assets/assets/images/github_icon.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/images/clap_add_image.png": "f720adcc6a8ef8164f06b682b242d9de",
"assets/assets/images/parking_app_6.jpeg": "d9bf0e1f14b6c1600a2371819fd58bdf",
"assets/assets/images/clap_detail.png": "a456aa1ab7667f581f0e825a00b401d4",
"assets/assets/images/clap_add_1.png": "c7a1dab40edb1ffae2345fb98f9d3275",
"assets/assets/images/logo.png": "2394c4942b80201be4dab7029f5f9a0d",
"assets/assets/images/box_ocr_1.jpeg": "47f4be7ff435ad8274d2ff6fe0619850",
"assets/assets/images/html_icon.svg": "a2d427be56a5448f2788d0e0f68aba0c",
"assets/assets/images/clap_login_google.png": "c1928ca20817f54097f875fbaa0fe3c8",
"assets/assets/images/clap_add_friends.png": "fcd99132dd34b5a10d7810eb3e3f57a1",
"assets/assets/images/clap_home_drawer.png": "e84c16d9caf42120309dcf28b3349d08",
"assets/assets/images/clap_add_daterange.png": "b4245f40233e3ce156f0dcb73e1b73c5",
"assets/assets/images/spring_icon.svg": "300de6f54cb19b1d6d488faf23841369",
"assets/assets/images/clap_setting.png": "9b92ec5da83f1bd3ee9a3bc9688c6aac",
"assets/assets/images/graphql_icon.svg": "610191bfe8d82441112b192575fc82b8",
"assets/assets/images/build_performance_icon.png": "3ef42a152ff839de958124aeabfe887c",
"assets/assets/images/sliding_puzzle_icon.png": "9837d1388c55f951c12fdf9ed326666b",
"assets/assets/images/build_performance_2.png": "682f45033b09742785813c178edc1c7c",
"assets/assets/images/django_icon.svg": "da233e2d2eb2fa886848d04ef1665456",
"assets/assets/images/akbocado_icon.png": "c9702f5b672ec29bb646371e3fb30b2d",
"assets/assets/images/google_play_logo.png": "f6cc83e5d4406c2ecd7565eee5ff6cb5",
"assets/assets/images/highschool_logo.png": "a1ee6f2e149de4b1f9a7fe8a4e9373a5",
"assets/assets/images/elementalschool_logo.png": "29d55b5d040f94b29f71ae6a2bb09d8d",
"assets/assets/images/sliding_puzzle_1.gif": "0e4aa2ef9f0551331b30d977c5a65eb0",
"assets/assets/images/slack_icon.svg": "48a3232b44d5ac5cc40f44ae6941373d",
"assets/assets/images/artc_validator_icon.png": "dafc7706faaa8d178f1923a3f3fcbe55",
"assets/assets/images/build_performance_3.png": "cb86a446bc8691f0d032c389e6c1216c",
"assets/assets/images/clap_add_time.png": "79c8677f159929674c5122702fbe7d42",
"assets/assets/images/sliding_puzzle_capture_dark.png": "7db5ae9b1abb498cadce7f5bb0c04f9b",
"assets/assets/images/build_performance_1.png": "7267db94343a55520774d125c1f07a6a",
"assets/assets/images/sliding_puzzle_3.gif": "6f146a63fb3d1fae779a8f7aafcd6094",
"assets/assets/images/opencv_icon.svg": "c229ba5dd070b2027bf2a062112577d6",
"assets/assets/images/middleschool_logo.png": "b8c2493f2b6fa706cb88b65dbe706463",
"assets/assets/images/build_performance_capture.png": "8484d3d3cc1f3e42b079aff266cbc7be",
"assets/assets/images/pyqt_icon.png": "9f91d532414f299139c3954d31af0281",
"assets/assets/images/sliding_puzzle_2.gif": "06a2e4eb5842b7627dec68f7ed06c6a0",
"assets/assets/images/build_performance_4.png": "179a3cf7cdfa5fd422a6c067d08130b0",
"assets/assets/images/clap_home_holiday.png": "ce9d3e6e3096062eb9d3fda42abb2891",
"assets/assets/images/sliding_puzzle_capture_light.png": "2077dfa35233db158bf3dbc67ed7f1e9",
"assets/assets/images/artc_validator_capture_dark.jpg": "597e05f33fa1702604ac53252d134dfb",
"assets/assets/images/parking_app_1.jpeg": "079bce1593545f6782dcaa1953837c80",
"assets/assets/images/flutter_icon.svg": "b696f912b6c75845665692210772405b",
"assets/assets/images/sliding_puzzle_4.gif": "9fc7304be2e6e04c63ec745a5bdc09a8",
"assets/assets/videos/sliding_puzzle_3.mp4": "f28aa094cd82b280ca08e8402f6f8c30",
"assets/assets/videos/sliding_puzzle_2.mp4": "92e4c622612b0ae715de84a43bd7a374",
"assets/assets/videos/sliding_puzzle_1.mp4": "e07bcf4660cd6acd882ed7c52b3260c2",
"assets/assets/videos/sliding_puzzle_4.mp4": "99ec2cd766ee6e0651e45631e828fd8b",
"assets/assets/fonts/Urbanist/Urbanist-VariableFont_wght.ttf": "bfeaaa729391fa9dfdfb3ae36cf5429b",
"assets/assets/fonts/Urbanist/Urbanist-Italic-VariableFont_wght.ttf": "4a875201edd86825f213e268124d301e",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-ExtraLight.ttf": "56f557fcebda83baa33cd8e0622102d6",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Regular.ttf": "21d164e86f5cdb0161376ffbd601f339",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-SemiBold.ttf": "789f4447e6632a560edd1467a018552a",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Medium.ttf": "2424a629f9970a11ed29f68d96f1b75e",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Light.ttf": "42871cceaf1dba424ae957424dfb016d",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Thin.ttf": "c049c4ce676269a9af04992ff383756d",
"assets/assets/fonts/IBMPlexSansKR/IBMPlexSansKR-Bold.ttf": "c62fa10d33ac6811e5c9c15ca821b35a",
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
