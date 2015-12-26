if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/Offline-Service-Worker-Test/sw.js', { scope: '/Offline-Service-Worker-Test/' }).then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};