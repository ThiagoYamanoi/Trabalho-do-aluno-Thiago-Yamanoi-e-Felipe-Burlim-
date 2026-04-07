import React from "react";
import "./CardProduto.css";

const CardProduto = ({ produto }) => {

  const imagens = {
    HP: "https://t.ctcdn.com.br/7PCybMs-pzYkTDEI7s95fe5Gl80=/i607937.png",
    Dell: "https://quenotebookcomprar.com.br/wp-content/uploads/2021/01/logo_Dell.png",
    Positivo: "https://cdn.bandnewsfmcuritiba.com/band/wp-content/uploads/2019/05/positivo-2.jpg",
    Asus: "https://t2.tudocdn.net/293446?w=824&h=494",
    XingLing: ""
  };

  return (
    <div className="card">
      <img src={imagens[produto.marca]} alt={produto.marca} />

      <h3>{produto.marca}</h3>
      <p>{produto.nome}</p>
      <p>R$ {produto.preco}</p>
      <p>{produto.uso}</p>
    </div>
  );
};

export default CardProduto;