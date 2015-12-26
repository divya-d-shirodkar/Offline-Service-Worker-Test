if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/divya-d-shirodkar/Offline-Service-Worker-Test/master/sw.js',
	{scope:'/divya-d-shirodkar/Offline-Service-Worker-Test/master/'}).then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ');
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
	
  });
};

function unregister(){
	navigator.serviceWorker.getRegistration().then(function(r) { 
    r.unregister();
});
}