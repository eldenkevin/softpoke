import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(ja|en|ko)/:path*',
    // /app 은 기기별 스토어 리다이렉트라 로케일을 붙이면 안 된다 (src/app/app/route.ts)
    '/((?!api|app|_next|_vercel|privacy-ja|terms-ja|tokushoho|.*\\..*).*)'
  ]
};
