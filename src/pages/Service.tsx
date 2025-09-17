import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import comma from "../assets/comma.svg";
import { Divider, DividerWithMargin } from "../components/Divider";

const Service: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bodySection bodySection-Service">
      <DividerWithMargin />
      <h1 className="bodyTitle01">{t('service.title1')}</h1>
      <div>
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-Service"
        />
      </div>
      <h1 className="bodyTitle02" dangerouslySetInnerHTML={{ __html: t('service.title2') }} />

      <h2 className="bodyDesc01">
        {t('service.description')}
      </h2>
      <Divider />

      <div className="serviceBox01">
        <div className="serviceBox01-Wrap">
          <div className="serviceBox01-Title">
            <p>{t('service.brand.title')}</p>
          </div>
          <div className="serviceBox01-Desc">
            <p dangerouslySetInnerHTML={{ __html: t('service.brand.items') }} />
          </div>
        </div>
        <div className="serviceBox01-Wrap">
          <div className="serviceBox01-Title">
            <p>{t('service.design.title')}</p>
          </div>
          <div className="serviceBox01-Desc">
            <p dangerouslySetInnerHTML={{ __html: t('service.design.items') }} />
          </div>
        </div>
        <div className="serviceBox01-Wrap">
          <div className="serviceBox01-Title">
            <p>{t('service.development.title')}</p>
          </div>
          <div className="serviceBox01-Desc">
            <p dangerouslySetInnerHTML={{ __html: t('service.development.items') }} />
          </div>
        </div>
      </div>
      <Divider />
      <div className="serviceBox02">
        <div className="serviceBox02-Wrap">
          <div className="serviceBox02-No">
            <p>01</p>
          </div>
          <div className="serviceBox02-Title">
            <p>{t('service.process.discovery.title')}</p>
          </div>
          <div className="serviceBox02-Desc">
            <p dangerouslySetInnerHTML={{ __html: t('service.process.discovery.description') }} />
          </div>
        </div>
        <div className="serviceBox02-Wrap">
          <div className="serviceBox02-No">
            <p>02</p>
          </div>
          <div className="serviceBox02-Title">
            <p>{t('service.process.conceptualization.title')}</p>
          </div>
          <div className="serviceBox02-Desc">
            <p dangerouslySetInnerHTML={{ __html: t('service.process.conceptualization.description') }} />
          </div>
        </div>
        <div className="serviceBox02-Wrap">
          <div className="serviceBox02-No">
            <p>03</p>
          </div>
          <div className="serviceBox02-Title">
            <p>{t('service.process.creation.title')}</p>
          </div>
          <div className="serviceBox02-Desc">
            <p dangerouslySetInnerHTML={{ __html: t('service.process.creation.description') }} />
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
};

export default Service;
