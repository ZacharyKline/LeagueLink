import React, { Component } from 'react'
import { Navbar, LoginForm } from "."


export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LoginForm />
      </React.Fragment>
    )
  }
}