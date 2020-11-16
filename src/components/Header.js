import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ token, setUser }) => {
  return (
    <>
      <div className="header">
        <h1>Vinted</h1>
        {token ? (
          <button
            className="button-header"
            onClick={() => {
              setUser(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div className="header-button">
            <input type="text" placeholder=" 🔎 Recherche article"></input>
            <button>
              <Link to="/signup">S'inscrire</Link>
            </button>
            <button>
              <Link to="/login">Se Connecter</Link>
            </button>
            <button>
              <Link to="/publish">Vends tes articles</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
