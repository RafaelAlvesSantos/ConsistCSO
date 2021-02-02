import React from "react";
import Fade from "react-reveal/Fade";

const Alert = () => {
  return (
    <div className="alert">
      <Fade>
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
        ></span>
        Mensagem Enviada!
      </Fade>
    </div>
  );
};

export default Alert;
