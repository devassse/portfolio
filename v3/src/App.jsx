import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../src/i18n"
import "./App.css";

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
          <option value="en">{t('langEn')}</option>
          <option value="pt">{t('langPt')}</option>
          <option value="jprm">{t('langJpRm')}</option>
          <option value="jp">{t('langJp')}</option>
        </select>
        </div>
      </Suspense>
    </>
  );
}

export default App;
