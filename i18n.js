import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",

    // Add your supported languages here
    supportedLngs: ["en", "mn"],

    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
  });

export default i18n;
