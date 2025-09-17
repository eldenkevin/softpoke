import React, { useEffect, useRef } from "react";
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
  const { t } = useTranslation();
  const photoGridItemsRef = useRef<(HTMLImageElement | null)[]>([]);

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
  return (
    <section className="bodySection bodySection-Work">
      <DividerWithMargin />
      <h1 className="bodyTitle01">{t('contact.title1')}</h1>
      <div>
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-Contact"
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
          <img src={imgC01} alt="Image 1" ref={(el) => (photoGridItemsRef.current[0] = el)} />
          <img src={imgC02} alt="Image 2" ref={(el) => (photoGridItemsRef.current[1] = el)} />
          <img src={imgC03} alt="Image 3" ref={(el) => (photoGridItemsRef.current[2] = el)} />
          <img src={imgC04} alt="Image 4" ref={(el) => (photoGridItemsRef.current[3] = el)} />
          <img src={imgC05} alt="Image 5" ref={(el) => (photoGridItemsRef.current[4] = el)} />
          <img src={imgC06} alt="Image 6" ref={(el) => (photoGridItemsRef.current[5] = el)} />
          <img src={imgC07} alt="Image 7" ref={(el) => (photoGridItemsRef.current[6] = el)} />
          <img src={imgC08} alt="Image 8" ref={(el) => (photoGridItemsRef.current[7] = el)} />
          <img src={imgC09} alt="Image 9" ref={(el) => (photoGridItemsRef.current[8] = el)} />
        </div>

        <div className="contactInfo01">
          <div className="emptyContact01"></div>
          <div className="contactInfo02">
            <p dangerouslySetInnerHTML={{ __html: t('contact.contactInfo.description') }} />
            <p className="contactInfo03">
              <br />
              {t('contact.contactInfo.title')}
              <br />
              <a href="mailto:hi@softpoke.jp" className="contactInfo03">
                hi@softpoke.jp
              </a>
            </p>
          </div>
        </div>
        <Divider />
      </div>
    </section>
  );
};

export default Contact;
