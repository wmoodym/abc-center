const CACHE='abc-center-cu-v2-2-1';
const ASSETS=['/','/index.html','/signup','/app','/site.webmanifest','/app/app.html','/app/app.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{const req=e.request;if(req.mode==='navigate'){e.respondWith(fetch(req).catch(()=>caches.match('/index.html')));return}e.respondWith(caches.match(req).then(r=>r||fetch(req)))});