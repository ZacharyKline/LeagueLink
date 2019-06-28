import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
//import LoginForm from "./LoginForm";
import { LoginForm, UserProfile, RegisterForm, Settings} from ".";
import { Navbar } from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route path="/home" render={() => <homepage />} />
          <Route path="/registration" render={() => <RegisterForm />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
