import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import { Navbar } from ".";
import RegisterForm from "./RegisterForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route exact path="/registration" render={() => <RegisterForm />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
