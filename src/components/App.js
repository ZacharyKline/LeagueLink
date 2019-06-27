import React, {Component} from "react";
import "../App.css";
import {Switch, Route} from 'react-router-dom'
import LoginPage from './LoginPage'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
