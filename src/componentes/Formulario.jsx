import React, { useState } from "react";
import CampoTexto from "./CampoTexto";
import ListaSuspensa from "./ListaSuspensa";
import RadioButton from "./RadioButton";

const Formulario = (props) => {
  const secoes = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];

  const marcas = ["HP", "Dell", "Positivo", "Asus", "XingLing"];

  const [secao, setSecao] = useState("");
  const [marca, setMarca] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [uso, setUso] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    props.aoCadastrar({
      secao,
      marca,
      nome,
      preco,
      uso,
    });

    setSecao("");
    setMarca("");
    setNome("");
    setPreco("");
    setUso("");
  };

  return (
    <section>
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto</h2>

        <ListaSuspensa
          label="Seção"
          itens={secoes}
          valor={secao}
          aoAlterado={(valor) => setSecao(valor)}
        />

        <ListaSuspensa
          label="Marca"
          itens={marcas}
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />

        <CampoTexto
          label="Nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          label="Preço"
          valor={preco}
          aoAlterado={(valor) => setPreco(valor)}
        />

        <RadioButton valor={uso} aoAlterado={(valor) => setUso(valor)} />

        <button>Inserir Produto</button>
      </form>
    </section>
  );
};

export default Formulario;
