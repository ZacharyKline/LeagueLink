import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { Calendar, message } from "antd";
import { Navbar, TimeBlock, RegisterHeader, Cell, Row } from ".";

import {
  getTimeBlocksByUserId,
  updateTimeBlock,
  getTimeBlocksOfUserByDate,
  getAllTimeBlocksOfUserByDate
} from "../actions";

import moment from "moment";
import "../userConflicts.css";

import athletesConflicts from "../fakeAtheletesConflicts.json";
import teamConflicts from "../fakeTeamconflicts.json";
import coachConflicts from "../fakeCoachConflicts.json";
import parents from "../fakeParents.json";

const hours = [
  "8AM-10AM",
  "10AM-12PM",
  "12PM-2PM",
  "2PM-4PM",
  "4PM-6PM",
  "6PM-8PM",
  "8PM-10PM"
];

const okays = ["okay", "okay", "okay", "okay", "okay", "okay", "okay"];

class TeamConflicts extends Component {
  state = {
    year: 2020,
    firstMonth: 3,
    lastMonth: 6,
    firstDay: 1,
    lastDay: 30,
    timeBlocks: okays,
  };

  handleSelect = value => {
    let isodate = value.toISOString().split("T")[0];
    console.log(isodate)
    let timeBlocks = this.handleBlocks(isodate, teamConflicts);
    let coachHours = this.handleBlocks(isodate, coachConflicts);
    this.setState({
      value,
      selectedDate: isodate,
      selectedDay: isodate,
      isodate: isodate,
      timeBlocks: timeBlocks,
      coachHours: coachHours
    });
    this.handleParentHours(isodate);
  };

  handleBlocks = (selectedDay, conflictsObj) => {

    let currentDay = conflictsObj[selectedDay];
    if (currentDay === undefined) {
      return okays;
    } else {
      let arr = [];
      for (let i = 1; i < 8; i++) {
        if (currentDay[i] === undefined) {
          arr.push("okay");
        } else {
          arr.push(currentDay[i]);
        }
      }
      return arr;
    }
  };

  handleParentHours = selectedDay => {
    let containerArr = [];
    let parentIds = [];
    for (let i = 0; i < athletesConflicts.length; i++) {
      let athlete = athletesConflicts[i];
      let parentId = athlete.userId;
      parentIds.push(parentId);
      let arr = this.handleBlocks(selectedDay, athlete.data);
      containerArr.push(arr);
    }

    this.setState({ parentHours: containerArr, parentIds: parentIds });
  };

  handleClick = i => e => {
    let arr = this.state.timeBlocks.slice();
    if (this.state.timeBlocks[i] === "okay") {
      arr.splice(i, 1, "conflict");
      this.setState({ timeBlocks: arr });
    } else if (this.state.timeBlocks[i] === "conflict") {
      arr.splice(i, 1, "impossible");
      this.setState({ timeBlocks: arr });
    } else if (this.state.timeBlocks[i] === "impossible") {
      arr.splice(i, 1, "okay");
      this.setState({ timeBlocks: arr });
    }
  };

  handleSave = () => {
    let userId = this.props.myLogin.id;
    const dataObj = {
      date: this.state.isodate.slice(0, 10),
      userId: userId
    };
    const data = {};
    for (let i = 0; i < 7; i++) {
      let num = i + 1;
      if (this.state.timeBlocks[i] !== "okay") {
        data[num] = this.state.timeBlocks[i];
      }
    }
    dataObj[data] = data;
    console.log("arr", dataObj);
    this.props.updateTimeBlock(userId, dataObj);
    message.info("You have updated the time blocks");
    return dataObj;
  };

  render() {
    const {
      selectedDate,
      year,
      firstMonth,
      lastMonth,
      firstDay,
      lastDay,
      timeBlocks,
      coachHours,
      parentHours,
      parentIds
    } = this.state;

    const { handleClick, handleSave, handleSelect } = this;

    return (
      <React.Fragment>
        <Navbar />
        <div className="teamConflictsContainerDiv">
          <RegisterHeader text={"Mark Confict Times for Team"} />
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
                  <li>Select a date from calendar.</li>
                  <li>
                    A row of blocks will appear at the top. Each block
                    represents 2 hours.
                  </li>
                  <li>
                    Your conflicts and the conflicts of your athletes are
                    displayed beneath your team's row of blocks
                  </li>
                  <li>
                    Use this informtion as a guide to decide if your team is
                    availble to be scheduled for a game during each block of
                    time.
                  </li>
                  <li>Green = "okay to schedule game"</li>
                  <li>
                    Orange = "inconvenient, but can schedule if necessary",
                  </li>
                  <li>Dark blue = "impossible, do not schedule"</li>
                  <li>Remember to save before moving on to the next date.</li>
                </ul>
              </div>
            </div>

            <div className="teamTimeBlockDiv">
              {selectedDate && (
                <React.Fragment>
                  <div className="teamTimeBlockDiv2">
                    <div className="flexRow100">
                      <div className="teamTimeBlockDiv3">
                        <div className="teamDate">
                          {selectedDate.toDateString()}
                        </div>
                        <button className="buttonStyle" onClick={handleSave}>
                          Save Changes
                        </button>
                      </div>
                      <div className="flexRow85">
                        {timeBlocks.map((block, i) => {
                          let faceIcon =
                            block === "impossible"
                              ? "frown"
                              : block === "conflict"
                              ? "meh"
                              : "smile";
                          return (
                            <TimeBlock
                              key={i}
                              className={`teamBlock ${block}`}
                              status={block}
                              hours={hours[i]}
                              type={faceIcon}
                              onClick={handleClick(i)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="flexRow100">
                    <div className="coachTimeBlockDiv">
                      <div className="myConflictsDiv">My Conflicts</div>
                      <div className="flexRow85">
                        {coachHours.map((block, i) => {
                          return <Cell className={`${block} cell`} key={i} />;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="parentTimeBlockDiv">
                    {parentHours.map((day, i) => {
                      let currentParentId = parentIds[i];
                      let currentParent = parents.find(
                        parent => parent.id === currentParentId
                      );
                      let parentName = currentParent.fullName;
                      return (
                        <Row
                          days={day}
                          parent={parentName}
                          key={i}
                        />
                      );
                    })}
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        {this.props.isLoading && <Spinner name="circle" color="blue" />}
        {this.props.err && <p style={{ color: "red" }}>{this.props.err}</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth, timeblocks }) => {
  return {
    myLogin: auth.login,
    err: timeblocks.updateTimeBlocksError,
    isLoading: timeblocks.updateTimeBlocksLoading
  };
};

const mapDispatchToProps = {
  getTimeBlocksByUserId,
  updateTimeBlock,
  getTimeBlocksOfUserByDate,
  getAllTimeBlocksOfUserByDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamConflicts);
