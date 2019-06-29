import React, { Component } from "react";
import "../App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { Err, Calendar, Home, Login } from ".";
import { Navbar } from "../components";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/registration" render={() => <Calendar />} />
            <Route path="/home" render={() => <Home />} />
            <Route render={() => <Err />} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
