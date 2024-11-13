import React from "react";
import { useTranslation } from "react-i18next";

const skills = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* SKILLS SECTION */}
      <section className="skills" id="skills">
      <h2 className="heading">Minhas <span>Habilidades</span></h2>
      <div className="skills-content">
        <article className="skill">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Projectos de aplicações para Web. Desde Websites à plataformas
            Enterprise e portais para pequenos negócios e grandes empresas.
          </p>
          <a href="pages/projects.html" className="btn">ver mais..</a>
        </article>
        <article className="skill">
          <i className="bx bx-mobile-vibration"></i>
          <h3>Mobile Development</h3>
          <p>
            Aplicações para despositivos móveis (iOS e Android - híbridas e
            Nativas). Híbridas desenvolvidas e feitas deploy para todas
            plataformas.
          </p>
          <a href="pages/projects.html" className="btn">ver mais..</a>
        </article>
        <article className="skill">
          <i className="bx bx-intersect"></i>
          <h3>Interactive Soluctions</h3>
          <p>
            Soluções de Realidade Aumentada & Realidade Virtual. IoT e
            Aplicações de TouchScreen. Jogos de memória e curiosidade e
            diversos.
          </p>
          <a href="pages/projects.html" className="btn">ver mais..</a>
        </article>
      </div>
    </section>
      {/* ABOUT SECTION */}
    </>
  );
};

export default skills;
