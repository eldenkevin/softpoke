import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(ja|en|ko)/:path*',
    '/((?!api|_next|_vercel|privacy-ja|terms-ja|tokushoho|.*\\..*).*)'
  ]
};
