'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1596e499916837e9883abc9eb7b45eca",
"assets/AssetManifest.bin.json": "a08bbcde3e9348215ba6394bbd3c65f2",
"assets/AssetManifest.json": "fe598bcaebb33fe8b0e9648c08830140",
"assets/FontManifest.json": "e77e2e5f91ef8c52d4e5745eff5de103",
"assets/fonts/KodeMono-Regular.ttf": "f8ad3cd837565a9f7d47b2ffb88beb1d",
"assets/fonts/MaterialIcons-Regular.otf": "1e291541c5fb96eb0b5c19c2f4ae068f",
"assets/images/2048.png": "2c0f50790236a5370efa9ce576d506b5",
"assets/images/adaptation.png": "722ad394005498401083eb2ffe35df78",
"assets/images/agile.png": "426d86b46616cdd875bf8c9326178c54",
"assets/images/anglais.png": "5f1280bb565c3bcb4df86fa7e0572170",
"assets/images/batterie.jpg": "bc16487936767664bd1674a06ebaade8",
"assets/images/biotrade.png": "97e939a2e655181e61ded59a198c305c",
"assets/images/bloc.png": "f2e7e6bb46aeeb9263bf320f6620f027",
"assets/images/bourdelle.jpg": "e4e06e08c784fd4fbbd11dfcb12564df",
"assets/images/C.png": "21f09a1397772ba16924a7a7ed1790e7",
"assets/images/compresseur.png": "7f631e15b67f4ed3c17fc8c0d87ecddc",
"assets/images/cs.png": "668eeb6bb812e2292784332e72778cc2",
"assets/images/css.png": "89b9bb843746e97e9d3c8b4223616fa1",
"assets/images/curiosite.png": "1d2cb734c828d1f102396aa283cc3c54",
"assets/images/dart.png": "06c09a7eb40203a0789ea0dcca5d957a",
"assets/images/docker.png": "7d41965fb18f96b4b58cf71a08a12b5a",
"assets/images/eclipse.png": "b751228cfaa4c42d108c7cacff7341a4",
"assets/images/ecriture.png": "f1528a405a48828f12e465a3247ecf98",
"assets/images/elaastic.png": "71c67d1390efb335dade02c74d54a1dc",
"assets/images/etudiant.png": "c37203ade2e45e8dcd8152ec4e4e2f4e",
"assets/images/firebase.png": "d85939bdd2fcb93b4a5df5bea431d53d",
"assets/images/flutter.png": "6b423ff89815b96c10a44b62f913916e",
"assets/images/git.png": "dd45c492496ec2a48f082bf133554a02",
"assets/images/gmao.jpg": "e9dacaaceaa2fedf4b9797e6c9f2a0c4",
"assets/images/html.png": "5237e49cdf9648871ff6235af5dc7140",
"assets/images/italia.png": "bf1b87ea14e2613a0e83d6cfdd8daba2",
"assets/images/java.png": "b5f8dd2e29df2779077c2b8e1eb266f2",
"assets/images/jetbrain.png": "4195379fd21c1bcf96365f1ce2f7914f",
"assets/images/js.png": "728a778828e4fb98c3fb0070d23fe681",
"assets/images/kotlin.png": "2ed34faeddac78db009dd2e4a1d9aecf",
"assets/images/laravel.png": "3b258761bbe15f2998e59eca98b60a5d",
"assets/images/linux.png": "ee688b1da6dcbf9a22ea8e2f7208e977",
"assets/images/mcalculator.png": "6e20ab30912b6fcfb5db993bb1a0c0f2",
"assets/images/moi.jpg": "ee0032655e6a72d828a4979adc49ad9a",
"assets/images/moi.png": "55e3d5ffb933738541136a41719dd9fb",
"assets/images/mongo.png": "dc22d4b5e216d2bf7c78e269791300d2",
"assets/images/mysql.png": "f758004861723a4144df6c2058a047bd",
"assets/images/nuitdelinfo1.png": "00071e91b5990fbe579f1a6f75d0f373",
"assets/images/nuitdelinfo2.png": "966505c385f08e9b46913664f7e3344a",
"assets/images/php.png": "1fb63070d208d68aba5552d49f1db3ad",
"assets/images/powerlifting.jpg": "5aaf6b6f7461cd0e984aa4744321781b",
"assets/images/programmation.jpg": "8cc4e3407a11172cda492b0469a6875b",
"assets/images/proxy.png": "8285abb0dfd77c2acc1cd855e010dcd1",
"assets/images/python.png": "374d04c9d0e35095f25e0b28bc436114",
"assets/images/rigueur.png": "9d2d9ac4f6ed1205ceab6b32ad276341",
"assets/images/rust.png": "60ae7394e379d59f59341d3055f49f5f",
"assets/images/sante.png": "12d55cc80e717f2fa38c952d8cec7ad8",
"assets/images/sport.png": "1d6acae5b7e97545ab59a0172082ec0b",
"assets/images/sportAutre.png": "d2fc60cade8a92949533373b350deafc",
"assets/images/spring.png": "4e33f1b2ad22be146c7a2e0c309bb59f",
"assets/images/symfony.png": "c5da04ac8eae68aa18703c9139dbca4d",
"assets/images/takuzu.png": "e8352974e02d4017ffbd010e25bf3432",
"assets/images/tesm.png": "5a211ad71b436898f8ac55bf37f4bd46",
"assets/images/yams.png": "60e84a13114235f814514a624902b7af",
"assets/NOTICES": "8cedbf5950ddadf9da80b60e8fa4668b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "90580190a5349ea2d3a73ccca4c41e4a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/video/cv.mp4": "aaf495a78140426dbb91efb8fbaea30d",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7e8211fefe5ca5057e57618549ecdb4b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "16557fa3d93fd184288a9cb24c8adb37",
"/": "16557fa3d93fd184288a9cb24c8adb37",
"main.dart.js": "e290a9bb99c088e94d14a5aaa1d6aa81",
"manifest.json": "539d26c272e3fa98f851e64ddd11098b",
"version.json": "a97ecd7f6742a8f29b5e2aa0e862b4b4"};
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
