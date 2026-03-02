import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import '@/styles/app.css';

export const metadata: Metadata = {
  title: {
    default: 'Softpoke',
    template: '%s | Softpoke',
  },
  description: 'Creative minds building meaningful digital experiences. We work with purpose, passion, and precision.',
  metadataBase: new URL('https://softpoke.jp'),
  openGraph: {
    type: 'website',
    url: 'https://softpoke.jp/',
    title: 'Softpoke – Inspired Design. Thoughtful Code.',
    description: 'Creative minds building meaningful digital experiences. We work with purpose, passion, and precision.',
    images: [{ url: '/ooo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softpoke – Inspired Design. Thoughtful Code.',
    description: 'Creative minds building meaningful digital experiences. We work with purpose, passion, and precision.',
    images: ['/ooo.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
