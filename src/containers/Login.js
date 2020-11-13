import React from "react";

const Login = () => {
  return (
    <>
      <div>Se connecter</div>
      <br></br>
      <form>
        <input type="email" placeholder="Votre email"></input>
        <br></br>
        <input type="password" placeholder="Votre mot de passe"></input>
        <br></br>
        <br></br>
        <button>Se connecter</button>
      </form>
    </>
  );
};
export default Login;
