const CACHE_NAME = 'garage-pro-v4';
const ASSETS = [
  './GaragePro.html',
  './manifest.json'
];

// Installs and caches the core files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// Activates the service worker
self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Crucial: Intercepts network requests to make Chrome see this as a valid PWA
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
