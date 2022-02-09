import App from './app.svelte';

const app = new App({
  target: document.body
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js');
  });
}

export default app;