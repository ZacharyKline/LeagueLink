import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar, Select, Form, Checkbox } from "antd";
import { Navbar, TimeBlock } from ".";
import {} from "../actions";
import moment from "moment";
import "./css/userConflicts.css";
import teamsConflicts from "../SampleJson/fakeTeamsConflicts.json";
import coaches from "../SampleJson/fakeCoaches.json";
import teams from "../SampleJson/fakeTeams.json";
const { Option } = Select;
const hours = [
  "8AM - 10AM",
  "10AM - 12PM",
  "12PM - 2PM",
  "2PM - 4PM",
  "4PM - 6PM",
  "6PM - 8PM",
  "8PM - 10PM"
];
const okays = ["okay", "okay", "okay", "okay", "okay", "okay", "okay"];

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
    matchBlocks: [],
    ageGroup: "",
    teamIds: []
  };

  handleChange = value => {
    this.setState({ ageGroup: value });
  };

  handleAllowSelect = e => {
    if (this.state.teamIds.length > 0) {
      alert("Please uncheck boxes before switching age categories!");
    }
  };

  handleSelectTeams = e => {
    let newArr;
    let teamId = e.target.value;
    if (!this.state.teamIds.includes(teamId)) {
      newArr = [...this.state.teamIds, teamId];
      this.setState({ teamIds: newArr });
    } else {
      newArr = this.state.teamIds.filter(id => id !== teamId);
      this.setState({ teamIds: newArr, selectedDate: null });
    }
  };

  handleSelect = value => {
    if (this.state.teamIds.length === 2) {
      let team1 = this.state.teamIds[0];
      let team2 = this.state.teamIds[1];
      let selectedDate = value._d;
      let selectedDay = value.get("date");
      let isodate = value.toISOString();
      let team1Blocks = this.handleBlocks(team1, selectedDay);
      let team2Blocks = this.handleBlocks(team2, selectedDay);
      let combinedBlocks = this.handleCombine(team1Blocks, team2Blocks);
      this.setState({
        value,
        selectedDate: selectedDate,
        selectedDay: selectedDay,
        isodate: isodate,
        matchBlocks: combinedBlocks
      });
    } else {
      alert("Select two Teams");
    }
  };

  handleBlocks = (teamId, selectedDay) => {
    let conflicts = teamsConflicts.find(team => team.teamId === teamId);
    let dayConflicts = conflicts.data[selectedDay];
    if (dayConflicts === undefined) {
      return okays;
    } else {
      let arr = [];
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

  render() {
    const {
      selectedDate,
      year,
      firstMonth,
      lastMonth,
      firstDay,
      lastDay,
      matchBlocks,
      ageGroup,
      teamIds
    } = this.state;

    const {
      handleAllowSelect,
      handleChange,
      handleSelect,
      handleSelectTeams
    } = this;

    return (
      <React.Fragment>
        <Navbar />
        <div className="matchConflictsContainerDiv">
          <h1 className="header">"Check match conflicts"</h1>
          <div className="flexRow">
            <div style={{ margin: "5px" }}>
              <div className="teamCalendarDivContainer">
                <Calendar
                  onSelect={handleSelect}
                  fullscreen={false}
                  defaultValue={moment()
                    .year(year)
                    .month(firstMonth)
                    .day(firstDay)}
                  validRange={[
                    moment()
                      .year(year)
                      .month(firstMonth - 1)
                      .day(firstDay),
                    moment()
                      .year(year)
                      .month(lastMonth - 1)
                      .day(lastDay)
                  ]}
                />
              </div>
              <br />
              <div className="instructionsDiv">
                <h4>Instructions:</h4>
                <ul>
                  <li>Select an age category.</li>
                  <li>A list of teams will appear.</li>
                  <li>Select two teams from the list.</li>
                  <li>Select a date from the calendar.</li>
                  <li>
                    A column of 2 hour blocks will appear that represent the
                    combined conflicts of both teams.
                  </li>
                  <li>
                    This can be used to quickly find a good time to schedule a
                    game.
                  </li>
                  <li>Green = "good time to schedule a game"</li>
                  <li>
                    Orange = "inconvenient time, but can work if necessary"
                  </li>
                  <li>
                    Dark blue = "impossible time, do not schedule a game!"
                  </li>
                  <li>
                    If you do not see a good time to schedule a match on the
                    selected day, click on other dates until you find a time
                    that works for everyone.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flexColumnCenter">
              <div className="selectTeamContainerDiv">
                <Select
                  defaultValue="Select an Age Category"
                  style={{ width: 300 }}
                  onChange={handleChange}
                  onMouseEnter={handleAllowSelect}
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
                {ageGroup !== "" && (
                  <Form style={{ margin: "5px", padding: "10px" }}>
                    <h2>Select two teams</h2>
                    {teams
                      .filter(team => team.ageGroup === ageGroup)
                      .map((team, i) => {
                        let currentCoach = coaches.find(
                          coach => coach.id === team.coachId
                        );
                        let teamId = team.id;
                        return (
                          <div className="flexRow" key={i}>
                            <Checkbox
                              value={team.id}
                              onChange={handleSelectTeams}
                              style={{ margin: "5px" }}
                              disabled={
                                teamIds.length === 2 &&
                                !teamIds.includes(teamId)
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

            <div className="matchTimeBlockDiv">
              {selectedDate && (
                <React.Fragment>
                  <div className="date">{selectedDate.toDateString()}</div>
                  {matchBlocks.map((block, i) => {
                    let faceIcon =
                      block === "impossible"
                        ? "frown"
                        : block === "conflict"
                        ? "meh"
                        : "smile";
                    return (
                      <TimeBlock
                        key={i}
                        className={`block ${block}`}
                        status={block}
                        hours={hours[i]}
                        type={faceIcon}
                      />
                    );
                  })}
                </React.Fragment>
              )}
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
