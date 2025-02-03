// Make sure service workers are supported.

if(navigator.serviceWorker) {
    window.addEventListener("load", () => {

        //Service worker lifecycle => Register -> Install -> Activate
        // navigator.serviceWorker.register("../sw_cached_pages.js")
        // .then(reg => console.log("Service Worker registered."))
        // .catch(err => console.log("Service worker registration failed", err));
        
        navigator.serviceWorker.register("../sw_cache_site.js")
        .then(reg => console.log("Service Worker registered."))
        .catch(err => console.log("Service worker registration failed", err));
    })
}