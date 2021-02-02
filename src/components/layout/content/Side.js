import React from "react";
import Fade from "react-reveal/Fade";

const Side = () => {
  return (
    <div className="primeiraCaixa">
      <Fade>
        <div className="sideLeft">
          <img
            className="imgFit"
            alt=""
            src="https://previews.123rf.com/images/ankudi/ankudi1709/ankudi170900073/85907776-project-management-icon-vector-check-list.jpg"
          />
          <h3>Gerenciamento de Projetos</h3>
          <ul className="sideUl">
            <li className="sideLi">Análise de Viabilidade de Projeto</li>
            <li className="sideLi">Elaboração e aprovação de Projeto</li>
            <li className="sideLi">
              Desenvolvimento e implementação de Projeto
            </li>
          </ul>
        </div>
        <div className="sideRight">
          <img
            className="imgFit"
            alt=""
            src="https://i.vippng.com/png/small/6-68999_png-file-svg-management-team-icon.png"
          />
          <h3>
            Desenvolvimento e Implementação de Escritório de Projetos – PMO
          </h3>
          <ul className="sideUl">
            <li className="sideLi">Análise de Maturidade Organizacional</li>
            <li className="sideLi">
              Definição e desenvolvimento do modelo de PMO
            </li>
            <li className="sideLi">
              Elaboração do Plano de Implantação de PMO
            </li>
            <li className="sideLi">Execução do Plano de Implantação de PMO</li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Side;
