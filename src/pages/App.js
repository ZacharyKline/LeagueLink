import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom"
import { Err, Calendar, Landing, Profile, Registration } from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route path="/home" render={() => <Calendar />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/registration" render={() => <Registration />} />
            <Route render={() => <Err />} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
