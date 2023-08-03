'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "33e0366eaa0970c6c445866f691a766a",
"assets/assets/images/1.png": "8295ab8c9cee103f266206b45fb974a4",
"assets/assets/images/10.png": "bdb69905fd7661984f42b535c9987fef",
"assets/assets/images/11.png": "04894037f8f4f52e54d37c401b3d9414",
"assets/assets/images/12.png": "557f4ba833a4a1e05c8d41ab977e1b2f",
"assets/assets/images/13.png": "64a111e048991aa6f9a5028836eb35a3",
"assets/assets/images/14.png": "d6fe8caffccda4f5c6ec36ec665fb6d9",
"assets/assets/images/16.png": "e18c001eb49d8d63dbead3dbed483efe",
"assets/assets/images/17.png": "ded11194c32a46cae3c1e4b585a247da",
"assets/assets/images/18.png": "dd89e5a95082341c2ea3c5eb08b65761",
"assets/assets/images/19.png": "424d995fbc5ab07135a65957a586692f",
"assets/assets/images/2.png": "19cf5c34a5ad9a7aa161e6f057d62098",
"assets/assets/images/20.png": "f34f52b060be5c5d2db91630a1be012d",
"assets/assets/images/21.png": "f9880446021ead944a5d3bc6ed015a24",
"assets/assets/images/22.png": "7844a55202df0a15a8318129ae12e284",
"assets/assets/images/23.png": "ad80bbae7f5edebae67fe6a4760c13de",
"assets/assets/images/24.png": "a73ab072962365064937d5cdbb9bf850",
"assets/assets/images/25.png": "7a1f271df065f948efa759fa80ddef8f",
"assets/assets/images/26.png": "6417dd13d8cf8c6cd30626c8609ff08a",
"assets/assets/images/27.png": "e55bd46cf0a5fc8c451e365d3b372e3d",
"assets/assets/images/28.png": "9e4526361be616fe8a0ee0934f093cd9",
"assets/assets/images/29.png": "ed933ca0dc41f0360185290f2e02b4be",
"assets/assets/images/3.png": "06141c9e807eb19ea64e4f2bdf4251f9",
"assets/assets/images/30.png": "ab669cae7a8fd13ab741d3fb6f526178",
"assets/assets/images/31.png": "89e59ba1cd0223da02a32fd9b72ba856",
"assets/assets/images/32.png": "76331d8dfa42be155d6ae6b2e7943c96",
"assets/assets/images/33.png": "521eacb4d201027013f76e8c3c5449d3",
"assets/assets/images/34.png": "2166c98029d6e9964654bf95f802ac01",
"assets/assets/images/35.png": "56ef2e17ef35789db4213aed83ce8d89",
"assets/assets/images/36.png": "9709e29e3ab19fa69a40f0a6f74172a4",
"assets/assets/images/37.png": "14a88556fa4e02625d91561491bcc546",
"assets/assets/images/38.png": "2eda6378ac90d1dc1fcafa5d73d45dff",
"assets/assets/images/39.png": "5dede308e8add8f29602f437425e1e7f",
"assets/assets/images/4.png": "703e005d6fe91275f87921bfeb7f868c",
"assets/assets/images/41.png": "10b025e259999932111a364fd0a43d0b",
"assets/assets/images/42.png": "fbe053e670816c3026ebd0514f8d9d28",
"assets/assets/images/43.png": "c37bb0a8ca03f0ced823453cba11f710",
"assets/assets/images/5.png": "b53ca6b8bc95f3d1b07e853d68cf3a10",
"assets/assets/images/6.png": "a5f53896624458f4c08d4e81a85fdb58",
"assets/assets/images/7.png": "5e3f544262be5b488984f122bde026aa",
"assets/assets/images/8.png": "c4c05654fd13909be8b0745b0af57015",
"assets/assets/images/9.png": "c7ec92f7596e837607d761d2df207275",
"assets/assets/images/app-store.svg": "c62b3ec0e06adb528dd2ec4714ce3efc",
"assets/assets/images/apple.png": "a56d13399ca5fce64c22ea391e352cc9",
"assets/assets/images/best-prizes.png": "f6d76ef2e7f834b0107fe3ec5eb82ece",
"assets/assets/images/city.png": "dd70a7216679ef8f8b77ad075f10b9f0",
"assets/assets/images/doorstep-pickup.png": "6d3a9ff4ed9dd30aea10242fe543e228",
"assets/assets/images/footer-bg.png": "d3dc8e1c2cee0232e84a704aadc563cc",
"assets/assets/images/footerdesc.png": "86a88e3bb6131d367916a4061d760a39",
"assets/assets/images/hibye.png": "a494ea9d8969dd2daf0e0c42357356e8",
"assets/assets/images/instant-payment.png": "35395b1f45ae5cb0bf97fb23654b1b67",
"assets/assets/images/login_background.jpeg": "de0c68865df75b29234892c72b3a6245",
"assets/assets/images/p.png": "60454cd50c3dffedf2afb7bf2f3cf655",
"assets/assets/images/p1.png": "4948abbac69969c7a2f58dbf434b6889",
"assets/assets/images/p2.png": "9d70f708894ed6acc82ae42f3f48b6ba",
"assets/assets/images/p3.png": "9df69225f63b55a4659ece4a997fe51c",
"assets/assets/images/p4.png": "9145665fef6e52270634454758245068",
"assets/assets/images/person.png": "e9e4b7922d30b56a6abe7a18d2f8af48",
"assets/assets/images/phone-cta-one.png": "64d140b6d3f6e01525aad343717dd9ba",
"assets/assets/images/play-store.svg": "c62b3ec0e06adb528dd2ec4714ce3efc",
"assets/assets/images/profile_bg.jpeg": "12db7e1f958ee3b3ab5e60b295589086",
"assets/assets/images/splash.png": "dfa920b5e31fe2d45547aca11e236411",
"assets/assets/images/splashweb.png": "15ba2288fcfebc8d02713c4fa29b5ad1",
"assets/assets/images/Union.png": "e3944c0d311c670825e6874295645936",
"assets/assets/images/valid-invoice.png": "4a19dfc88a5fc74bd9eb4706102c8189",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6709a8050edd08219f23b21b08c29859",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c72cb8cd0327bf12887ad95ab84623f9",
"/": "c72cb8cd0327bf12887ad95ab84623f9",
"main.dart.js": "0248e76ba4235e6a35fffc5f0f09f37f",
"manifest.json": "16d519ce5edc618c9fc42177aa2de88f",
"version.json": "2c7b2cb774f324e38da9a49c7f842b1f"
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
