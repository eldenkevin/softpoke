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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const langLabels: Record<string, string> = { en: 'EN', ja: 'JP', ko: 'KR' };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
  };

  // Which control the shared arrow drives depends on the viewport, but reading
  // it into state would gate rendering on hydration and strip the whole menu
  // out of the server HTML. A click always happens after hydration, so the
  // media query can simply be read at that moment instead.
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  const openMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsLangOpen(false);
  };

  const openLang = () => {
    setIsLangOpen((prev) => !prev);
    setIsMenuOpen(false);
  };

  const handleToggle = () => (isMobile() ? openMenu() : openLang());

  const handleLangSelect = (lang: string) => {
    setIsLangOpen(false);
    router.replace(pathname, { locale: lang });
  };

  // Crossing the 768px breakpoint would otherwise leave the dropdown for the
  // previous viewport open while its trigger is already hidden by CSS.
  useEffect(() => {
    window.addEventListener('resize', closeAll);
    return () => window.removeEventListener('resize', closeAll);
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
        <Link
          href="/"
          aria-label="Softpoke"
          className="navbar__logo"
          onClick={closeAll}
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
        ></Link>
        <div className="navbar__wrap">
          {/* Both variants are always rendered; globals.css hides the one that
              does not belong to the current viewport. Gating them on measured
              width instead would leave the server HTML with no links at all. */}
          <ul className="navbar__menu">{menuItems}</ul>
          <div className="lang" ref={dropdownRef}>
            <p
              className="langRight01"
              onClick={openLang}
              style={{ cursor: 'pointer' }}
            >
              {langLabels[locale] || 'JP'}
            </p>
            <p
              className="langRight02"
              onClick={openMenu}
              style={{ cursor: 'pointer' }}
            >
              {locale === 'ja' ? 'メニュー' : 'MENU'}
            </p>
            <div
              className={`lang-arrow ${isMenuOpen || isLangOpen ? 'rotated' : ''}`}
              onClick={handleToggle}
              style={{ cursor: 'pointer' }}
            ></div>
            {isLangOpen && <LangDropdown />}
            {isMenuOpen && <MenuDropdown />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
