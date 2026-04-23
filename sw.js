const CACHE_NAME = 'garage-pro-v1';
const ASSETS = [
  './Garage Pro32.html',
  './manifest.json'
];

self.addEventListener('fetch', (event) => {
    // This can be empty, but the listener MUST exist
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
