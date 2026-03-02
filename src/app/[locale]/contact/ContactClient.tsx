'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Divider, DividerWithMargin } from '@/components/Divider';

const ContactClient = () => {
  const t = useTranslations();
  const locale = useLocale();
  const photoGridItemsRef = useRef<(HTMLImageElement | null)[]>([]);
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

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
      { threshold: 0.1 }
    );

    const items = photoGridItemsRef.current;
    items.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const handleEmailClick = async (e: React.MouseEvent<HTMLSpanElement>) => {
    const email = 'hi@softpoke.jp';
    const element = e.currentTarget;

    try {
      await navigator.clipboard.writeText(email);
      const rect = element.getBoundingClientRect();
      setPopupPosition({ x: rect.left + rect.width / 2, y: rect.top - 10 });
      setShowCopiedPopup(true);
      setTimeout(() => setShowCopiedPopup(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        const rect = element.getBoundingClientRect();
        setPopupPosition({ x: rect.left + rect.width / 2, y: rect.top - 10 });
        setShowCopiedPopup(true);
        setTimeout(() => setShowCopiedPopup(false), 2000);
      } catch (err2) {
        console.error('Fallback copy also failed:', err2);
      }
      document.body.removeChild(textArea);
    }
  };

  const getCopiedMessage = () => {
    if (locale === 'ja') return 'メールアドレスをコピーしました ✨';
    if (locale === 'ko') return '이메일 복사 완료 ✨';
    return 'Email copied ✨';
  };

  const contactImages = Array.from({ length: 9 }, (_, i) => `/images/img-c0${i + 1}.jpg`);

  const tiltHandlers = {
    onMouseMove: (e: React.MouseEvent<HTMLImageElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      e.currentTarget.style.boxShadow = `${rotateY * 1}px ${rotateX * 1}px 20px rgba(0,0,0,0.25)`;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLImageElement>) => {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      e.currentTarget.style.boxShadow = '0px 2px 8px rgba(0,0,0,0.05)';
    },
  };

  return (
    <>
      {showCopiedPopup && (
        <div
          className="copied-popup"
          style={{
            position: 'fixed',
            left: popupPosition.x,
            top: popupPosition.y,
            transform: 'translate(-50%, -100%)',
            zIndex: 9999,
          }}
        >
          {getCopiedMessage()}
        </div>
      )}
      <section className="bodySection bodySection-Work">
        <DividerWithMargin />
        <h1 className="bodyTitle01">{t('contact.title1')}</h1>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/comma.svg"
            alt="logoComma"
            className="logoComma logoComma-Contact"
            style={{ marginTop: '-30px', height: '28px', marginLeft: '11px', cursor: 'pointer' }}
          />
        </div>
        <h1 className="bodyTitle02" dangerouslySetInnerHTML={{ __html: t.raw('contact.title2') }} />

        <div className="workText01">
          <div>
            <p className="workText02">{t('contact.areYouReady.title')}</p>
          </div>
          <div>
            <p className="workText03" dangerouslySetInnerHTML={{ __html: t.raw('contact.areYouReady.description') }} />
          </div>

          <div className="photo-grid">
            {contactImages.map((src, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="tilt-card"
                ref={(el) => { photoGridItemsRef.current[index] = el; }}
                {...tiltHandlers}
              />
            ))}
          </div>

          <div className="contactInfo01">
            <div className="emptyContact01"></div>
            <div className="contactInfo02">
              <p dangerouslySetInnerHTML={{ __html: t.raw('contact.contactInfo.description') }} />
              <p style={{ marginTop: '10px' }}>
                📩{' '}
                <span
                  className="email-link"
                  onClick={handleEmailClick}
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  hi@softpoke.jp
                </span>
              </p>
              <p className="contactInfo03">
                <br />
                {t('contact.contactInfo.title')}
                <br />
                <span
                  className="contactInfo03 email-link"
                  onClick={handleEmailClick}
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  hi@softpoke.jp
                </span>
              </p>
            </div>
          </div>
          <Divider />
        </div>
      </section>
    </>
  );
};

export default ContactClient;
