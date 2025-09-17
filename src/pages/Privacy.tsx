import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import { Divider, DividerWithMargin } from "../components/Divider";

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bodySection bodySection-Privacy">
      <DividerWithMargin />
      <h1 className="bodyTitle01">{t('privacy.title')}</h1>
      <h2 className="bodyDesc01">{t('privacy.effectiveDate')}</h2>
      <Divider />

      <div className="aboutText01">
        <div className="emptyAbout01"></div>
        <div className="aboutText03" dangerouslySetInnerHTML={{ __html: t('privacy.content') }} />
      </div>

      <Divider />
    </section>
  );
};

export default Privacy;
