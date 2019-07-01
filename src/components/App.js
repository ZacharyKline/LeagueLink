import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom"
import { InvalidUrlPage, CalendarPage, Landing, Profile, RegistrationPage } from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route path="/home" render={() => <CalendarPage />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/registration" render={() => <RegistrationPage />} />
            <Route render={() => <InvalidUrlPage />} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
