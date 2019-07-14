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
    selectedDateString: null,
    selectedMonth: null,
    selectedDay: null,
    selectedYear: null,
    dateSelected: false,
    currentDate: "",
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
    timeBlock7: "",
    click1: true
  };

  handleSave = () => {
    const dataObj = {
      year: this.state.selectedYear,
      month: this.state.selectedMonth,
      day: this.state.selectedDay,
      userId: this.props.myLogin.id
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
    this.setState({
      dateSelected: false,
      currentDate: this.state.selectedDate.toDateString()
    });
    console.log(dataObj);
    return dataObj;
  };

  handleSelect = value => {
    if (!this.state.click1) {
      this.setState({
        currentDate: this.state.selectedDate.toDateString(),
        click1: true
      });
    } else {
      this.setState({ currentDate: "", click1: false });
    }

    let selectedDate = value._d;
    let selectedMonth = value.get("month");
    let selectedDay = value.get("date");
    let selectedYear = value.get("year");

    this.setState({
      value,
      selectedDate: selectedDate,
      selectedMonth: selectedMonth,
      selectedDay: selectedDay,
      selectedYear: selectedYear
    });

    return this.handleBlocks();
  };

  handleBlocks = () => {
    let number = this.selectedDate !== null ? this.state.selectedDay : 0;
    let monthObj = this.fillOutMonth();
    let currentDay = monthObj[number];
    let block1 = currentDay !== undefined ? currentDay[1] : undefined;
    block1 = block1 === undefined ? "okay" : block1;
    let block2 = currentDay !== undefined ? currentDay[2] : undefined;
    block2 = block2 === undefined ? "okay" : block2;
    let block3 = currentDay !== undefined ? currentDay[3] : undefined;
    block3 = block3 === undefined ? "okay" : block3;
    let block4 = currentDay !== undefined ? currentDay[4] : undefined;
    block4 = block4 === undefined ? "okay" : block4;
    let block5 = currentDay !== undefined ? currentDay[5] : undefined;
    block5 = block5 === undefined ? "okay" : block5;
    let block6 = currentDay !== undefined ? currentDay[6] : undefined;
    block6 = block6 === undefined ? "okay" : block6;
    let block7 = currentDay !== undefined ? currentDay[7] : undefined;
    block7 = block7 === undefined ? "okay" : block7;
    return this.setState({
      timeBlock1: block1,
      timeBlock2: block2,
      timeBlock3: block3,
      timeBlock4: block4,
      timeBlock5: block5,
      timeBlock6: block6,
      timeBlock7: block7
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

  componentDidMount = () => {};

  fillOutMonth = () => {
    return Object.assign(monthDefaultOkay, fakeBackendMonth);
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
        <div
          className="stylesForm"
          style={{ display: "flex", flexDirection: "column", width: "670px" }}
        >
          <RegisterHeader text={"Remove Times that Conflict"} />
          <div
            // className="stylesForm"
            style={{ display: "flex", flexDirection: "row", width: "650px" }}
          >
            <div style={{ margin: "5px" }}>
              <div
                style={{
                  color: "rgba(0, 53, 89, 1)",
                  backgroundColor: "rgb(235, 236, 238)",
                  padding: "20px",
                  border: "5px rgba(0, 53, 89, 1) solid",
                  borderRadius: "5px",
                  maxWidth: "410px",
                  maxHeight: "360px",
                  display: "flex",
                  flexDirection: "column",

                  boxSizing: "border-box"
                }}
              >
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
                  <li>Double click a date from calendar.</li>
                  <li>
                    A column of blocks will appear. Each block represents 2
                    hours.
                  </li>
                  <li>
                    IMPORTANT! Make sure the date is displayed above the blocks.
                    If you do not see a date, click on the calandar's date
                    again.
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
                <div className="date">{this.state.currentDate}</div>
              )}
              {this.state.selectedDate !== null &&
                hourBlocks.map((hourblock, i) => {
                  let faceIcon =
                    hourblock === "impossible"
                      ? "frown"
                      : hourblock === "conflict"
                      ? "meh"
                      : "smile";
                  return (
                    <TimeBlock
                      key={i}
                      className={`block ${hourBlocks[i]}`}
                      status={hourBlocks[i]}
                      hours={hours[i]}
                      type={faceIcon}
                      onClick={this.handleClick(hourblock, i)}
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
