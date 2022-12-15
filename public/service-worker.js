const CACHE_NAME = "version-1"; // important to update
const urlsToCache = [ 'index.html', 'offline.html' ];

const self = this; // 'this' in SW file represents the SW itself, and that's the way we call it

// Install SW
self.addEventListener('install', (event) => {
    //after the event call, this is going to execute
    event.waitUntil(
        // we wait until the cache is added
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log(`Added cache: ${CACHE_NAME}`);
                return cache.addAll(urlsToCache); // add the files to the cache
            })
    )
});

// Listen for 'fetch' request
self.addEventListener('fetch', (event) => {
    // we want to respond with smth when we have a 'fetch' request
    event.respondWith(
        // we match all requests our page is receiving 
        // then for all the requests, we fetch them again to get the new data
        // if it cannot fetch data then it means there is no internet connection and it will return the offline page
        caches.match(event.request)
            .then(async () => {
                try {
                    // fetch with the event request
                    return await fetch(event.request);
                } catch {
                    // if it cannot fetch data it means there is no internet connection, and we server the offline version
                    return await caches.match('offline.html');
                }
            })
    )
});

// Activate the SW
// Fires when new SW registration is acquired
self.addEventListener('activate', (event) => {
    // remove old cache and keep the new one only

    const cacheWhitelist = []; // empty arr to store what we want to keep
    cacheWhitelist.push(CACHE_NAME); // we want to keep the 'CACHE_NAME', which we work with

    event.waitUntil(
        // we wait until 
        caches.keys().then((cacheNames) => Promise.all(
            // loop through the cache names
            cacheNames.map((cacheName) => {
                // if the cache name is not present, then we want to delete this specific cache, otherwise we keep it (from the whitelist)
                if(!cacheWhitelist.includes(cacheName)) {
                    console.log(`Cache delete: ${cacheName}`);
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});