'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7b85cdff12c24bc2ab7cd98ab933d9a4",
".git/config": "f02d4573a442efcdfae2c839a5c0de2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4b1ec74707c0d4300c50aefdb5be7183",
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
".git/index": "a4ee82e8ca99f3e3e1f99e7498b9440c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "db13878500b18908d9952bbe4f5db15a",
".git/logs/refs/heads/main": "db13878500b18908d9952bbe4f5db15a",
".git/logs/refs/remotes/origin/HEAD": "cdfaa8bd0a22ab48c884d0a50b76b861",
".git/logs/refs/remotes/origin/main": "414d46c9771d95a75032ec36984ba6eb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0e/99763149bb12c9e092219b8d5dd556cd484229": "43cf7fc15584d9e964caf61cca6258f9",
".git/objects/13/36b178309ffa42a2f267d4e0ba2e01a1d9f573": "58367ee075076ebe72da5a76a5fc8c42",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/b24e3d40e90a460b7c36da4f4c3c6ff19b378f": "ba360f3e8804fbbc1b631e5d69453287",
".git/objects/19/1e85737fd1adc40f8f5b4a240497312bece1e8": "1d3584d27786e270b343da7d80baee35",
".git/objects/1d/3563a453a9bb86ff93c239f849ed4fc9aa0fdb": "28e0fbfc070d6e6558bf358114db1edb",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/a583c94494c37eadb249d4b6ddf90b6fce89d7": "81c18ae9303f48421179d18814538ea5",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/c776b05227a406695915b9a5048e79b9d82538": "340d7882f416f498cf9344e3edf5bb09",
".git/objects/2a/b372b816317faa395823c1f084d2d224373b25": "9ba03e83a8d3baf5bffb5e9b2a8fb643",
".git/objects/2d/3c0b5ff6c962ba3c32b266adb0df4edcf45972": "ae15728bff481bc7849b4ca69aca4b1f",
".git/objects/2d/6b26902666b76f270964488ae8599fe496960e": "39d4f448fd2362aac23f5fa9f76d4178",
".git/objects/2e/82d0a78f83b3b1c596344f3d64323b4b9f120b": "8253f04d2480b3884ad818bdfdc27ffe",
".git/objects/3c/140fde866c99d202ed4be42ec0ab31d6e487f0": "4f79ae3e2cff1e5f1f8a9294a40e2578",
".git/objects/42/5915324663f9f2a62cc67178b10697bf03b00b": "948ca99159a6d6edfff2485b0ac9fc54",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/9d4a13f99c67a186b7c6d95ab5949b7b3a651b": "b255c76ba0bf775ae9fa0a7eccbddbfc",
".git/objects/52/c5b4c8515463dfb5496f17af4b68669e82de12": "98ce635e6df140767335c8f81695f740",
".git/objects/56/18bc37bddb73d33a01c27182d6224f50208255": "9c4cbfaadc83b62afbd525c882d1d3a6",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/59/c618abe67555f32bf2e2a9d7f8d665f4db09cc": "c00c8f629e2dabdde17bad2ccbcb0d2a",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/d40efff38a8468da3ccd74cd506b60ec182c23": "cabb0c6fe9c7b31d3b364091e85de0a4",
".git/objects/5d/43e8b1568679e57e530ff4179769366a8e4f02": "33c3214d2a7839911a73ba921afc8192",
".git/objects/62/e10e51628a7736ab4f7cbcef2488276f80591d": "11676bdf917b88c223ed9adf227acdee",
".git/objects/66/9070bcc0479e9afd41cef834673dd1087bd2c7": "f874c325f4af7c5c891f43f2ddff0050",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/d4b7e6d14f699a7ec3961a6504e1725be61c62": "5457a81d01e0003f66bdaec24d18802d",
".git/objects/6c/28250a14e49207a63762a629cd47616c67b1fe": "65069333bafa16f30fcd9a2eb714ac3f",
".git/objects/6f/580983992a19527cd6bfab7abac875e3017cfe": "8c6a13b126f808c7f9f6f698e96613e2",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7f/ee2cb51f95a07626631b7b07a470f6b50e7203": "0c4672ad8b945ad01ab4af0ac6227ae7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/38ec50b9360d5b431a7e8d17bf341413c57287": "ad374a2b06657dc16abf1e4cdb6de4fa",
".git/objects/87/4f5139b1eb0bd2ca4854e8575187102d118fe5": "757e5184dcf89461957fb2abf30ba2dd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/6fa7177c39054d322033a0db6bc3d62ad42136": "6c9671ede3b4d94804f2dc73372c39cd",
".git/objects/9a/64e8cbf83f5926ca11ff83340c48d14a5348aa": "8c4d4ce49129f8cd518b5e3299dee40d",
".git/objects/9e/899bde2d960a8ca577b742d7267f3ac5fa8815": "4b2fa2f8a7fed920f870b8760b56a6a9",
".git/objects/9f/a4042f9fcb165613486cfeb6d73d73bdaddc22": "5e99c06b05db34d32c051e4ccf6c941c",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/b425fc5f5a508d16a2a4f3090820925123e3ce": "92f6abd7cb9da9d2096bf547a0ee192a",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/74babf7ac0cec98d6f2f405a5e0bd7783b818e": "611e82cc81cdeebeff6415aa77b366d5",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/c01e45244c009147de23e85df47b92800b0d39": "fe9090a92a0db339533cd3476d42f1a8",
".git/objects/cc/b7d50b46aa45d117355c275e797346c65b0053": "5d1e4d088eb08e98b837c411d41eb775",
".git/objects/cd/052e5f2c076d98cfff12ef5f99794a7cd05ca0": "456384157e33083de80beced654f7166",
".git/objects/d1/ab321d9b08ee2594016ec2007c7fa3f2e22d5a": "db04c938432c99f5532a5a7b58988ceb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/87017d989cc7b1a8d724148fe76ed225cb720e": "bc6e9db541ad5d12566853fe6f08eefa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/f301e7f72f2ef6d4f7cbb35eb155c46ed2d183": "a3da31b308bb982aa8484614a210860c",
".git/objects/dc/b86a4303facdbed81aa2ee7f862a2199ed440d": "7e1d21326769cbe6a1435038296d195c",
".git/objects/de/41dfa2778fd8d933ee400c00d1f5a81e1f8fb6": "25b21ae071f3067e8fb8e70c56203982",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f7/4cdf03828f8c4d26d5b01112534c48e8bb95b3": "cbee03ba68f3c4993a22150bc87adbf6",
".git/objects/fc/2c0830b46e4ff93382cdc45db95070b8ed169b": "77bca3d9a9396609a5ea161152d0ce78",
".git/objects/fc/9828b849ac608002a9b38c529835568f6db243": "aca648b5458d9d1d36d4fbe5e3cab01b",
".git/ORIG_HEAD": "112982e45b1c484af9971b167acbe4d1",
".git/refs/heads/main": "60180b06b229fe3c873d4d0ef0f64ecf",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "60180b06b229fe3c873d4d0ef0f64ecf",
".github/workflows/static.yml": "7b30ac9604a8f2495b94fe5be3292699",
"assets/AssetManifest.bin": "65bd00afca3e990ae7d0c60b67cc56a9",
"assets/AssetManifest.bin.json": "27d73b95ef64403a1d4549ab3cfd46d7",
"assets/AssetManifest.json": "d65798dd2673d09f15a5c56749d02c5e",
"assets/assets/fonts/Diphylleia/Diphylleia-Regular.ttf": "c64ea36c6f04231770e8798fb6058503",
"assets/assets/fonts/Pacifico/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/FontManifest.json": "c8694de07823252fc78a608fbf573c4d",
"assets/fonts/MaterialIcons-Regular.otf": "7904682c3b3a9343a0c5abd7338a0871",
"assets/NOTICES": "9831dc617fc92703eb3ef556968c9a4d",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf6caf9bc0729a536db25194174ab636",
"/": "bf6caf9bc0729a536db25194174ab636",
"main.dart.js": "6575eb86e2d88a4d75abcb873d7d1bea",
"manifest.json": "4a42ab657293f7f8b40c8ba37d9c021b",
"README.md": "f93f5db708ba19dcae6da3ca19c07a0c",
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
