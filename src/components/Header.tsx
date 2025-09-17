import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../App.css";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = i18n.language;
  const langLabels = { en: 'EN', ja: 'JP', ko: 'KR' };

  const handleLogoClick = () => {
    if (currentLang === 'ja') {
      navigate("/");
    } else {
      navigate(`/${currentLang}`);
    }
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
    i18n.changeLanguage(lang);
    setIsLangOpen(false);

    // URL 업데이트 로직 (나중에 라우터 설정 후 구현)
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|ko)/, '');

    if (lang === 'ja') {
      navigate(pathWithoutLang || '/');
    } else {
      navigate(`/${lang}${pathWithoutLang || ''}`);
    }

  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isHome = location.pathname === "/" ||
                 location.pathname === "/en" ||
                 location.pathname === "/en/" ||
                 location.pathname === "/ko" ||
                 location.pathname === "/ko/";

  const getLocalizedPath = (path: string) => {
    if (currentLang === 'ja') return path;
    return `/${currentLang}${path}`;
  };

  const menuItems = (
    <>
      <li>
        <Link to={getLocalizedPath("/service")} onClick={() => setIsMenuOpen(false)}>
          {t('header.service')}
        </Link>
      </li>
      <li>
        <Link to={getLocalizedPath("/work")} onClick={() => setIsMenuOpen(false)}>
          {t('header.work')}
        </Link>
      </li>
      <li>
        <Link to={getLocalizedPath("/about")} onClick={() => setIsMenuOpen(false)}>
          {t('header.about')}
        </Link>
      </li>
      <li>
        <Link to={getLocalizedPath("/contact")} onClick={() => setIsMenuOpen(false)}>
          {t('header.contact')}
        </Link>
      </li>
    </>
  );

  const LangDropdown = () => (
    <ul className="lang-dropdown-pc">
      <li onClick={() => handleLangSelect("en")}>EN</li>
      <li onClick={() => handleLangSelect("ja")}>JP</li>
      <li onClick={() => handleLangSelect("ko")}>KR</li>
    </ul>
  );

  const MenuDropdown = () => <ul className="menu-dropdown-mobile">{menuItems}</ul>;

  return (
    <header className={isHome ? "home-header" : "navbar-header"}>
      <nav className={`navbar ${isHome ? "home-navbar" : ""}`}>
        <div
          className="navbar__logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
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
                style={{ cursor: "pointer" }}
              >
                {langLabels[currentLang as keyof typeof langLabels] || 'JP'}
              </p>
            ) : (
              <p
                className="langRight02"
                onClick={handleToggle}
                style={{ cursor: "pointer" }}
              >
                {currentLang === 'ja' ? 'メニュー' : 'MENU'}
              </p>
            )}
            <div
              className={`lang-arrow ${
                isMenuOpen || isLangOpen ? "rotated" : ""
              }`}
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
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
