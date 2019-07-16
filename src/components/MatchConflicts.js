import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar } from "antd";
import { Navbar, TimeBlock, RegisterHeader } from ".";
import {} from "../actions";
import moment from "moment";
import "../userConflicts.css";
import monthDefaultOkay from "../monthDefaultOkay.json";
import fakeBackendMonth from "../fakeBackendMonth.json";
import teamsConflicts from "../fakeTeamsConflicts.json";
import coaches from "../fakeCoaches.json";
import teams from "../fakeTeams.json";

class MatchConflicts extends Component {
  state = {
    value: null,
    selectedDate: null,
    selectedDay: null,
    isodate: "",
    year: 2020,
    firstMonth: 3,
    lastMonth: 6,
    firstDay: 1,
    lastDay: 30,
    ageCategory: "",
    matchHours: [],
    coachHours: [],
    parentHours: []
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div
          className="stylesForm"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "95%",
            marginTop: "20px"
          }}
        >
          <RegisterHeader text={"Check match conflicts"} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ margin: "5px" }}>
              <div className="teamCalendarDivContainer">
                <Calendar
                  onSelect={this.handleSelect}
                  fullscreen={false}
                  defaultValue={moment()
                    .year(this.state.year)
                    .month(this.state.firstMonth)
                    .day(this.state.firstDay)}
                  validRange={[
                    moment()
                      .year(this.state.year)
                      .month(this.state.firstMonth - 1)
                      .day(this.state.firstDay),
                    moment()
                      .year(this.state.year)
                      .month(this.state.lastMonth - 1)
                      .day(this.state.lastDay)
                  ]}
                />
              </div>
              <br />
              <div className="instructionsDiv">
                <h4>Instructions:</h4>
                <ul>
                  <li>Select a team age category.</li>
                  <li>A list of teams will appear.</li>
                  <li>Select two teams from the list.</li>
                  <li>Select a date from calendar.</li>
                  <li>
                    A columns of 2 hour blocks will appear that represent the
                    combined conflicts of both teams.
                  </li>
                  <li>
                    This can be used to quickly find a good time to schedule a
                    game.
                  </li>
                  <li>Green = "good time to schedule a game"</li>
                  <li>
                    Orange = "inconvenient, but can make it work if necessary"
                  </li>
                  <li>Dark blue = "impossible, do not schedule a game!"</li>
                  <li>
                    If you do not see a good times to schedule a match on the
                    selected day, click on other dates until you find a time
                    that works for everyone.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchConflicts);
