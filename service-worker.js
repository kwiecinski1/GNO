// service-worker.js - zarządza cache'owaniem i obsługą offline
const CACHE_NAME = 'generator-plikow-v1';
const urlsToCache = [
  // Lista wszystkich plików, które chcesz, aby były dostępne offline
  '/GeneratorPlikow/',
  '/GeneratorPlikow/index.html',
  '/GeneratorPlikow/manifest.json',
  '/GeneratorPlikow/icon-128.png',
  '/GeneratorPlikow/icon-512.png',
  'https://cdn.tailwindcss.com'
];

// Zdarzenie 'install' - kiedy Service Worker jest instalowany
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        // Dodaj wszystkie pliki do cache
        return cache.addAll(urlsToCache);
      })
  );
});

// Zdarzenie 'fetch' - kiedy przeglądarka próbuje pobrać zasób
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Zwróć zasób z cache, jeśli istnieje
        if (response) {
          return response;
        }
        // W przeciwnym razie pobierz go z sieci
        return fetch(event.request);
      })
  );
});

// Zdarzenie 'activate' - czyści stary cache, aby zaoszczędzić miejsce
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Usuń stary cache
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
