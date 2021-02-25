import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;
  return (
    <div className="payment">
      <h3>Résumé de la commande</h3>
      <p>Nom du produit : {title}</p>
      <p>Prix du produit : {price}€</p>
    </div>
  );
};

export default Payment;
