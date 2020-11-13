import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    //pour éviter le rafraichissement de la page
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div>Se connecter</div>
      <br></br>
      {/*Formulaire avec une requête vers la route login de notre API */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Se connecter</button>
      </form>
    </>
  );
};
export default Login;
