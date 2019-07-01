import React, { Component } from 'react'
import { Navbar, Login } from "."


export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Login />
      </React.Fragment>
    )
  }
}