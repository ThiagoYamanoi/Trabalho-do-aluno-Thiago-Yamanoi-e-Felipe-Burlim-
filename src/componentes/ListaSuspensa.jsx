import React from "react";

const ListaSuspensa = (props) => {

  const aoSelecionar = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div>
      <label>{props.label}</label>

      <select value={props.valor} onChange={aoSelecionar} required>
        <option value="">Selecione...</option>

        {props.itens.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;