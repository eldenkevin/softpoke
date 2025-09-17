import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import jaTranslation from './locales/ja/translation.json';
import koTranslation from './locales/ko/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ja: {
    translation: jaTranslation,
  },
  ko: {
    translation: koTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja', // 일본 기업이므로 일본어가 기본
    debug: false,

    detection: {
      order: ['navigator', 'localStorage', 'path', 'htmlTag'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
      checkWhitelist: true,
    },

    interpolation: {
      escapeValue: false,
    },

    // 브라우저 언어 매핑: en-US -> en, ko-KR -> ko, ja-JP -> ja
    supportedLngs: ['en', 'ja', 'ko'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly', // en-US를 en으로, ko-KR을 ko로 매핑
  });

export default i18n;