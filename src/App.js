import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { LoginPage } from './components'

import './App.css';

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
