import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import "./White.css"; // 홈화면에만 적용할 스타일

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = () => {
    navigate("/");
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
    setSelectedLang(lang);
    setIsLangOpen(false);
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

  const isHome = location.pathname === "/";

  const menuItems = (
    <>
      <li>
        <Link to="/service" onClick={() => setIsMenuOpen(false)}>Service</Link>
      </li>
      <li>
        <Link to="/work" onClick={() => setIsMenuOpen(false)}>Work</Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </li>
    </>
  );

  const LangDropdown = () => (
    <ul className="lang-dropdown-pc">
      <li onClick={() => handleLangSelect("EN")}>EN</li>
      <li onClick={() => handleLangSelect("JP")}>JP</li>
      <li onClick={() => handleLangSelect("KR")}>KR</li>
    </ul>
  );

  const MenuDropdown = () => <ul className="dropdown-menu">{menuItems}</ul>;

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
                {selectedLang}
              </p>
            ) : (
              <p
                className="langRight02"
                onClick={handleToggle}
                style={{ cursor: "pointer" }}
              >
                MENU
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
