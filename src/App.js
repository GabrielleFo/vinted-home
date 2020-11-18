import React, { useState } from "react";
import "./App.css";

//import des packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cookie from "js-cookie";

//import composants Header
import Header from "./components/Header";

//import des containers
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

function App() {
  //tout ce qui concerne l'authentification se passe dans app.js
  const [token, setToken] = useState(Cookie.get("userToken") || null);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      //créer un cookie
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      //suprimer le cookie
      Cookie.remove("userToken");
      //repasser le state token à null
      setToken(null);
    }
  };
  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/publish">
          {!token ? <Redirect to="/login" /> : <Publish token={token} />}
        </Route>
        <Route path="/payment">
          {token ? <Payment token={token} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
