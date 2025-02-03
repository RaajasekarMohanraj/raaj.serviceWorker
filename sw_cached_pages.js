const cacheName = "v1";
const cacheAssets = ["index.html", "about.html", "/css/style.css", '/js/main.js'];



// Call install event.
self.addEventListener("install", (oEvent) => {
    // console.log(oEvent);
    console.log("Service woker installed.");
    oEvent.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log("Service worker: Caching files");
            cache.addAll(cacheAssets);
        }).then(() => self.skipWaiting())
    );
});
// Call activate event.
self.addEventListener('activate', (oEvent) => {
    console.log("Service worker activated.");
    // Remove unwanted caches.
    oEvent.waitUntil(
        caches.keys().then(cacheNames => Promise.all(cacheNames.map(cache => {
            if(cache != cacheName) {
                console.log("Clearing old cache: " + cache)
                return caches.delete(cache);
            }
        })))
    )
});
// Call fetch event.
self.addEventListener("fetch", e => {
    console.log("Service woker: Fetching");
    e.respondWith(
        fetch(e.request)
        .catch(() => caches.match(e.request))
    )
})


