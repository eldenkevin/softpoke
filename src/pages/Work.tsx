import React, { useEffect, useRef } from 'react';
import '../App.css';
import comma from '../assets/comma.svg';
import { Divider, DividerWithMargin } from '../components/Divider';

const Work: React.FC = () => {

  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      <h1 className='bodyTitle01'>Design</h1>
      <div>
        <img src={comma} alt="logoComma" className="logoComma logoComma-Work" />
      </div>
      <h1 className='bodyTitle02'>with the power<br />
        to transform
        business.</h1>

      <div className='workText01'>
        <div>
          <p className='workText02'>OUR WORK</p>

        </div>
        <div>
          <p className='workText03'>We empower purpose-driven businesses to become industry leaders through strategic design and robust development.
            As a trusted growth partner, we offer tailored UI/UX design and comprehensive development services that evolve with your project. Our expert team is dedicated to delivering impactful, scalable digital solutions with precision and creativity.</p>

        </div>
   
        <div className="work-grid">
          {Array.from({ length: 26 }, (_, index) => (
            <div 
              key={index} 
              className={`work-grid${index + 1 < 10 ? '0' : ''}${index + 1}`}
              ref={el => gridItemsRef.current[index] = el}
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
                    <p className='workDetail-p02'>{work.description}</p>
                    <p className='workDetail-p03'>{work.year}</p>
                  </div>
                </li>
              </React.Fragment>
            ))}
            <Divider />
            <li>
              <div className='workDetail'>
                <p className='workDetail-p04'>+ Over 10 companies</p>
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
