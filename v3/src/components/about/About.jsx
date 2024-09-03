import React from "react";
import { useTranslation } from "react-i18next";

const about = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">
            <span>{t("about")}</span> {t("mim")}
          </h2>
          <p>
            {t("description_name")}
          </p>
          <p>
            {t("description_info")}
          </p>
        </div>
        <div className="certifications-content">
          <article className="certifications">
            <div className="certification">
              <h3>Javascript</h3>
              <p>Udemy | Acedemind</p>
              <a target="_blank" href="../public/files/Certificate-Javascript.pdf">
                {t("download")}
              </a>
            </div>
            <div className="certification">
              <h3>Java</h3>
              <p>Udemy | SDE Arts</p>
              <a target="_blank" href="../public/files/Certificate-Java.pdf">
              {t("download")}
              </a>
            </div>
            <div className="certification">
              <h3>DevOps Basics</h3>
              <p>Udemy | Vitalii Shumylo</p>
              <a
                target="_blank"
                href="../public/files/certificate-introDevOps.pdf"
              >
                {t("download")}
              </a>
            </div>
            <div className="certification">
              <h3>Certificado Profissional</h3>
              <p>IICAEG | SNE</p>
              <a target="_blank" href="../public/files/certidao-profissional.pdf">
              {t("download")}
              </a>
            </div>
            <div className="certification">
              <h3>Satori</h3>
              <p>Programa Japonês Online</p>
              <a target="_blank" href="#">
              {t("download")}
              </a>
            </div>
          </article>
        </div>
      </section>
      {/* ABOUT SECTION */}
    </>
  );
};

export default about;
