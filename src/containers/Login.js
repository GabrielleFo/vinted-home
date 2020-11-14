import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();
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
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container-form">
        <div className="form">
          <p>Se connecter</p>
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
        </div>
      </div>
    </>
  );
};
export default Login;
