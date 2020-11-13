import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    //empecher le rafraichissement
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username: username, email: email, password: password }
      );
      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        //revenir vers la page d'accueil
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
      <div>
        S'inscrire
        <br></br>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
          <br></br>
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
          <input type="submit" value="S'inscrire" />
        </form>
      </div>
    </>
  );
};
export default Signup;
