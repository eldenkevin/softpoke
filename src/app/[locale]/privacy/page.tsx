import { setRequestLocale } from 'next-intl/server';
import PrivacyClient from './PrivacyClient';

type Props = { params: { locale: string } };

export default function PrivacyPage({ params: { locale } }: Props) {
  // Opts this page into static rendering (see [locale]/layout.tsx).
  setRequestLocale(locale);
  return <PrivacyClient />;
}
