import React, { useState } from "react";
import Formulario from "./componentes/Formulario";
import CardProduto from "./componentes/CardProduto";

function App() {
  const [produtos, setProdutos] = useState([]);

  const novoProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <div>
      <Formulario aoCadastrar={novoProduto} />

      <div className="lista">
        {produtos.map((prod, index) => (
          <CardProduto key={index} produto={prod} />
        ))}
      </div>
    </div>
  );
}

export default App;
