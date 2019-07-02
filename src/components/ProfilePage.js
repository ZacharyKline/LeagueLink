import React, { Component } from 'react'
import { Navbar } from "."


export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>This is the profile page</h1>
      </React.Fragment>
    )
  }
}