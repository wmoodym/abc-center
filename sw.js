const CACHE='abc-center-v2-1';
const ASSETS=['/','/index.html','/signup.html','/site.webmanifest','/app/app.html','/app/app.js','/assets/icon-192.png','/assets/icon-256.png','/assets/icon-384.png','/assets/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{const req=e.request;if(req.mode==='navigate'){e.respondWith(fetch(req).catch(()=>caches.match('/index.html')));return}e.respondWith(caches.match(req).then(r=>r||fetch(req)))});