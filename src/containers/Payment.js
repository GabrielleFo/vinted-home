import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;
  return (
    <>
      <div>Résumé de la commande</div>
      <p>Nom du produit : {title}</p>
      <p>Prix du produit : {price}</p>
    </>
  );
};

export default Payment;
