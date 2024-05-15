import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../src/i18n";
import IconLanguageOutline from "../svgs/languageIcon";

const header = () => {
  const { t } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
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
          <ul>
            <li>
              <a href="#about">
                {t("presentation")}
              </a>
            </li>
            <li>
              <a href="#skills">{t("skills")}</a>
            </li>
            <li>
              <a href="#experience">{t("experience")}</a>
            </li>
            <li>
              <a href="#portfolio">{t("portfolio")}</a>
            </li>
            <li>
              <a href="#contacts">{t("contacts")}</a>
            </li>
            <li>
              <a href="#">
                <IconLanguageOutline />
              </a>
              <ul className="navbar-submenu">
                <li onClick={() => switchLanguage('en')}><a href="#">{t("langEn")}</a></li>
                <li onClick={() => switchLanguage('pt')}><a href="#">{t("langPt")}</a></li>
                <li onClick={() => switchLanguage('jprm')}><a href="#">{t("langJpRm")}</a></li>
                <li onClick={() => switchLanguage('jp')}><a href="#">{t("langJp")}</a></li>
            </ul>
            </li>
          </ul>
        </nav>
      </header>
      {/* HEADER SECTION */}
    </>
  );
};

export default header;
