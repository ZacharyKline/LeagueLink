import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar } from "antd";
import { Navbar, TimeBlock, RegisterHeader, Cell, Row } from ".";
import {
  getTimeBlocksByUserId,
  updateTimeBlock,
  getTimeBlocksOfUserByDate,
  getAllTimeBlocksOfUserByDate
} from "../actions";
import moment from "moment";
import "../userConflicts.css";
import monthDefaultOkay from "../monthDefaultOkay.json";
import atheletesConflicts from "../fakeAtheletesConflicts.json";
import teamconflicts from "../fakeTeamconflicts.json";
import coachConflicts from "../fakeCoachConflicts.json";

class TeamConflicts extends Component {
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
    timeBlock7: "",
    coachHours: [],
    parentHours: []
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
    this.setState({
      dateSelected: false,
      currentDate: this.state.selectedDate.toDateString()
    });
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
    this.handleCoachHours(coachConflicts, selectedDay);
    this.handleParentHours(selectedDay);
    return this.handleBlocks(selectedDay);
  };

  handleCoachHours = (conflictsObj, selectedDay) => {
    let arr = [];
    let conflicts = this.fillOutMonth(monthDefaultOkay, conflictsObj);
    let dayConflicts = conflicts[selectedDay];
    for (let i = 1; i < 8; i++) {
      if (dayConflicts[i] === undefined) {
        arr.push("okay");
      } else {
        arr.push(dayConflicts[i]);
      }
    }
    return this.setState({
      coachHours: arr
    });
  };

  fillOutMonth = (okaysObj, incompleteObj) => {
    return Object.assign({}, okaysObj, incompleteObj);
  };

  handleParentHours = selectedDay => {
    let containerArr = [];
    for (let i = 0; i < atheletesConflicts.length; i++) {
      let arr = [];
      let dayConflicts = atheletesConflicts[i].data[selectedDay];
      let x = Object.assign(
        {
          "1": "okay",
          "2": "okay",
          "3": "okay",
          "4": "okay",
          "5": "okay",
          "6": "okay",
          "7": "okay"
        },
        dayConflicts
      );
      let arr2 = Object.values(x);
      arr.push(arr2);
      containerArr.push(arr);
    }
    this.setState({ parentHours: containerArr });
  };

  handleBlocks = selectedDay => {
    let arr = [];
    let monthObj = this.fillOutMonth(monthDefaultOkay, teamconflicts);
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
      "8AM-10AM",
      "10AM-12PM",
      "12PM-2PM",
      "2PM-4PM",
      "4PM-6PM",
      "6PM-8PM",
      "8PM-10PM"
    ];

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
          <RegisterHeader text={"Remove Confict Times for Team"} />
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
              {this.state.selectedDate !== null && (
                <React.Fragment>
                  <div className="teamTimeBlockDiv2">
                    <div className="teamTimeBlockDiv3">
                      <div className="teamDate">
                        {this.state.selectedDate.toDateString()}
                      </div>
                      <button className="buttonStyle" onClick={this.handleSave}>
                        Save Changes
                      </button>
                    </div>
                    {hourBlocks.map((block, i) => {
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
                          onClick={this.handleClick(block, i)}
                        />
                      );
                    })}
                  </div>
                  <hr />
                  <div className="coachTimeBlockDiv">
                    <div className="myConflictsDiv">My Conflicts</div>
                    {this.state.coachHours.map((block, i) => {
                      return <Cell className={`${block} cell`} key={i} />;
                    })}
                  </div>
                  <div className="parentTimeBlockDiv">
                    {this.state.parentHours.map((day, i) => {
                      return (
                        <Row
                          className1={`${day[0][0]} cell`}
                          className2={`${day[0][1]} cell`}
                          className3={`${day[0][2]} cell`}
                          className4={`${day[0][3]} cell`}
                          className5={`${day[0][4]} cell`}
                          className6={`${day[0][5]} cell`}
                          className7={`${day[0][6]} cell`}
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
)(TeamConflicts);
