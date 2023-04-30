import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
