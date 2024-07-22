import React from "react";
import { useTranslation } from "react-i18next";
import profilePic from "../../../public/imgs/profile.jpg"

const Hero = () => {
  const { t } = useTranslation();
  let cvUrl = t('download_cv_url'); //Dynamic CV File depending on Selected Language

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
        <h1>{t("welcome")}!</h1>
        <h3>João Devson Mucavel</h3>
        <h4>{t("me")} <span className="">{t("title")}</span></h4>
        <p>
        {t("description")}
        </p>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-devson-mucavel-116072aa/"
            target="_blank"
            ><i className="bx bxl-linkedin"></i
          ></a>
          <a href="https://github.com/devassse" target="_blank"
            ><i className="bx bxl-github"></i
          ></a>
          <a href="https://www.facebook.com/Devasse" target="_blank"
            ><i className="bx bxl-facebook"></i
          ></a>
        </div>
        <a
          href={cvUrl}
          target="_blank"
          className="btn"
          >{t("download_cv")}
          </a>
      </div>
      <div className="profile">
        <img src={profilePic} alt="João Devson Mucavel" />
      </div>
      </section>
    </>
  );
};

export default Hero;
