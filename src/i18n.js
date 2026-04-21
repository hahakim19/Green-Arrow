import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import french from "./assets/lang/french.json";
import english from "./assets/lang/english.json";
import arabic from "./assets/lang/arabic.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: french },
      en: { translation: english },
      ar: { translation: arabic },
    },
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
