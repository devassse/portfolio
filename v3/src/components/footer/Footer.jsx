import React from "react";
import { useTranslation } from "react-i18next";

const footer = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* FOOTER SECTION */}
      <footer>
        <div className="footer" id="contacts">
          <article className="shorbio">
            <h5>Quem sou</h5>
            <p>Desenvolvedor de software desde 2015.</p>
            <p>
              Especialista em desenvolvimento Front-End utilizando as
              tecnologias recentes (VueJS, React, Angular). Sólidos
              conhecimentos em desenvolvimento Back-End. Boas habilidades em
              bases de dados relacionais e no-SQL.
            </p>
            <p>
              Baixar <a target="_blank" href="../../public/files/shortbio.pptx">Shorbio.ppt</a>
            </p>
          </article>
          <article className="main-contacts">
            <h5>Meus Contactos</h5>
            <p>
              Cel. <a href="tel:+258 84 455 9091">(+258) 84 455 9091</a>
            </p>
            <p>
              Tel. <a href="tel:+258 82 275 9237">(+258) 84 455 9091</a>
            </p>
            <p>
              Work. <a href="tel:+258 86 855 9091">(+258) 84 455 9091</a>
            </p>
            <p>
              E-mail:
              <a href="mailto:joaodevsonm@gmail.com">joaodevsonm@gmail.com</a>
            </p>
            <p>
              Skype: <a href="#">joaodevsonm</a>
            </p>
          </article>
          <article className="docs">
            <h5>Documentos</h5>
            <p>
              Abaixo disponibilizo os Links para baixar os meus Documentos e
              Certificações.
            </p>
            <p>
              <a target="_blank" href="../../public/files/diploma.jfif">Diploma</a>
            </p>
            <p>
              <a target="_blank" href="../../public/files/certidao-profissional.pdf">
              Certificado Profissional
              </a>
            </p>
            {/* <p>
              <a href="assets/files/certidao-acadamico.pdf" target="_blank">
                Certificado Acadêmico
              </a>
            </p> */}
          </article>
          <article className="footer-social-media">
            <h5>Redes Sociais</h5>
            <p>
              GitHub:
              <a href="https://github.com/devassse" target="_blank">
                https://github.com/devassse
              </a>
            </p>
            <p>
              LinkedIn: 
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-devson-mucavel-116072aa/"
                target="_blank"
              >
                 https://in.com/joao-devson-mucavel
              </a>
            </p>
            <p>
              Youtube:
              <a
                href="https://www.youtube.com/channel/UCp8R-acBK6_pecqUC8_lV1A"
                target="_blank"
              >
                https://www.youtube.com/channel/ktech
              </a>
            </p>
            <p>
              Facebook:
              <a href="https://www.facebook.com/Devasse" target="_blank">
                https://www.facebook.com/Devasse
              </a>
            </p>
          </article>
        </div>
        <div className="copyrights">
          <p>
            Todos Direitos Reservados &copy; <span id="ano"></span> -
            <a href="http://software.keomagroup.com/" target="_blank">
              Keoma Software, Inc
            </a>
          </p>
          <p>Coded with &hearts; by D3v4$$3</p>
        </div>
      </footer>
      {/* FOOTER SECTION */}
    </>
  );
};

export default footer;
