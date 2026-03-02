'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Divider, DividerWithMargin } from '@/components/Divider';

const PrivacyClient = () => {
  const t = useTranslations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bodySection bodySection-Privacy">
      <DividerWithMargin />
      <h1 className="privacyTitle">{t('privacy.title')}</h1>
      <h2 className="bodyDesc01">{t('privacy.effectiveDate')}</h2>
      <Divider />

      <div className="aboutText01">
        <div className="emptyAbout01"></div>
        <div className="aboutText03" dangerouslySetInnerHTML={{ __html: t.raw('privacy.content') }} />
      </div>

      <Divider />
    </section>
  );
};

export default PrivacyClient;
