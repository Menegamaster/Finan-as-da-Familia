// Service worker mínimo — necessário para o Chrome/Android reconhecer
// o site como instalável de verdade e usar o ícone correto.
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // Passa direto pra rede, sem cache especial.
  event.respondWith(fetch(event.request));
});
