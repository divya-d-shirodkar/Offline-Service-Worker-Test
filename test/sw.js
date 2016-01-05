//this.addEventListener('install', function(event) {
//	event.waitUntil(caches.open('v1').then(function(cache) {		
//      return cache.addAll([
//        '/divya-d-shirodkar/Offline-Service-Worker-Test/master/',
//        '/divya-d-shirodkar/Offline-Service-Worker-Test/master/index.html',
//        '/divya-d-shirodkar/Offline-Service-Worker-Test/master/app.js'        
//      ]);
//    })
//  );
//});

//this.addEventListener('fetch', function(event) {
//    console.log('fetch');
//  var response;
//  event.respondWith(caches.match(event.request).catch(function() {
//	console.log('respond with');  
//   return fetch(event.request);
// }).then(function(r) { 
//	console.log('fetch then=='+r); 
//   response = r;
//    caches.open('v1').then(function(cache) {
//	  console.log('caches open');
//      cache.put(event.request, response);
//    });
//    return response.clone();
//  }).catch(function() {
//    return caches.match('/sw-test/gallery/myLittleVader.jpg');
//  }));
//});

// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log("SW startup");

//self.addEventListener('install', function(event) {
//  console.log("SW installed");
//});

//self.addEventListener('activate', function(event) {
//  console.log("SW activated");
//});

//self.addEventListener('fetch', function(event) {
//  console.log("Caught a fetch!");
//  event.respondWith(new Response("Hello world!"));
//});