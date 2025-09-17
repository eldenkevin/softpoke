import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import comma from "../assets/comma.svg";
import "../App.css";

const Footer: React.FC = () => {
  const location = useLocation(); // 현재 경로를 가져옵니다.
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (path: string) => {
    if (i18n.language === 'ja') return path;
    return `/${i18n.language}${path}`;
  };

  const [caTime, setCaTime] = useState<string>("");
  const [jpnTime, setJpnTime] = useState<string>("");
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [colonVisible, setColonVisible] = useState(true);

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
    const intervalId = setInterval(updateTimes, 60000); // 1분마다 시간 업데이트

    // 콜론 깜빡임 효과 (1초마다)
    const colonInterval = setInterval(() => {
      setColonVisible((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(colonInterval);
    };
  }, []);

  const handleGetInTouchClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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

  const isHome = location.pathname === "/" ||
                 location.pathname === "/en" ||
                 location.pathname === "/en/" ||
                 location.pathname === "/ko" ||
                 location.pathname === "/ko/";

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
      {/* <footer className="footer"> */}
      <footer className={isHome ? "home-footer" : ""}>
      <section className="footerContainer">
        <p className="globalTime">
          {t('footer.globalLocation')} <br />
          {t('footer.workingWorldwide')}
          <br />
          <br />
          {t('footer.caTime')} <span dangerouslySetInnerHTML={{
            __html: caTime.replace(':', `<span style="opacity: ${colonVisible ? 1 : 0}">:</span>`)
          }} />
          <br />
          {t('footer.jpnKorTime')} <span dangerouslySetInnerHTML={{
            __html: jpnTime.replace(':', `<span style="opacity: ${colonVisible ? 1 : 0}">:</span>`)
          }} />
          <br />
        </p>

        <div className="bottomLink">
          <div className="siteMap">
            <div className="siteMap01">{t('footer.sitemap')}</div>
            <ul className="siteMap02">
              <li>
                <Link to={getLocalizedPath("/service")}>{t('header.service')}</Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/work")}>{t('header.work')}</Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/about")}>{t('header.about')}</Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/contact")}>{t('header.contact')}</Link>
              </li>

              {/* 모바일 언어 버튼 */}
              <li className="mobile-language-buttons">
                <Link
                  to="/"
                  className={`lang-btn ${i18n.language === 'ja' ? 'active' : ''}`}
                >
                  JP
                </Link>
                <span className="lang-divider">|</span>
                <Link
                  to="/en"
                  className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                >
                  EN
                </Link>
                <span className="lang-divider">|</span>
                <Link
                  to="/ko"
                  className={`lang-btn ${i18n.language === 'ko' ? 'active' : ''}`}
                >
                  KR
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="social">
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
          </div> */}
        </div>

        <a href="mailto:hi@softpoke.jp" className="bigContact" onClick={handleGetInTouchClick}>
          {t('footer.getInTouch')}
        </a>
        <img
          src={comma}
          alt="logoComma"
          className="logoCommaBottom"
          style={{ cursor: 'default', pointerEvents: 'none' }}
        />
        <div className="bottom">
          <div className="copyRight">
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
          <div className="privacy">
            <Link to={getLocalizedPath("/privacy")}>{t('footer.privacy')}</Link>
          </div>
        </div>
      </section>
    </footer>
    </>
  );
};

export default Footer;
