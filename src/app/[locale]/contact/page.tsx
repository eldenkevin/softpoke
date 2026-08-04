import { setRequestLocale } from 'next-intl/server';
import ContactClient from './ContactClient';

type Props = { params: { locale: string } };

export default function ContactPage({ params: { locale } }: Props) {
  // Opts this page into static rendering (see [locale]/layout.tsx).
  setRequestLocale(locale);
  return <ContactClient />;
}
