import React from "react";
import "./App.css";

//import du package react-rounter-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import composantts Header
import Header from "./components/Header";

//import des containers
import Home from "./containers/Home";
import Offer from "./containers/Offer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/product">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
