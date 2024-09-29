const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    'https://butcher42.ru/',
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
            .then(cachedResponse => cachedResponse || fetch(event.request))
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
// Замените 'YOUR_APP_ID' на ваш App ID
window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "13464047-67bc-4b57-9e7d-6e694fbc5a85",
        // Убедитесь, что вы используете правильные настройки
        notifyButton: {
            enable: true,
        },
        promptOptions: {
            slidedown: {
                enabled: true,
            },
        },
    });
});
