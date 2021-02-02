import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Solutions2 = () => {
  return (
    <div className="solutionsText">
      <Fade bottom>
        <div className="primeiraCaixa">
          <div className="imgBox1">
            <img
              className="img1"
              alt=""
              src="https://image.shutterstock.com/image-photo/red-ribbon-cutting-pair-scissors-600w-5932744.jpg"
            ></img>
          </div>
          <div className="text1">
            <h3 className="h3Title">Impulsionar Novos Negócios</h3>
            <ul className="descP">
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Estudo de Cenários
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise de Viabilidade de Negócio
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Elaboração de Anteprojeto de Negócio
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Elaboração de Projeto de Negócio
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Execução de Projeto de Negócio
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Solutions2;
