import { setRequestLocale } from 'next-intl/server';
import ServiceClient from './ServiceClient';

type Props = { params: { locale: string } };

export default function ServicePage({ params: { locale } }: Props) {
  // Opts this page into static rendering (see [locale]/layout.tsx).
  setRequestLocale(locale);
  return <ServiceClient />;
}
