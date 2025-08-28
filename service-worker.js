const CACHE_NAME = 'generator-cache-v1';
const urlsToCache = [
  'https://kwiecinski1.github.io/GNO/',
  'https://kwiecinski1.github.io/GNO/index.html',
  'https://kwiecinski1.github.io/GNO/manifest.json',
  'https://kwiecinski1.github.io/GNO/icon-32.png',
  'https://kwiecinski1.github.io/GNO/icon-128.png',
  'https://kwiecinski1.github.io/GNO/icon-512.png',
  'https://cdn.tailwindcss.com',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
