export { default } from 'next-auth/middleware';

//Записанные здесь роуты приватные!(последний - динамический)
export const config = { matcher: ['/profile', '/protected/:path*'] }