import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./locales/en/translation.json";
import translationUk from "./locales/uk/translation.json";

const savedLanguage = localStorage.getItem("language") || "en";

const resources = {
  en: { translation: translationEn },
  uk: { translation: translationUk },
};

i18n
  .use(LanguageDetector) // автоматичне виявлення мови браузера
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en", // мова за замовчуванням
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
