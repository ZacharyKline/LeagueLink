import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom"
import { InvalidUrlPage, CalendarPage, LoginPage, ProfilePage, RegistrationPage } from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Switch>
            <Route exact path="/" render={() => <LoginPage />} />
            <Route path="/home" render={() => <CalendarPage />} />
            <Route path="/profile" render={() =>  <ProfilePage />} />
            <Route path="/registration" render={() => <RegistrationPage />} />
            <Route render={() => <InvalidUrlPage />} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
