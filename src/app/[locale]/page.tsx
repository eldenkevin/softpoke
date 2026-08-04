import { setRequestLocale } from 'next-intl/server';
import HomeClient from './HomeClient';

type Props = { params: { locale: string } };

export default function HomePage({ params: { locale } }: Props) {
  // Opts this page into static rendering (see [locale]/layout.tsx).
  setRequestLocale(locale);
  return <HomeClient />;
}
