import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar } from "antd";
import { Navbar, TimeBlock, RegisterHeader } from ".";
import {
  getTimeBlocksByUserId,
  updateTimeBlock,
  getTimeBlocksOfUserByDate,
  getAllTimeBlocksOfUserByDate
} from "../actions";
import moment from "moment";
import "../userConflicts.css";
import monthDefaultOkay from "../monthDefaultOkay.json";
import fakeBackendMonth from "../fakeBackendMonth.json";

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
    timeBlock1: "",
    timeBlock2: "",
    timeBlock3: "",
    timeBlock4: "",
    timeBlock5: "",
    timeBlock6: "",
    timeBlock7: ""
  };

  componentDidMount = () => {};

  handleSave = () => {
    let userId = this.props.myLogin.id;
    const dataObj = {
      date: this.state.isodate.slice(0, 10),
      userId: userId
    };
    const data = {};
    if (this.state.timeBlock1 !== "okay") {
      data[1] = this.state.timeBlock1;
    }
    if (this.state.timeBlock2 !== "okay") {
      data[2] = this.state.timeBlock2;
    }
    if (this.state.timeBlock3 !== "okay") {
      data[3] = this.state.timeBlock3;
    }
    if (this.state.timeBlock4 !== "okay") {
      data[4] = this.state.timeBlock4;
    }
    if (this.state.timeBlock5 !== "okay") {
      data[5] = this.state.timeBlock5;
    }
    if (this.state.timeBlock6 !== "okay") {
      data[6] = this.state.timeBlock6;
    }
    if (this.state.timeBlock7 !== "okay") {
      data[7] = this.state.timeBlock7;
    }
    dataObj[data] = data;
    console.log(dataObj);
    this.props.updateTimeBlock(userId, dataObj);
    return dataObj;
  };

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
    let arr = [];
    let monthObj = this.fillOutMonth(monthDefaultOkay, fakeBackendMonth);
    let currentDay = monthObj[selectedDay];
    for (let i = 1; i < 8; i++) {
      if (currentDay[i] === undefined) {
        arr.push("okay");
      } else {
        arr.push(currentDay[i]);
      }
    }
    return this.setState({
      timeBlock1: arr[0],
      timeBlock2: arr[1],
      timeBlock3: arr[2],
      timeBlock4: arr[3],
      timeBlock5: arr[4],
      timeBlock6: arr[5],
      timeBlock7: arr[6]
    });
  };

  handleClick = (hourblock, i) => e => {
    if (i === 0) {
      if (this.state.timeBlock1 === "okay") {
        return this.setState({ timeBlock1: "conflict" });
      } else if (hourblock === "conflict") {
        return this.setState({ timeBlock1: "impossible" });
      } else if (hourblock === "impossible") {
        return this.setState({ timeBlock1: "okay" });
      }
    } else if (i === 1) {
      if (this.state.timeBlock2 === "okay") {
        return this.setState({ timeBlock2: "conflict" });
      } else if (hourblock === "conflict") {
        return this.setState({ timeBlock2: "impossible" });
      } else if (hourblock === "impossible") {
        return this.setState({ timeBlock2: "okay" });
      }
    } else if (i === 2) {
      if (this.state.timeBlock3 === "okay") {
        return this.setState({ timeBlock3: "conflict" });
      } else if (hourblock === "conflict") {
        return this.setState({ timeBlock3: "impossible" });
      } else if (hourblock === "impossible") {
        return this.setState({ timeBlock3: "okay" });
      }
    } else if (i === 3) {
      if (this.state.timeBlock4 === "okay") {
        return this.setState({ timeBlock4: "conflict" });
      } else if (hourblock === "conflict") {
        return this.setState({ timeBlock4: "impossible" });
      } else if (hourblock === "impossible") {
        return this.setState({ timeBlock4: "okay" });
      }
    } else if (i === 4) {
      if (this.state.timeBlock5 === "okay") {
        return this.setState({ timeBlock5: "conflict" });
      } else if (hourblock === "conflict") {
        return this.setState({ timeBlock5: "impossible" });
      } else if (hourblock === "impossible") {
        return this.setState({ timeBlock5: "okay" });
      }
    } else if (i === 5) {
      if (this.state.timeBlock6 === "okay") {
        return this.setState({ timeBlock6: "conflict" });
      } else if (hourblock === "conflict") {
        return this.setState({ timeBlock6: "impossible" });
      } else if (hourblock === "impossible") {
        return this.setState({ timeBlock6: "okay" });
      }
    } else if (i === 6) {
      if (this.state.timeBlock7 === "okay") {
        return this.setState({ timeBlock7: "conflict" });
      } else if (hourblock === "conflict") {
        return this.setState({ timeBlock7: "impossible" });
      } else if (hourblock === "impossible") {
        return this.setState({ timeBlock7: "okay" });
      }
    }
  };

  fillOutMonth = (okaysObj, incompleteObj) => {
    return Object.assign({}, okaysObj, incompleteObj);
  };

  render() {
    let hourBlocks = [
      this.state.timeBlock1,
      this.state.timeBlock2,
      this.state.timeBlock3,
      this.state.timeBlock4,
      this.state.timeBlock5,
      this.state.timeBlock6,
      this.state.timeBlock7
    ];

    let hours = [
      "8AM - 10AM",
      "10AM - 12PM",
      "12PM - 2PM",
      "2PM - 4PM",
      "4PM - 6PM",
      "6PM - 8PM",
      "8PM - 10PM"
    ];

    return (
      <React.Fragment>
        <Navbar />
        <div className="userConflictsContainerDiv">
          <RegisterHeader text={"Remove Times that Conflict"} />
          <div className="userConflictsContainerDiv2">
            <div className="userConflictsContainerDiv3">
              <div className="userConflictCalendarDiv">
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
                  <li>Select a date from calendar.</li>
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
              {this.state.selectedDate !== null && (
                <div className="date">
                  {this.state.selectedDate.toDateString()}
                </div>
              )}
              {this.state.selectedDate !== null &&
                hourBlocks.map((block, i) => {
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
                      onClick={this.handleClick(block, i)}
                    />
                  );
                })}
              {this.state.selectedDate !== null && (
                <button className="buttonStyle" onClick={this.handleSave}>
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myLogin: state.auth.login
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
