import React, { Component } from 'react'
import { Navbar, LoginForm } from "../components"


export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LoginForm />
      </React.Fragment>
    )
  }
}