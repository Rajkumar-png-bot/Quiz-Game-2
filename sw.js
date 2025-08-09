const CACHE_NAME = 'ai-quiz-game-v1';
const urlsToCache = [ '/', '/index.html', '/icon-512x512.png' ];


self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))));