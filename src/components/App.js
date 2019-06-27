import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import { Navbar } from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
