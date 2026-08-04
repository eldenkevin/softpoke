import { setRequestLocale } from 'next-intl/server';
import AboutClient from './AboutClient';

type Props = { params: { locale: string } };

export default function AboutPage({ params: { locale } }: Props) {
  // Opts this page into static rendering (see [locale]/layout.tsx).
  setRequestLocale(locale);
  return <AboutClient />;
}
