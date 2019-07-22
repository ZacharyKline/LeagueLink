import React, { Component } from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { Calendar, message } from "antd";
import { Navbar, TimeBlock, RegisterHeader } from ".";
import {
  getTimeBlocksByUserId,
  updateTimeBlock,
  getTimeBlocksOfUserByDate,
  getAllTimeBlocksOfUserByDate
} from "../actions";
import moment from "moment";
import "./css/userConflicts.css";
import month from "../SampleJson/fakeBackendMonth.json";
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

class UserConflicts extends Component {
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
    timeBlocks: okays
  };

  componentDidMount = () => {};

  handleSelect = value => {
    let selectedDate = value._d;
    let selectedDay = value.get("date");
    let isodate = value.toISOString();
    this.setState({
      value,
      selectedDate: selectedDate,
      selectedDay: selectedDay,
      isodate: isodate
    });
    return this.handleBlocks(selectedDay);
  };

  handleBlocks = selectedDay => {
    let currentDay = month[selectedDay];
    if (month[selectedDay] === undefined) {
      this.setState({
        timeBlocks: okays
      });
    } else {
      let arr = [];
      for (let i = 1; i < 8; i++) {
        if (currentDay[i] === undefined) {
          arr.push("okay");
        } else {
          arr.push(currentDay[i]);
        }
      }
      this.setState({ timeBlocks: arr });
    }
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
      timeBlocks
    } = this.state;

    const { handleClick, handleSave, handleSelect } = this;

    return (
      <React.Fragment>
        <Navbar />
        <div className="userConflictsContainerDiv">
          <RegisterHeader text={"Mark Times that Conflict"} />
          <div className="userConflictsContainerDiv2">
            <div className="userConflictsContainerDiv3">
              <div className="userConflictCalendarDiv">
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
                  <li>Select a date from the calendar.</li>
                  <li>
                    A column of blocks will appear. Each block represents 2
                    hours.
                  </li>
                  <li>If a time works, leave it green.</li>
                  <li>
                    If a time is inconvenient, click on it once and it will turn
                    orange.
                  </li>
                  <li>
                    If a time is impossible, click it twice and it will turn
                    dark blue
                  </li>
                  <li>
                    If you made a mistake, just keep clicking until the block is
                    the correct color
                  </li>
                  <li>
                    When you are satisfied with the conflicts for a particluar
                    date, click the "save changes" button before selecting a new
                    date.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeBlockDiv">
              {selectedDate && (
                <React.Fragment>
                  <div className="date">{selectedDate.toDateString()}</div>
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
                        className={`block ${block}`}
                        status={block}
                        hours={hours[i]}
                        type={faceIcon}
                        onClick={handleClick(i)}
                      />
                    );
                  })}
                  <button className="buttonStyle" onClick={handleSave}>
                    Save Changes
                  </button>
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
)(UserConflicts);
