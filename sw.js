const CACHE_NAME = 'garage-pro-v5';

self.addEventListener('install', (event) => {
    // Forces the waiting service worker to become the active service worker
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Allows the service worker to take control of the page immediately
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
