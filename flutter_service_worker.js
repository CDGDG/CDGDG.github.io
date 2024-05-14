'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e306e372131b3d5caa0d0cb984437a56",
".git/config": "df0a1fa85530ea1ed129804219121b04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4d8f98f8698824bca8714de4d6de8371",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e8f93fde4334d2dee674e1fc5efb8f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4396ee64630230d8dbe7d726dc7a8424",
".git/logs/refs/heads/main": "4396ee64630230d8dbe7d726dc7a8424",
".git/logs/refs/remotes/origin/HEAD": "f359c4bedb7348f4dee0f1e92cea14a9",
".git/logs/refs/remotes/origin/main": "40cf213e8c811c50e97322a23f9cc198",
".git/objects/05/d757e28888d6b8d88066cbffc37c1567bc0f27": "737bb2eab81b40cb18290a005a6acb6b",
".git/objects/0c/9172bb890e03dacd04d02fcbeacb25dff04ac6": "48d948c0aadd02d655671b0e956d1e9e",
".git/objects/12/99fef0f3a4f0bb7bdb2d0d054df48f00c03af9": "a9dcfd6adcad7e8132b67166436a36bc",
".git/objects/16/cad409d021099b9a0d9257f6061d7d3da03dc3": "8fd76fdeb97bd70d7a456f4e5eca362c",
".git/objects/18/5c46afc88e32ae0e6bca8cf694599ec28e24fe": "5d3a0a34d75a5ddd79116d9be8fcb9aa",
".git/objects/19/8460abb7fe96823f1a5598df24f545b64e9aef": "3f343240c31426b229a91c8a01dceca8",
".git/objects/20/ea3b56e0cc4ecb0fc9cbf41d6f54f7f33f8f2c": "09e56696db7bdad83250db7dd0907e8c",
".git/objects/26/a0c2761c19eaf3c0dccd228576bc7a857274ce": "f4b1f468ec1c6105b4d17aac648619fb",
".git/objects/27/02696875837927b90b9b7418e852e7ed0ac909": "fa5ab2a3bcfe93c652501e2427f163a0",
".git/objects/2a/5fbcfb737168768020e988c3d2b4caf0733d99": "ea6bee2af6f16a6ac0e4f4443170ed04",
".git/objects/40/604921f44e0f60fd672536968f8b4941712ebe": "0187363ce3ff503b0a4638dfcf45b51b",
".git/objects/45/4f330430ad6848466a12df546833256b350512": "6ecb58d83de53706902849e30349a219",
".git/objects/4b/1f844647a6eaa0ece093b95364819fbf7bba7a": "9d4aad0bbabc2744bbfcbf6192dcb27f",
".git/objects/53/553c98f6e3bdf2dd151ee94eb2a4a6539d879e": "c99fd9c5fb752fc07861c98b0ac7a589",
".git/objects/54/8e667e9b8a63f2537f15cd76cd66e7e6642f87": "e5a107928070b472c433ba31a81c473f",
".git/objects/55/99581dad31dabe617bdc3fa3e77c82e1cae7a3": "b1228de3adde23450508933020c7e5f1",
".git/objects/56/42fff64180d05d3b69fb5a7abf0ada9aebdddb": "a411c0b150bb7923f8cdf071f2106f01",
".git/objects/5d/dbbc038030e7784842ee11cc04ce92a8086cab": "db5c333f94179fac8695f12daa5adb97",
".git/objects/63/c700b22e124d8fc2a7c0c79744742611cdaa95": "5c633ec7ae46e5c6e237950269bab4e2",
".git/objects/72/28d9e49cf73e73e0fb5de879d04c483aeb9d45": "71be1de8cf4ffd7b7809b1123b8fa60f",
".git/objects/79/111db4992d827d179e99530695eebab5fd5117": "bab8ba7e300b8a2156fdc788e83bf205",
".git/objects/79/d0bb098e0a55e3dc2adfad1f248c4ddce1ba16": "ce86ee58412200f3f3d707b3e78ef4f8",
".git/objects/7c/5a07314396c138e508e07b07ca909fec12f7da": "414e7c416753c0b42ecf8dcb7c26a401",
".git/objects/7c/5c2fae3f7bfcd4f85f45b6abae33d9f20bdf27": "0bee522d957bf8a4c6b897dd684603df",
".git/objects/83/4e9ef4f68da8d9f6f683ce960545dd320d887c": "25a15b603f8bce3cf3f7712836757d0b",
".git/objects/8e/5adaa02f22b19b3d1b73bf68b66c16d1e9514c": "c265487341721caa0a9ce352700d4c05",
".git/objects/99/5d1c6672f6cf7283b35df099a65e6f3a80414e": "f2167fbb5a2908abb3f44c6c8ec0f884",
".git/objects/af/9e01073af6736e1024e039c41df283b27a7a9e": "43462f3d2f519e2f69107dd762e3563a",
".git/objects/b0/012adf07cb1f797f9262fedc6f513aa40c43bc": "9adaf628c15d6b021f258ad122f1f9ac",
".git/objects/b1/7db19a4b578a1a1f9d77d92087f080ae607047": "b3c2ca2a89ef302a2b11e167246cf912",
".git/objects/b5/63ca81dd9b6097bfaebfb10cec4b8bc0026389": "107714d5f95b69a8cf4248674461e3ce",
".git/objects/be/388bf5f96ec449e87861f68e2597376dd551e5": "1702647769310164ffcf72b36093414e",
".git/objects/c1/1ef262f5c55dd08f09f0612f96018bb0cb2d71": "16d788d87b001a7e065312eb5fa52cac",
".git/objects/ce/87fdfc87a2c7a19649216b6f8b44ea396770cc": "cf3e4c71b174f7eafeab26706668c29f",
".git/objects/da/4f3b7912d211a5dea1b3259961dac43bab0b62": "d2b4498c2503b8f78003b6c00dba77cc",
".git/objects/e4/e8b95f08e85edca65ef610f4a73bd8d4026d06": "13e371675c77db08256830f35470710a",
".git/objects/ec/c49f485155ad061141e390d9feb51344dc7402": "c6fdddb5555a3e89f5984e3f5ad60b8f",
".git/objects/f3/5ef778f469b1eb658e14ef80dfdf2d42268d5f": "99237eca0fc14b012c0ac0f8a734b953",
".git/objects/fa/82b85c699048191f134a55d201960b7f4a69f1": "89f8806b5904a0d180609f5ba55d6057",
".git/objects/pack/pack-3e6c1ad9737cba95860f18acf3aff892f9670565.idx": "2586dfd70c52cae4cb4ea18b904d4319",
".git/objects/pack/pack-3e6c1ad9737cba95860f18acf3aff892f9670565.pack": "9ff9aefcd5ef0fcd8b8296528c7bf24b",
".git/objects/pack/pack-3e6c1ad9737cba95860f18acf3aff892f9670565.rev": "2cf7e9fa00765ef434c3ce85f8eff9b5",
".git/ORIG_HEAD": "44ac069776b1df47cbe6a74b3ee3f3dd",
".git/packed-refs": "1caf4e72d37fba08328ea174ee3acd29",
".git/refs/heads/main": "9ba60987769ea70d503600e18bdd06bf",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9ba60987769ea70d503600e18bdd06bf",
".github/workflows/static.yml": "7b30ac9604a8f2495b94fe5be3292699",
"assets/AssetManifest.bin": "b9df984171f89d089da25716d6ef6ca7",
"assets/AssetManifest.bin.json": "1095815bf55aaffcfb630e91a4cf5b41",
"assets/AssetManifest.json": "0676917f89be6fce7df9686438537c04",
"assets/assets/fonts/Diphylleia/Diphylleia-Regular.ttf": "c64ea36c6f04231770e8798fb6058503",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/assets/fonts/Pacifico/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/images/logo.png": "2394c4942b80201be4dab7029f5f9a0d",
"assets/FontManifest.json": "62dab4c61dd3e1635296b0e7e872f2fb",
"assets/fonts/MaterialIcons-Regular.otf": "7904682c3b3a9343a0c5abd7338a0871",
"assets/NOTICES": "686b43d02e36184e42d704b7f03ebfa7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "68818d659e9357599823ac623e473011",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "17fd13f287a05e19f68cad3edb9f8ea6",
"/": "17fd13f287a05e19f68cad3edb9f8ea6",
"main.dart.js": "dcb5db1b746f3ed49840aaa28a39e17d",
"manifest.json": "4a42ab657293f7f8b40c8ba37d9c021b",
"README.md": "9406a41172b5a4f6ccd8a3de4b5ea6e0",
"version.json": "c49069c0f21d8e9066a96392d1020971"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
