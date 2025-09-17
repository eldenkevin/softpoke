import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import '../App.css';
import comma from '../assets/comma.svg';
import { Divider, DividerWithMargin } from '../components/Divider';

const Work: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 다국어 설명 매핑
  const getLocalizedDescription = (englishDesc: string): string => {
    const isJapanese = i18n.language === 'ja' || location.pathname.startsWith('/ja');

    if (!isJapanese) return englishDesc;

    // 일본어 번역 매핑
    const translations: { [key: string]: string } = {
      'Multi Platform': 'マルチプラットフォーム展開',
      'Brand Strategy': 'ブランディング戦略立案',
      'Prototype': 'プロトタイプ開発',
      'Creative Direction': 'クリエイティブディレクション監修',
      'Application': 'アプリケーション開発',
      'E-commerce': 'ECプラットフォーム構築',
      'iOS/Android': 'iOS/Android'
    };

    let translatedDesc = englishDesc;
    Object.entries(translations).forEach(([en, ja]) => {
      translatedDesc = translatedDesc.replace(new RegExp(en, 'g'), ja);
    });

    return translatedDesc;
  };

  const workData = [
    {
      title: '**nuMenu',
      description: 'Multi Platform, Brand Strategy',
      year: '2024',
    },
    {
      title: '**ckmon',
      description: 'Multi Platform, Brand Strategy',
      year: '2023',
    },
    {
      title: '**place',
      description: 'Multi Platform',
      year: '2023',
    },
    {
      title: '**ock Blossom',
      description: 'Prototype',
      year: '2022',
    },
    {
      title: '**a Camp',
      description: 'Multi Platform, Brand Strategy',
      year: '2020',
    },
    {
      title: '**nuts',
      description: 'iOS/Android, Creative Direction',
      year: '2019',
    },
    {
      title: '**nsiticon',
      description: 'iOS/Android Application',
      year: '2019',
    },
    {
      title: '**ready',
      description: 'Multi Platform',
      year: '2018',
    },
    {
      title: '**spoke',
      description: 'iOS/Android, Creative Direction',
      year: '2017',
    },
    {
      title: '**owdy',
      description: 'Multi Platform, Creative Direction',
      year: '2017',
    },
    {
      title: '**inue',
      description: 'Prototype',
      year: '2015',
    },
    {
      title: '**XA',
      description: 'Multi Platform, E-commerce',
      year: '2014',
    },

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    gridItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      gridItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (

    <section className="bodySection bodySection-Work">
      <DividerWithMargin />
      <h1 className='bodyTitle01'>{t('work.title1')}</h1>
      <div>
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-Work"
          style={{ marginTop: '-30px', height: '28px', marginLeft: '11px', cursor: 'pointer' }}
        />
      </div>
      <h1 className='bodyTitle02' dangerouslySetInnerHTML={{ __html: t('work.title2') }} />

      <div className='workText01'>
        <div>
          <p className='workText02'>{t('work.ourWork.title')}</p>

        </div>
        <div>
          <p className='workText03'>{t('work.ourWork.description')}</p>

        </div>
   
        <div className="work-grid">
          {Array.from({ length: 26 }, (_, index) => (
            <div
              key={index}
              className={`work-grid${index + 1 < 10 ? '0' : ''}${index + 1} tilt-card`}
              ref={el => gridItemsRef.current[index] = el}
              onMouseEnter={(e) => {
                e.currentTarget.style.transition = 'transform 0.15s ease-out, box-shadow 0.6s ease-out';
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / centerY * -15;
                const rotateY = (x - centerX) / centerX * 15;

                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                e.currentTarget.style.boxShadow = `${rotateY * 1}px ${rotateX * 1}px 20px rgba(0,0,0,0.25)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                e.currentTarget.style.boxShadow = '0px 2px 8px rgba(0,0,0,0.05)';
              }}
            />
          ))}
        </div>
   

        <Divider />

        <div className='workList'>
          <ul>
            {workData.map((work, tries) => (
              <React.Fragment key={tries}>
                {tries > 0 && <Divider />}
                <li>
                  <div className='workDetail'>
                    <p className='workDetail-p01'>{work.title}</p>
                    <p className='workDetail-p02'>{getLocalizedDescription(work.description)}</p>
                    <p className='workDetail-p03'>{work.year}</p>
                  </div>
                </li>
              </React.Fragment>
            ))}
            <Divider />
            <li>
              <div className='workDetail'>
                <p className='workDetail-p04'>{t('work.overCompanies')}</p>
                <p className='workDetail-p02'></p>
                <p className='workDetail-p03'></p>
              </div>
            </li>
          </ul>
        </div>

        <Divider />


      </div>

    </section>
  );
};

export default Work;
