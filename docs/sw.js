var CACHE_NAME = 'sdpwa-1';

var urlsToCache = [
  './manifest.json',
  './',
  './build/app.js',
  './data/verbiss_2021.geojson',
  './asset/favicon/android-chrome-192x192.png',
  './asset/favicon/favicon-32x32.png',
  'https://raw.githubusercontent.com/b-lack/gruenecho/master/img/gruenecho_logo_white.svg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(e.request, response.clone());
    return response;
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key === CACHE_NAME) { return; }
      return caches.delete(key);
    }))
  }));
});