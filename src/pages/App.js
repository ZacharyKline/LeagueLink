import React, { Component } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom"
import { Err, Calendar, Home, Login } from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="/profile" render={() => <Home />} />
            <Route path="/registration" render={() => <Calendar />} />
            <Route render={() => <Err />} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
