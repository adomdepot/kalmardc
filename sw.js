// จำเป็นต้องมีไฟล์นี้เพื่อให้เบราว์เซอร์มองว่าเป็น PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // ไม่ต้องทำอะไร ปล่อยผ่านไป
});
