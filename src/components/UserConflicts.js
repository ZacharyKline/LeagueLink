import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar, Icon } from "antd";
import { Navbar, TimeBlock, RegisterHeader, Day } from ".";
import {
  getTimeBlocksByUserId,
  updateTimeBlock,
  getTimeBlocksOfUserByDate,
  getAllTimeBlocksOfUserByDate
} from "../actions";
import moment from "moment";
import "../userConflicts.css";
import dates from "../dates.json";
import monthDefaultOkay from "../monthDefaultOkay.json";
import fakeBackendMonth from "../fakeBackendMonth.json";
import dayDefaultOkay from "../dayDefaultOkay.json";

class UserConflicts extends Component {
  //view should be renamed, but I don't know what to name it. true = calendar, false = list
  state = {
    value: null,
    selectedDate: null,
    selectedDateString: null,
    selectedMonth: null,
    selectedDay: null,
    selectedYear: null,
    year: 2020,
    firstMonth: 3,
    lastMonth: 6,
    firstDay: 1,
    lastDay: 30
  };

  handleSelect = value => {
    let selectedDate = value._d;
    let selectedMonth = value.get("month");
    let selectedDay = value.get("date");

    this.setState({
      value,
      selectedDate: selectedDate,
      selectedMonth: selectedMonth,
      selectedDay: selectedDay
    });
    return this.handleBlocks();
  };

  handleBlocks = () => {
    let number = this.selectedDate !== null ? this.state.selectedDay : 1;
    let monthObj = this.fillOutMonth();
    let currentDay = monthObj[number];
    console.log(currentDay);
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
    let hourBlocks = [block1, block2, block3, block4, block5, block6, block7];
    return hourBlocks;
  };

  handleClick = (hourBlocks, hourblock, i) => e => {
    if (hourblock === "okay") {
      hourblock = "conflict";
    } else if (hourblock === "conflict") {
      hourblock = "impossible";
    } else if (hourblock === "impossible") {
      hourblock = "okay";
    }
  };

  componentDidMount = () => {};

  fillOutMonth = () => {
    return Object.assign(monthDefaultOkay, fakeBackendMonth);
  };

  render() {
    let hourBlocks = this.handleBlocks();
    let timeblocks = [
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
              <div
                style={{
                  color: "rgba(0, 53, 89, 1)",
                  backgroundColor: "rgb(235, 236, 238)",
                  padding: "20px",
                  border: "5px rgba(0, 53, 89, 1) solid",
                  borderRadius: "5px",
                  maxWidth: "390px",

                  display: "flex",
                  flexDirection: "column"
                  //boxSizing: "border-box"
                }}
              >
                <h4>Instructions:</h4>
                <ul>
                  <li>Select a date from calandar.</li>
                  <li>
                    A column of green blocks will appear. Each block represents
                    2 hours for the selected date.
                  </li>
                  <li>If a time works, leave it green.</li>
                  <li>
                    If a time works but is inconvenient, click on it once and it
                    will turn orange.
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
                    When you are done with the conflicts for the date, simply
                    select the next date you wish to change. Your changes will
                    be saved and accessible to your coach.
                  </li>
                </ul>
              </div>
            </div>

            <div
              style={{
                background: "rgb(74, 162, 197)",
                height: "570px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "5px rgba(0, 53, 89, 1) solid",
                borderRadius: "5px",
                margin: "5px",
                marginLeft: "15px"
              }}
            >
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
                      className={"block" + " " + hourBlocks[i]}
                      status={hourBlocks[i]}
                      hours={hours[i]}
                      type={faceIcon}
                      onclick={this.handleClick(hourBlocks, hourblock, i)}
                    />
                  );
                })}
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

/*<div
                  style={{
                    background: "rgb(74, 162, 197)",
                    height: "570px",
                    width: "200px",
                    display: "flex",
                    flexBasis: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "5px rgba(0, 53, 89, 1) solid",
                    borderRadius: "5px"
                  }}
                >
                  <div>
                    <div
                      style={{
                        height: "30px",
                        width: "160px",

                        textAlign: "center",
                        border: "5px rgb(161, 233, 29) solid",
                        borderRadius: "5px",
                        color: "rgb(161, 233, 29)",
                        background: "rgba(0, 53, 89, 1)"
                      }}
                    >
                      {this.state.selectedDate.toDateString()}
                    </div>
                    {dates
                      .find(
                        day =>
                          day.date === this.state.selectedDate.toDateString()
                      )
                      .timeBlocks.map(timeBlock => {
                        return (
                          <TimeBlock
                            key={timeBlock.id}
                            date={this.state.selectedDate.toDateString()}
                            status={timeBlock.status}
                            start={timeBlock.start}
                            id={timeBlock.id}
                            end={timeBlock.end}
                          />
                        );
                      })}
                  </div>
                </div> */
