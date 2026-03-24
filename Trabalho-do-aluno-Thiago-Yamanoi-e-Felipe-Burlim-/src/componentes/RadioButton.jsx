import React from "react";
import "./RadioButton.css";

const RadioButton = (props) => {

  const aoEscolhido = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="RadioButton">
      <label>
        <input
          type="radio"
          name="uso"
          value="NOVO"
          checked={props.valor === 'NOVO'}
          onChange={aoEscolhido}
        />
        Novo
      </label>

      <label>
        <input
          type="radio"
          name="uso"
          value="USADO"
          checked={props.valor === 'USADO'}
          onChange={aoEscolhido}
        />
        Usado
      </label>
    </div>
  );
};

export default RadioButton;