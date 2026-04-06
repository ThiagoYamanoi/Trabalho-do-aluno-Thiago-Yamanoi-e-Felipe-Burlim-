import React from "react";

const CampoTexto = (props) => {

  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div>
      <label>{props.label}</label>
      <input 
        type="text" 
        value={props.valor}
        onChange={aoDigitar}
      />
    </div>
  );
};

export default CampoTexto;