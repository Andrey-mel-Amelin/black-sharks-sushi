export const locationForAnnouncement: string[] = ['/', '/roll', '/gorroll', '/meksroll', '/nabor'];
export const locationForProducts: string[] = [
  '/',
  '/roll',
  '/gorroll',
  '/meksroll',
  '/nabor',
  '/pizza',
  '/zakuska',
  '/souce',
];
export const allowedUrlPathname: string[] = [
  ...locationForAnnouncement,
  ...locationForProducts,
  '/contacts',
  '/info',
  '/delivery',
  '/spec',
];
export const backendUrl: {local: string, deploy: string} = {
  local: 'http://localhost:3001',
  deploy: 'https://amelin.mesto.backend.nomoredomains.icu',
};