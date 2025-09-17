import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import comma from "../assets/comma.svg";
import { Divider, DividerWithMargin } from "../components/Divider";
import imgC01 from "../assets/img-c01.jpg";
import imgC02 from "../assets/img-c02.jpg";
import imgC03 from "../assets/img-c03.jpg";
import imgC04 from "../assets/img-c04.jpg";
import imgC05 from "../assets/img-c05.jpg";
import imgC06 from "../assets/img-c06.jpg";
import imgC07 from "../assets/img-c07.jpg";
import imgC08 from "../assets/img-c08.jpg";
import imgC09 from "../assets/img-c09.jpg";

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const photoGridItemsRef = useRef<(HTMLImageElement | null)[]>([]);
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    photoGridItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      photoGridItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  const handleEmailClick = async (e: React.MouseEvent<HTMLSpanElement>) => {
    const email = 'hi@softpoke.jp';
    const element = e.currentTarget;

    try {
      await navigator.clipboard.writeText(email);

      const rect = element.getBoundingClientRect();
      setPopupPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
      setShowCopiedPopup(true);

      setTimeout(() => {
        setShowCopiedPopup(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback method for older browsers
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
        setPopupPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        });
        setShowCopiedPopup(true);

        setTimeout(() => {
          setShowCopiedPopup(false);
        }, 2000);
      } catch (err2) {
        console.error('Fallback copy also failed:', err2);
      }

      document.body.removeChild(textArea);
    }
  };

  const getCopiedMessage = () => {
    const currentLang = i18n.language;
    if (currentLang === 'ja') {
      return 'メールアドレスをコピーしました ✨';
    } else if (currentLang === 'ko') {
      return '이메일 복사 완료 ✨';
    }
    return 'Email copied ✨';
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
            zIndex: 9999
          }}
        >
          {getCopiedMessage()}
        </div>
      )}
      <section className="bodySection bodySection-Work">
      <DividerWithMargin />
      <h1 className="bodyTitle01">{t('contact.title1')}</h1>
      <div>
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-Contact"
          style={{ marginTop: '-30px', height: '28px', marginLeft: '11px', cursor: 'pointer' }}
        />
      </div>
      <h1 className="bodyTitle02" dangerouslySetInnerHTML={{ __html: t('contact.title2') }} />

      <div className="workText01">
        <div>
          <p className="workText02">{t('contact.areYouReady.title')}</p>
        </div>
        <div>
          <p className="workText03" dangerouslySetInnerHTML={{ __html: t('contact.areYouReady.description') }} />
        </div>

        <div className="photo-grid">
          <img
            src={imgC01}
            alt="Image 1"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[0] = el)}
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
          <img
            src={imgC02}
            alt="Image 2"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[1] = el)}
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
          <img
            src={imgC03}
            alt="Image 3"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[2] = el)}
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
          <img
            src={imgC04}
            alt="Image 4"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[3] = el)}
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
          <img
            src={imgC05}
            alt="Image 5"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[4] = el)}
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
          <img
            src={imgC06}
            alt="Image 6"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[5] = el)}
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
          <img
            src={imgC07}
            alt="Image 7"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[6] = el)}
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
          <img
            src={imgC08}
            alt="Image 8"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[7] = el)}
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
          <img
            src={imgC09}
            alt="Image 9"
            className="tilt-card"
            ref={(el) => (photoGridItemsRef.current[8] = el)}
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
        </div>

        <div className="contactInfo01">
          <div className="emptyContact01"></div>
          <div className="contactInfo02">
            <p dangerouslySetInnerHTML={{ __html: t('contact.contactInfo.description') }} />
            <p style={{ marginTop: '10px' }}>
              📩{' '}
              <span
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
                className="contactInfo03"
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

export default Contact;
