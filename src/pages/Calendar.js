import React, { Component } from 'react'
import { Navbar, CalendarView } from "../components"

export default class Calendar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <CalendarView />
      </React.Fragment>
    )
  }
}