import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Person = () => {
  return (
    <div className="about">
      <Fade bottom>
        <h1 className="h1Blue bossMargin">Marcos Corrêa</h1>
        <div className="primeiraCaixa">
          <div className="imgBox1">
            <img
              className="img1 imgBoss"
              alt=""
              src="https://i.imgur.com/IlVy0zT.jpg"
            />
          </div>
          <div className="text1">
            <ul className="descP">
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Profissional de Organização, Sistemas e Métodos (OS&M)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Análise e Gerenciamento de Processos de Negócios (BPM) e
                Gerenciamento de Projetos (PM)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Pós-Graduado em Análise de Sistemas e em Engenharia de Produção.
                Certificado Project Management Professional (PMP) pelo PMI –
                Project Management Institute
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Oficial de Intendência da Reserva do Exército Brasileiro
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Ex Professor na UNAMA - Universidade da Amazônia
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                UFPA - Universidade Federal do Pará e ESAMAZ - Escola Superior
                da Amazônia
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Sócio-Diretor da CONSIST.CSO - Consultoria em Sistemas
                Organizacionais
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Gerente Geral da TRANSPAM - Transportadora Amazônia Diesel
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Membro do PMI, do Chapter Amazônia do PMI e da CGP/PA –
                Comunidade de Gerenciamento de Projetos do Pará
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Diretor de Projetos na ASPLAM - Associação de Profissionais de
                Logística da Amazônia
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />
                Conselheiro de projetos no COINFRA/FIEPA – Conselho Temático de
                Infraestrutura da Federação das Indústrias do Estado do Pará
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="tick" />A experiência
                profissional inclui posições de liderança e consultoria na
                gestão administrativa, financeira, comercial e operacional em
                empresas no segmento hospitalar, comércio varejista, automotivo,
                logística, gestão de frotas, distribuição de combustíveis,
                serviços e em organizações públicas municipais, estaduais e
                federal.
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Person;
