'use client';

import { useState, useEffect, useRef } from 'react';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';

const Header = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const langLabels: Record<string, string> = { en: 'EN', ja: 'JP', ko: 'KR' };

  const handleLogoClick = () => {
    router.push('/');
    setIsMenuOpen(false);
    setIsLangOpen(false);
  };

  const handleToggle = () => {
    if (windowWidth <= 768) {
      setIsMenuOpen((prev) => !prev);
      setIsLangOpen(false);
    } else {
      setIsLangOpen((prev) => !prev);
      setIsMenuOpen(false);
    }
  };

  const handleLangSelect = (lang: string) => {
    setIsLangOpen(false);
    router.replace(pathname, { locale: lang });
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isHome = pathname === '/';

  const menuItems = (
    <>
      <li>
        <Link href="/service" onClick={() => setIsMenuOpen(false)}>
          {t('header.service')}
        </Link>
      </li>
      <li>
        <Link href="/work" onClick={() => setIsMenuOpen(false)}>
          {t('header.work')}
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setIsMenuOpen(false)}>
          {t('header.about')}
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
          {t('header.contact')}
        </Link>
      </li>
    </>
  );

  const LangDropdown = () => (
    <ul className="lang-dropdown-pc">
      <li onClick={() => handleLangSelect('en')}>EN</li>
      <li onClick={() => handleLangSelect('ja')}>JP</li>
      <li onClick={() => handleLangSelect('ko')}>KR</li>
    </ul>
  );

  const MenuDropdown = () => <ul className="menu-dropdown-mobile">{menuItems}</ul>;

  return (
    <header className={isHome ? 'home-header' : 'navbar-header'}>
      <nav className={`navbar ${isHome ? 'home-navbar' : ''}`}>
        <div
          className="navbar__logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          }}
        ></div>
        <div className="navbar__wrap">
          {windowWidth > 768 ? (
            <ul className="navbar__menu">{menuItems}</ul>
          ) : null}
          <div className="lang" ref={dropdownRef}>
            {windowWidth > 768 ? (
              <p
                className="langRight01"
                onClick={handleToggle}
                style={{ cursor: 'pointer' }}
              >
                {langLabels[locale] || 'JP'}
              </p>
            ) : (
              <p
                className="langRight02"
                onClick={handleToggle}
                style={{ cursor: 'pointer' }}
              >
                {locale === 'ja' ? 'メニュー' : 'MENU'}
              </p>
            )}
            <div
              className={`lang-arrow ${isMenuOpen || isLangOpen ? 'rotated' : ''}`}
              onClick={handleToggle}
              style={{ cursor: 'pointer' }}
            ></div>
            {isLangOpen && windowWidth > 768 && <LangDropdown />}
            {isMenuOpen && windowWidth <= 768 && <MenuDropdown />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
