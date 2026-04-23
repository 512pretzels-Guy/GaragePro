const CACHE_NAME = 'garage-pro-v2';

// We catch the install event and force it to complete
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// We must have a fetch handler for the 'Install' button to appear
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
