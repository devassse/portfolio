import { Suspense } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import "./App.css";

const translationEn = {welcome: "Welcome", title: "I am a Programmer!!", description: "With more than 8 years of experience in the professional market"};
const translationPt = {welcome: "Seja Bem Vindo!", title: "Sou Programador!!", description: "Com mais de 8 anos de experiência no mercado profissional"};
const translationJpRm = {welcome: "Irasshaimase", title: "Watashi wa Programma desu!!", description: "Purofesshonaru ichiba de 8-nen no keiken o motsu"};
const translationJp = {welcome: "いらっしゃいませ", title: "私はですプログラム!!", description: "プロフェッショナル市場で8年の経験を持つ"};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    pt: { translation: translationPt },
    jprm: { translation: translationJpRm },
    jp: { translation: translationJp },
  },
  lng: "en",
  fallbacklng: "en",
  interpolation: { escapeValue: false },
});

function App() {
  const { t } = useTranslation()

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value)
  };

  return (
    <>
      <Suspense fallback="Loading ...">
        <div className="text-center">
        <h1 className="welcome">{t('welcome')}</h1>
        <h3 className="title">{t('title')}</h3>
        
        <p className="description">
          {t('description')}
        </p>
        </div>

        <div className="lang-switcher">
        <select name="language" onChange={onChange}>
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
          <option value="jprm">Japanese(Romage)</option>
          <option value="jp">Japanese</option>
        </select>
        </div>
      </Suspense>
    </>
  );
}

export default App;
