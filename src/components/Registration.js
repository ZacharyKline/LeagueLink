import React, { Component } from 'react'
import { Navbar, Register } from "."


export default class Registration extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Register />
      </React.Fragment>
    )
  }
}