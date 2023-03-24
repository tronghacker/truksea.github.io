'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "227c08b6ce229d31051d29c71f253117",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/images/arrow-circle-left.svg": "5b05c625f9cdf01cc952040d32a108f3",
"assets/assets/images/arrow-circle-right.svg": "a6f54ad01215c362cc8f6c43df9c432d",
"assets/assets/images/banner.png": "1bd616b5a472e7db35c9bbeb7fbe32fc",
"assets/assets/images/banner.svg": "73b04414cb3d7770eaf7762055d3e943",
"assets/assets/images/home.png": "f35b3206effacd0a084767a624cdd89a",
"assets/assets/images/hungAuctions.svg": "5540d86210ffa2d38ab5cd8d8d1a6345",
"assets/assets/images/icon01.svg": "4fa68bcd076838a5735cc90fb53882cb",
"assets/assets/images/icon02.svg": "7d4bbb72169e20233abe2a8efa952db2",
"assets/assets/images/icon03.svg": "9cfaca00d3e21d194de0d0b65e6a0388",
"assets/assets/images/icon04.svg": "0a515ec92ab6964aa15bf44900bf237d",
"assets/assets/images/icon05.svg": "b920cf7034bd9b70e8253629156ced53",
"assets/assets/images/icon06.svg": "0dc700033e2f91be89fd33999cfd504a",
"assets/assets/images/item-list-01.svg": "79b5543255fcc349b1f60b68972e647e",
"assets/assets/images/item-list-02.svg": "06bc32e22172629dde7ce8c655bf78cd",
"assets/assets/images/item-list-03.svg": "6551275960d607d08d4e01d8b7311af7",
"assets/assets/images/item-list-04.svg": "45b5ca4a30f9dad9c9f3ef2ed9f33951",
"assets/assets/images/item1.png": "0ca815dfc45770dd49e7c09c3ea1ef83",
"assets/assets/images/item2.png": "be1050d8809d24cb78e9ae6060a0a015",
"assets/assets/images/item3.png": "eb4e7d92ff3552ee05652a4ebcf5f596",
"assets/assets/images/item4.png": "220ac90437d937d6a45ccc671e2e5b4b",
"assets/assets/images/item_list-1.png": "0e1f86b025fc5abf944085ac0e340f70",
"assets/assets/images/item_list-2.png": "288cb4d03f6beba494044acc58db2161",
"assets/assets/images/item_list-3.png": "af9bc327077dce300ba566bfcf2bb14e",
"assets/assets/images/item_list-4.png": "0500267d8744154c3ab77f8a65dc6f90",
"assets/assets/images/liberia.svg": "6562ca4f8573b81c39d4c9a5a0901d98",
"assets/assets/images/logo.png": "aa188180323bdfff41e25141606894a0",
"assets/assets/images/logo70.png": "556a24ffcc5a0355381f9d8f1868c752",
"assets/assets/images/logo700.png": "abeadac1e4c38f40a8f1e89bf7704b19",
"assets/assets/images/logoG2G.svg": "8fc9e5aec971a6c06738c2d677a3f79d",
"assets/assets/images/logoTruksea.png": "0eb0f8cb8699fb2d31950810debb3753",
"assets/assets/images/logoTruksea.svg": "84f08729beacf6ec5af4b167d09ac05a",
"assets/assets/images/motnua.png": "b28d4c0e3d9a2d3fbccc0cf5535c3a2f",
"assets/assets/images/red1.png": "3b13b81ccee514d2522656cea0eddf54",
"assets/assets/images/red2.png": "4a844d816ed4eab644f4641eee9a329f",
"assets/assets/images/red3.png": "5454b34668fffd0d12fa9943684af021",
"assets/assets/images/red4.png": "f52027c171315fc343684a54cace9214",
"assets/assets/images/red5.png": "86d044a047ce3159108f05a0c8414650",
"assets/assets/images/red6.png": "10ac7c22313bf838b8227c6ad87dd0a7",
"assets/assets/images/truck.png": "697962952df32b420a144a76da190544",
"assets/assets/images/truck1.png": "b8220150207df301fc4dc124d5b7744f",
"assets/assets/images/truck2.png": "681f46a91d68c3115bd5e6839e97f5cd",
"assets/assets/images/w01.png": "e5d836552a5059e930e41b2a473f5e79",
"assets/assets/images/w02.png": "367763a27b7b42d78cbf55789bbadbdb",
"assets/FontManifest.json": "1a726564c73eb44d252c69c6eb91fd93",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c5d9198e1a4988aca04b365ff8c6a310",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d2bef2b1b98a18b61caf5ae631a3153c",
"/": "d2bef2b1b98a18b61caf5ae631a3153c",
"main.dart.js": "560cb60b187ff636d226ce2803e442e0",
"manifest.json": "e5f0a16a77130d600b25af58cef1c413",
"version.json": "e8714e7b1742cbdad8f088ce1fcd0326"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
