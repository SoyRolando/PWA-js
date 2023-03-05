

//! Cuando se instala el Service Worker
self.addEventListener('install', () => {
    console.log('Istalado el Service Worker');
})

//! Activar el Service Worker
self.addEventListener('activate', () => {
    console.log('Service Worker Activado');
})

//! Evento 'fetch' para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);
})