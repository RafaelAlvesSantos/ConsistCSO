import React, { useState } from "react";
import emailjs from "emailjs-com";
import Alert from "../../Alert";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contactform = () => {
  const [showAlert, setShowAlert] = useState({ show: false });

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        setShowAlert({ show: true });
        setTimeout(() => setShowAlert({ show: false }), 3000);
      })
      .catch((err) => {
        alert("Houve um erro, tente novamente", err.text);
      });
  };

  return (
    <div>
      <Fade>
        <div className="containerWide">
          <div className="titleContainer">
            <div className="titleContact">
              <h1 className="h1Blue">Entre em Contato</h1>
            </div>
          </div>
          <div className="iconHolder">
            <div className="contactBox">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="tick iconContact"
              />
              <p className="iconText">
                Rua Brito Pais nº 150 R/C 2775-172 Parede Cascais Lisboa
                Portugal
              </p>
            </div>
            <div className="contactBox">
              <FontAwesomeIcon icon={faPhone} className="tick iconContact" />
              <p className="iconText">+351 214 574 197</p>
              <p className="iconText">+351 965 372 955</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="tick iconContact" />
              <p className="iconText">consist.cso@gmail.com</p>
            </div>
          </div>
          <div className="formContainer">
            <form className="form" id="form1" onSubmit={onSubmit}>
              <h2 className="h2form">Formulário de Contato</h2>
              <div className="form-group">
                <label>Nome</label>
                <input name="name" type="text" className="formInput" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="text" className="formInput" />
              </div>
              <div className="form-group">
                <label>Assunto</label>
                <input name="subject" type="text" className="formInput" />
              </div>
              <div className="form-group">
                <label>Mensagem</label>
                <textarea
                  name="message"
                  rows="7"
                  cols="30"
                  className="formInputTextArea"
                  placeholder="Escreva aqui suas perguntas"
                ></textarea>
              </div>
              {showAlert.show ? <Alert /> : <div></div>}
              <button className="buttonForm" type="submit" form="form1">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contactform;
