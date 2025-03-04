self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("game-cache").then((cache) => {
            return cache.addAll([
                "index.html",
                "style.css",
                "script.js",
                "manifest.json",
                "1.png",
                "1.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
