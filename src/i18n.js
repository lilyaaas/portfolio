import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import en from "./locales/en.json";
import fr from "./locales/fr.json";

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...en },
      fr: { ...fr },
    },
    fallbackLng: "en",
    detection: {
        order: ['path', 'localStorage', 'navigator'], // order of detection
        caches: ['localStorage'], // cache the user's choice
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;