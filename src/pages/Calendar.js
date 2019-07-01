import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTeamSchedule } from "../actions"
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
export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { getTeamSchedule })(Login);
