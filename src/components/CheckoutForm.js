import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ title, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //stripe récupere les données du formulaire
    const cardElement = elements.getElement(CardElement);
    //envoi des données à l'api stripe (requete)
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "428492FJEDLZ90",
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    //requete à mon serveur
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        title: title,

        amount: price,
      }
    );
    console.log(response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return (
    <div className="container-checkOutForm">
      {completed ? (
        <p>Votre paiement à été bien effectué !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" className="CheckOutForm">
            Payer
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
