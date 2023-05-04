import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/footer";
import Register from "./pages/login/Register";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={Account} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
