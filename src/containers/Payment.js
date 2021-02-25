import React from "react";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//import components
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;
  return (
    <div className="payment">
      <h3>Résumé de la commande</h3>
      <p>Nom du produit : {title}</p>
      <p>Prix du produit : {price}€</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm title={title} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
