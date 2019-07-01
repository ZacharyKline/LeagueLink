import React, { Component } from 'react'
import { Navbar } from "../components"


export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>This is the home page</h1>
      </React.Fragment>
    )
  }
}