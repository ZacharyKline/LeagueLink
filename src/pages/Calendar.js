import React, { Component } from 'react'
import { Navbar } from "../components"

export default class Calendar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>This is the Calendar page</h1>
      </React.Fragment>
    )
  }
}