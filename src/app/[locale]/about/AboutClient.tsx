'use client';

import { useTranslations } from 'next-intl';
import { Divider, DividerWithMargin } from '@/components/Divider';

const AboutClient = () => {
  const t = useTranslations();

  return (
    <section className="bodySection bodySection-About">
      <DividerWithMargin />
      <h1 className="bodyTitle01">{t('about.title1')}</h1>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/comma.svg"
          alt="logoComma"
          className="logoComma logoComma-AboutUs"
          style={{ marginTop: '-30px', height: '28px', marginLeft: '11px', cursor: 'pointer' }}
        />
      </div>
      <h1 className="bodyTitle02" dangerouslySetInnerHTML={{ __html: t.raw('about.title2') }} />

      <h2 className="bodyDesc01">{t('about.description')}</h2>
      <Divider />

      <div className="aboutText01">
        <div className="emptyAbout01"></div>
        <div className="aboutText02">
          <p>{t('about.ourStory.title')}</p>
        </div>
        <div className="aboutText03">
          <div dangerouslySetInnerHTML={{ __html: t.raw('about.ourStory.content') }} />
        </div>
      </div>

      <Divider />
    </section>
  );
};

export default AboutClient;
