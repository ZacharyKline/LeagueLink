import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import {
  InvalidUrlPage,
  CalendarPage,
  LoginPage,
  ProfilePage,
  RegistrationPage,
  EditProfile
} from ".";
import UserConflicts from "./UserConflicts";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route path="/home" render={() => <CalendarPage />} />
          <Route path="/conflicts" render={() => <UserConflicts />} />
          <Route path="/profile" render={() => <ProfilePage />} />
          <Route path="/registration" render={() => <RegistrationPage />} />
          <Route path="/editprofile" render={() => <EditProfile />} />
          <Route render={() => <InvalidUrlPage />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
