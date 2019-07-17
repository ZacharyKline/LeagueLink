import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import {
  InvalidUrlPage,
  CalendarPage,
  LoginPage,
  // ProfilePage,
  RegistrationPage,
  EditProfile,
  //Conflicts,
  UserConflicts,
  TeamConflicts,
  MatchConflicts,
  // CoachProfile,
  ProfileContainer
} from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route path="/home" render={() => <CalendarPage />} />
          <Route path="/profile" render={() => <ProfileContainer />} />
          <Route path="/registration" render={() => <RegistrationPage />} />
          <Route path="/editprofile" render={() => <EditProfile />} />
          <Route path="/conflicts" render={() => <UserConflicts />} />
          <Route path="/teamconflicts" render={() => <TeamConflicts />} />
          <Route path="/matchconflicts" render={() => <MatchConflicts />} />
          {/* <Route path='/coachprofile' render={() => <CoachProfile />} /> */}
          <Route render={() => <InvalidUrlPage />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
