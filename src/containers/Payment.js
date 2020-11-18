import React from "react";

const Payment = ({ title, price }) => {
  return (
    <>
      <div>Résumé de la commande</div>
      <p>Nom du produit : {title}</p>
      <p>Prix du produit : {price}</p>
    </>
  );
};

export default Payment;
