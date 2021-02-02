import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const Solutions4 = () => {
  return (
    <div className="solutionsText">
      <Fade bottom>
        <div className="primeiraCaixa">
          <div className="imgBox1">
            <img
              className="img1"
              alt=""
              src="https://image.shutterstock.com/z/stock-photo-hand-put-coin-into-pile-of-stacked-coins-concept-plan-for-success-business-and-finance-conceptual-655537423.jpg"
            ></img>
          </div>
          <div className="text1">
            <h3 className="h3Title">Reduzir Custos e Despesas</h3>
            <ul className="descP">
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise da estrutura de produção
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise da estrutura administrativa
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise de processos de produção
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise de processos administrativos
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise de processos de compra (produtos e serviços)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise de contratos de fornecedores
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise de custos de manutenção
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Análise de otimização de recursos
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="tick" />
                Elaboração e implementação de Plano de Redução de Custos e
                Despesas
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Solutions4;
