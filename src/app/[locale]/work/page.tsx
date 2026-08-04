import { setRequestLocale } from 'next-intl/server';
import WorkClient from './WorkClient';

type Props = { params: { locale: string } };

export default function WorkPage({ params: { locale } }: Props) {
  // Opts this page into static rendering (see [locale]/layout.tsx).
  setRequestLocale(locale);
  return <WorkClient />;
}
