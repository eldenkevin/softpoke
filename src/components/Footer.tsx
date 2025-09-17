import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import comma from "../assets/comma.svg";
import "../App.css";

const Footer: React.FC = () => {
  const location = useLocation(); // 현재 경로를 가져옵니다.
  const { t } = useTranslation();

  const [caTime, setCaTime] = useState<string>("");
  const [jpnTime, setJpnTime] = useState<string>("");

  const updateTimes = () => {
    const now = new Date();

    const caTime = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Los_Angeles",
    }).format(now);

    const jpnTime = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Tokyo",
    }).format(now);

    setCaTime(caTime);
    setJpnTime(jpnTime);
  };

  useEffect(() => {
    updateTimes();
    const intervalId = setInterval(updateTimes, 60000); // 1초마다 시간 업데이트

    return () => clearInterval(intervalId);
  }, []);


  const isHome = location.pathname === "/" ||
                 location.pathname === "/en" ||
                 location.pathname === "/en/" ||
                 location.pathname === "/ko" ||
                 location.pathname === "/ko/";

  return (
    // <footer className="footer">
    <footer className={isHome ? "home-footer" : ""}>
      <section className="footerContainer">
        <p className="globalTime">
          BASED IN SILICON VALLEY (USA), JAPAN, KOREA <br />
          WORKING WORLDWIDE
          <br />
          <br />
          CA, USA Pacific Time_ {caTime}
          <br />
          JAPAN & KOREA JST/KST_ {jpnTime}
          <br />
        </p>

        <div className="bottomLink">
          <div className="siteMap">
            <div className="siteMap01">SITEMAP</div>
            <ul className="siteMap02">
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="social">
            <div className="social01">SOCIAL</div>
            <ul className="social02">
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Medium</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Pinterest</a>
              </li>
              <li>
                <a href="/">Dribbble</a>
              </li>supa
            </ul>
          </div>
        </div>

        <a href="mailto:hi@softpoke.jp" className="bigContact">
          Get in touch
        </a>
        <img src={comma} alt="logoComma" className="logoCommaBottom" />
        <div className="bottom">
          <div className="copyRight">
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
          <div className="privacy">
            <Link to="/privacy">{t('footer.privacy')}</Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
