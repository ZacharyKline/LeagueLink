import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile } from ".";
import { Navbar } from ".";
import RegisterForm from "./RegisterForm";
import CalendarPage from './CalendarPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route path="/home" render={() => <CalendarPage />} />
          <Route path="/registration" render={() => <RegisterForm />} />
          <Route path="/profile" render={() => <UserProfile />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
