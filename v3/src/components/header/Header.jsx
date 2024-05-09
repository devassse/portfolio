import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../src/i18n";
import IconLanguageOutline from "../svgs/languageIcon"

const header = () => {
  const { t } = useTranslation();

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <>
      {/* HEADER SECTION */}
      <header className="header">
        <h1>
          <a href="#" className="logo">
            Devasse.
          </a>
        </h1>

        <a id="menu-icon">
          <i className="bx bx-menu-alt-right"></i>
        </a>

        <nav className="navbar">
          <a href="#about" className="active">
          {t("presentation")}
          </a>
          <a href="#skills">{t("skills")}</a>
          <a href="#experience">{t("experience")}</a>
          <a href="#portfolio">{t("portfolio")}</a>
          <a href="#contacts">{t("contacts")}</a>
          <a href="#">
          <IconLanguageOutline/>
          </a>
        </nav>

        
        <div className="lang-switcher">
            <select name="language" onChange={onChange}>
              <option value="en">{t("langEn")}</option>
              <option value="pt">{t("langPt")}</option>
              <option value="jprm">{t("langJpRm")}</option>
              <option value="jp">{t("langJp")}</option>
            </select>
          </div>
      </header>
      {/* HEADER SECTION */}
    </>
  );
};

export default header;
