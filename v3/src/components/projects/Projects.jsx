import React from "react";
import { useTranslation } from "react-i18next";
import projectBg1 from "../../../public/projects/project-bg-1.png"
import projectBg2 from "../../../public/projects/project-bg-2.png"

const projects = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* PROJECTS SECTION */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          <span>Projectos</span>
        </h2>
        <div className="portfolio-content">
          <article className="project">
            <div className="project-image">
              <img
                src={projectBg1}
                alt="Projectos de Web"
              />
              <div className="project-layer">
                <h4>HTML/CSS</h4>
                <p>
                  Projectos de websites( com mínimo de Javascript) desenvolvidos
                  por mim.
                </p>
                <a href="#">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
            <div className="project-intro">
              <h4>HTML/CSS/Javascript</h4>
              <p>Projectos de websites e aplicações VanillaJS</p>
            </div>
          </article>
          <article className="project">
            <div className="project-image">
              <img
                src={projectBg1}
                alt="Projectos de Web"
              />
              <div className="project-layer">
                <h4>NodeJS</h4>
                <p>
                  Projectos desenvolvidos com a plataforma Node. Inclui todos
                  frameworks baseados nesta plataforma.
                </p>
                <a href="#">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
            <div className="project-intro">
              <h4>NodeJS</h4>
              <p>Projectos desenvolvidos com a plataforma Node</p>
            </div>
          </article>
          <article className="project">
            <div className="project-image">
              <img
                src={projectBg1}
                alt="Projectos de Web"
              />
              <div className="project-layer">
                <h4>Mobile</h4>
                <p>
                  Projectos desenvolvidos para plataformas móveis. Desde
                  projectos hybridos até aos desenvolvidos nativamente (Android
                  & iOS)
                </p>
                <a href="#">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
            <div className="project-intro">
              <h4>Mobile</h4>
              <p>Projectos desenvolvidos para plataformas móveis.</p>
            </div>
          </article>
          <article className="project">
            <div className="project-image">
              <img
                src={projectBg1}
                alt="Projectos de Web"
              />
              <div className="project-layer">
                <h4>Java</h4>
                <p>
                  Projectos desenvolvidos com a plataforma Java. Desde
                  aplicações Desktop até APIs.
                </p>
                <a href="#">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
            <div className="project-intro">
              <h4>Java</h4>
              <p>Projectos desenvolvidos com a plataforma Java</p>
            </div>
          </article>
          <article className="project">
            <div className="project-image">
              <img
                src={projectBg1}
                alt="Projectos de Web"
              />
              <div className="project-layer">
                <h4>IoT</h4>
                <p>
                  Soluções Tecnológicas Intercativas - aplicações de AR & VR,
                  beacons, TouchScreen.
                </p>
                <a href="#">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
            <div className="project-intro">
              <h4>IoT</h4>
              <p>Soluções Tecnológicas Intercativas</p>
            </div>
          </article>
          <article className="project">
            <div className="project-image">
              <img
                src={projectBg1}
                alt="Projectos de Web"
              />
              <div className="project-layer">
                <h4>PHP/C#/C/C++</h4>
                <p>Variedade de Projectos fracamente implementados.</p>
                <a href="#">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
            <div className="project-intro">
              <h4>PHP/C#/C/C++</h4>
              <p>
                Projectos implementados já há um tempo, fracamente utilzados.
              </p>
            </div>
          </article>

          <span className="projects-rights">
            * Reservados os Direitos Autorais das Entidades Contratantes.
          </span>
        </div>
      </section>
      {/* PROJECTS SECTION */}
    </>
  );
};

export default projects;
