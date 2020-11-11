import React from "react";
import "./App.css";

//import du package react-rounter-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import composantts Header
import Header from "./components/Header";

//import de home
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
