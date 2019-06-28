import React, {Component} from "react";
import "../App.css";
import {Switch, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import Navbar from './Navbar'
import CalendarPage from "./CalendarPage";
import UserProfile from './UserProfile'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        <Route exact path="/home" render={() => <CalendarPage />} />
        <Route exact path="/profile" render={() => <UserProfile />} />

        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
