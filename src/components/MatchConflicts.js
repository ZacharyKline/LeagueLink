import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar, Select, Form, Checkbox } from "antd";
import { Navbar, TimeBlock, RegisterHeader } from ".";
import {} from "../actions";
import moment from "moment";
import "../userConflicts.css";
import monthDefaultOkay from "../monthDefaultOkay.json";
import fakeBackendMonth from "../fakeBackendMonth.json";
import teamsConflicts from "../fakeTeamsConflicts.json";
import coaches from "../fakeCoaches.json";
import teams from "../fakeTeams.json";
const { Option } = Select;

class MatchConflicts extends Component {
  state = {
    selectedDate: null,
    selectedDay: null,
    isodate: "",
    year: 2020,
    firstMonth: 3,
    lastMonth: 6,
    firstDay: 1,
    lastDay: 30,
    ageCategory: "",
    matchBlocks: [],
    coachHours: [],
    parentHours: [],
    ageGroup: "",
    teamIds: [],
    counter: 0
  };

  handleChange = value => {
    this.setState({ ageGroup: value });
  };

  handleSelectTeams = e => {
    let newArr;
    let teamId = e.target.value;
    if (!this.state.teamIds.includes(teamId)) {
      newArr = [...this.state.teamIds, teamId];
      console.log(newArr);
      this.setState({ teamIds: newArr });
    } else {
      newArr = this.state.teamIds.filter(id => id !== teamId);
      this.setState({ teamIds: newArr });
    }
  };

  handleSelect = value => {
    if (this.state.teamIds.length === 2) {
      let team1 = this.state.teamIds[0];
      let team2 = this.state.teamIds[1];
      let selectedDate = value._d;
      let selectedDay = value.get("date");
      let isodate = value.toISOString();
      this.setState({
        value,
        selectedDate: selectedDate,
        selectedDay: selectedDay,
        isodate: isodate
      });
      let team1Blocks = this.handleTeamConflicts(team1, selectedDay);
      console.log(team1Blocks);
      let team2Blocks = this.handleTeamConflicts(team2, selectedDay);
      console.log(team2Blocks);
      let combinedBlocks = this.handleCombine(team1Blocks, team2Blocks);
      // console.log(combinedBlocks);
      this.setState({ matchBlocks: combinedBlocks });
    } else {
      alert("Select two Teams");
    }
  };

  handleCombine = (blocks1, blocks2) => {
    let arr = [];
    for (let i = 0; i < blocks1.length; i++) {
      if (blocks1[i] === "impossible" || blocks2[i] === "impossible") {
        arr.push("impossible");
      } else if (blocks1[i] === "conflict" || blocks2[i] === "conflict") {
        arr.push("conflict");
      } else {
        arr.push("okay");
      }
    }
    return arr;
  };

  handleTeamConflicts = (teamId, selectedDay) => {
    let arr = [];
    let conflicts = teamsConflicts.find(team => team.teamId === teamId);
    let dayConflicts = conflicts.data[selectedDay];
    if (dayConflicts === undefined) {
      return ["okay", "okay", "okay", "okay", "okay", "okay", "okay"];
    } else {
      for (let i = 1; i < 8; i++) {
        if (dayConflicts[i] === undefined) {
          arr.push("okay");
        } else {
          arr.push(dayConflicts[i]);
        }
      }
      return arr;
    }
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                //justifyContent: "center"
                allignItems: "center"
              }}
            >
              <div
                className="instructionsDiv"
                style={{
                  background: " rgb(235, 236, 238)",
                  margin: "5px",
                  marginLeft: "10px"
                }}
              >
                <Select
                  defaultValue="Select an Age Category"
                  style={{ width: 300 }}
                  onChange={this.handleChange}
                >
                  <Option value="Select an Age Category">
                    Select An Age Category
                  </Option>
                  <Option value="5">5 year olds</Option>
                  <Option value="6">6 year olds</Option>
                  <Option value="7">7 year olds</Option>
                  <Option value="8">8 year olds</Option>
                  <Option value="9">9 year olds</Option>
                  <Option value="10">10 year olds</Option>
                  <Option value="11">11 year olds</Option>
                  <Option value="12">12 year olds</Option>
                  <Option value="13">13 year olds</Option>
                  <Option value="14">14 year olds</Option>
                  <Option value="15">15 year olds</Option>
                  <Option value="16">16 year olds</Option>
                  <Option value="17">17 year olds</Option>
                  <Option value="Adult">Adult </Option>
                </Select>
                {this.state.ageGroup !== "" && (
                  <Form style={{ margin: "5px", padding: "10px" }}>
                    <h2>Select two teams</h2>
                    {teams
                      .filter(team => team.ageGroup === this.state.ageGroup)
                      .map((team, i) => {
                        let currentCoach = coaches.find(
                          coach => coach.id === team.coachId
                        );
                        let teamId = team.id;
                        console.log(team.teamName);
                        return (
                          <div
                            key={i}
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <Checkbox
                              value={team.id}
                              onChange={this.handleSelectTeams}
                              style={{ margin: "5px" }}
                              disabled={
                                this.state.teamIds.length === 2 &&
                                !this.state.teamIds.includes(teamId)
                              }
                            />

                            <p>
                              <b>{team.teamName}</b>
                              <br />
                              <span>Coach: {currentCoach.fullName}</span>
                              <br />
                              <span>Email: {currentCoach.email}</span>
                              <br />
                              <span>Phone: {currentCoach.phone}</span>
                            </p>
                          </div>
                        );
                      })}
                  </Form>
                )}
              </div>
            </div>
            <div>blah</div>
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
