import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../src/i18n/en";
import pt from "../src/i18n/pt";
import jprm from "../src/i18n/jprm";
import jp from "../src/i18n/jp";

const resources = {
  en: { translation: en },
  pt: { translation: pt },
  jprm: { translation: jprm },
  jp: { translation: jp },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbacklng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
