import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Solutions3 = () => {
  return (
    <div className="solutionsText">
      <Fade bottom>
        <div className="primeiraCaixa">
          <div className="imgBox1">
            <img
              className="img1"
              alt=""
              src="https://image.shutterstock.com/image-photo/business-260nw-668115619.jpg"
            ></img>
          </div>
          <div className="text1">
            <h3 className="h3Title">Fortalecer Negócios</h3>
            <ul className="descP">
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Diagnóstico Organizacional
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise Situacional
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Elaboração e implementação de Plano de Reestruturação
                Organizacional
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise de Processos de Negócio
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Desenvolvimento e implementação de Planejamento Estratégico
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Definição e implantação de KPI’s
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Desenvolvimento e implementação de Programa de Qualificação da
                Produção
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Desenvolvimento e implementação de Programa de Qualificação das
                Vendas
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Solutions3;
