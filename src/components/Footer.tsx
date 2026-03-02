'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const [caTime, setCaTime] = useState<string>('');
  const [jpnTime, setJpnTime] = useState<string>('');
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [colonVisible, setColonVisible] = useState(true);

  const updateTimes = () => {
    const now = new Date();

    const caTime = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Los_Angeles',
    }).format(now);

    const jpnTime = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Tokyo',
    }).format(now);

    setCaTime(caTime);
    setJpnTime(jpnTime);
  };

  useEffect(() => {
    updateTimes();
    const intervalId = setInterval(updateTimes, 60000);
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

  const isHome = pathname === '/';

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
      <footer className={isHome ? 'home-footer' : ''}>
        <section className="footerContainer">
          <p className="globalTime">
            {t('footer.globalLocation')} <br />
            {t('footer.workingWorldwide')}
            <br />
            <br />
            {t('footer.caTime')}{' '}
            <span
              dangerouslySetInnerHTML={{
                __html: caTime.replace(
                  ':',
                  `<span style="opacity: ${colonVisible ? 1 : 0}">:</span>`
                ),
              }}
            />
            <br />
            {t('footer.jpnKorTime')}{' '}
            <span
              dangerouslySetInnerHTML={{
                __html: jpnTime.replace(
                  ':',
                  `<span style="opacity: ${colonVisible ? 1 : 0}">:</span>`
                ),
              }}
            />
            <br />
          </p>

          <div className="bottomLink">
            <div className="siteMap">
              <div className="siteMap01">{t('footer.sitemap')}</div>
              <ul className="siteMap02">
                <li>
                  <Link href="/service">{t('header.service')}</Link>
                </li>
                <li>
                  <Link href="/work">{t('header.work')}</Link>
                </li>
                <li>
                  <Link href="/about">{t('header.about')}</Link>
                </li>
                <li>
                  <Link href="/contact">{t('header.contact')}</Link>
                </li>
                <li className="mobile-language-buttons">
                  <Link href="/" locale="ja" className={`lang-btn ${locale === 'ja' ? 'active' : ''}`}>
                    JP
                  </Link>
                  <span className="lang-divider">|</span>
                  <Link href="/" locale="en" className={`lang-btn ${locale === 'en' ? 'active' : ''}`}>
                    EN
                  </Link>
                  <span className="lang-divider">|</span>
                  <Link href="/" locale="ko" className={`lang-btn ${locale === 'ko' ? 'active' : ''}`}>
                    KR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <a href="mailto:hi@softpoke.jp" className="bigContact" onClick={handleGetInTouchClick}>
            {t('footer.getInTouch')}
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/comma.svg"
            alt="logoComma"
            className="logoCommaBottom"
            style={{ cursor: 'default', pointerEvents: 'none' }}
          />
          <div className="bottom">
            <div className="copyRight">
              <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            </div>
            <div className="privacy">
              <Link href="/privacy">{t('footer.privacy')}</Link>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
