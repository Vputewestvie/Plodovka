const CACHE_NAME = 'plodovka-v1';
const urlsToCache = [
  '/Plodovka/',
  '/Plodovka/index.html',
  '/Plodovka/manifest.json',
  '/Plodovka/robots.txt',
  '/Plodovka/sitemap.xml',
  '/Plodovka/images.jfif'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});