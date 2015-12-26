if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/Offline-Service-Worker-Test/master/sw.js',{scope:'/Offline-Service-Worker-Test/master/'}).then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ');
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};