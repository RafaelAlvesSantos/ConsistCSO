import React from "react";
import Fade from "react-reveal/Fade";

const Solutions = () => {
  return (
    <div className="solutionsText">
      <Fade bottom>
        <div className="about">
          <h1 className="h1Blue">Sobre Nós</h1>
          <p className="subAbout"></p>
        </div>
        <div className="primeiraCaixa">
          <div className="imgBox1">
            <img
              className="img1"
              alt=""
              src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg"
            ></img>
          </div>
          <div className="text1">
            <h3 className="h3Title">Desenvolver Negócios</h3>
            <p className="descP">
              Desenvolver negócios. É com esse pensamento que definimos toda
              nossa estratégia de atuação. Oferecemos soluções para um
              desenvolvimento contextualizado, estruturado e sistêmico que
              possibilite o sucesso, a sustentabilidade e a longevidade dos
              negócios. Dispomos das ferramentas e técnicas adequadas às
              necessidades de cada negócio.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Solutions;
