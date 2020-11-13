import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Vinted</h1>
        <div>
          <input type="text" placeholder=" 🔎 Recherche article"></input>
          <button>
            <Link to="/signup">S'inscrire</Link>
          </button>
          <button>
            <Link to="/login">Se Connecter</Link>
          </button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </>
  );
};
export default Header;
