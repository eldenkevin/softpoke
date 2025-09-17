import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Work from './pages/Work';
import Privacy from './pages/Privacy';
import './App.css';

const LanguageRoute: React.FC = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);

    if (langMatch) {
      const detectedLang = langMatch[1];
      if (['en', 'ko'].includes(detectedLang) && i18n.language !== detectedLang) {
        i18n.changeLanguage(detectedLang);
      }
    } else {
      // 언어 prefix가 없으면 일본어로 설정
      if (i18n.language !== 'ja') {
        i18n.changeLanguage('ja');
      }
    }
  }, [location.pathname, i18n]);

  return null;
};

const App: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <div lang={i18n.language}>
        <LanguageRoute />
        <Header />
        <main className="main">
          <Routes>
          {/* 일본어 라우트 (기본, prefix 없음) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/work" element={<Work />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* 영어 라우트 */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/service" element={<Service />} />
          <Route path="/en/work" element={<Work />} />
          <Route path="/en/privacy" element={<Privacy />} />

          {/* 한국어 라우트 */}
          <Route path="/ko" element={<Home />} />
          <Route path="/ko/about" element={<About />} />
          <Route path="/ko/contact" element={<Contact />} />
          <Route path="/ko/service" element={<Service />} />
          <Route path="/ko/work" element={<Work />} />
          <Route path="/ko/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
