const VERSION = 'v1';

self.addEventListener('install', e => {
    e.waitUntil(precache())
})

self.addEventListener('fetch', e => {
    const { request } = e
    //get
    if(request.method !== 'GET'){
        return
    }

    //buscar en cache

    e.respondWith(cacheResponse(request))
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
    ])
}

async function cacheResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}