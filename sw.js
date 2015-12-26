this.addEventListener('install', function(event) {
	console.log('install');
  event.waitUntil(
	console.log('waituntill');
    caches.open('v1').then(function(cache) {
		console.log('then of open cache');
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/app.js'        
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
    console.log('fetch');
  var response;
  event.respondWith(caches.match(event.request).catch(function() {
	console.log('respond with');  
    return fetch(event.request);
  }).then(function(r) { 
	console.log('fetch then=='+r); 
    response = r;
    caches.open('v1').then(function(cache) {
	  console.log('caches open');
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function() {
    return caches.match('/sw-test/gallery/myLittleVader.jpg');
  }));
});