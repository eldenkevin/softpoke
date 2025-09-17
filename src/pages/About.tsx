import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import comma from '../assets/comma.svg';
import { Divider, DividerWithMargin } from '../components/Divider';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (

    <section className="bodySection bodySection-About">
      <DividerWithMargin />
      <h1 className='bodyTitle01'>{t('about.title1')}</h1>
      <div>
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-AboutUs"
          style={{ marginTop: '-30px', height: '28px', marginLeft: '11px', cursor: 'pointer' }}
        />
      </div>
      <h1 className='bodyTitle02' dangerouslySetInnerHTML={{ __html: t('about.title2') }} />

      <h2 className='bodyDesc01'>{t('about.description')}</h2>
      <Divider />

      <div className='aboutText01'>
      <div className='emptyAbout01'></div>
        <div className='aboutText02'><p>{t('about.ourStory.title')}</p></div>
        <div className='aboutText03'>
          <div dangerouslySetInnerHTML={{ __html: t('about.ourStory.content') }} />
        </div>
      </div>



      <Divider />



    </section>
  );
};

export default About;
