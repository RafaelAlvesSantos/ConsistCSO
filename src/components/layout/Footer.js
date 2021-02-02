import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fragment>
      <Fade>
        <footer className="footer footerFlex">
          <div className="">
            <h2 className="footer-heading">Sobre nós</h2>
            <p>
              Uma consultoria organizacional que tem compromisso com a inovação
              e os resultados, oferecendo soluções customizadas às necessidades,
              cultura e realidade de cada negócio, baseadas no planejamento
              estratégico, nos objetivos e metas empresariais e no contexto
              sócio-ambiental. Com uma visão sistêmica e utilizando ferramentas
              e técnicas estruturadas de gestão, a CONSIST.CSO conta com uma
              equipe de consultores altamente qualificados e com larga
              experiência em projetos de consultoria organizacional.
            </p>
          </div>
        </footer>
      </Fade>
    </Fragment>
  );
};

export default Footer;
