import React, { Component } from "react";
import { Layout, Menu, Calendar, Button, List } from "antd";
import { Navbar, TimeBlock } from ".";
//import { connect } from "tls";
// import CalendarComponent from './Calendar'
import dates from "../dates.json";
const { Header, Sider, Content } = Layout;
const noConflict = 0;
const unresolvableConflict = 1;
const conflict = 2;

class CalendarPage extends Component {
  //view should be renamed, but I don't know what to name it. true = calendar, false = list
  state = { selectedDate: null, view: true, dateListObj: null };

  handleSelect = e => {
    //This is terrible, but I don't know a great way of doing everything that needs to be done
    //If anyone knows a better way do the weird iterator thingy on line 27-37 please refactor it
    //and tell me how you fixed it. I've tried objects, arrays, switchs, but couldn't get
    //any to be any more readable. Only thing I can think of is to break into a function

    this.setState({ selectedDate: e._d });
    if (this.state.dateListObj) {
      let dateListObj = this.state.dateListObj;

      if (typeof dateListObj !== "undefined") {
        if (dateListObj[e._d] === noConflict) {
          dateListObj[e._d] = unresolvableConflict;
        } else if (dateListObj[e._d] === unresolvableConflict) {
          dateListObj[e._d] = conflict;
        } else {
          dateListObj[e._d] = noConflict;
        }
        this.setState({ dateListObj });
      }
    } else {
      this.setState({ dateListObj: { [e._d]: unresolvableConflict } });
    }
  };

  toggleView = e => {
    this.state.view
      ? this.setState({ view: false })
      : this.setState({ view: true });
  };

  renderList = () => {
    let dateListObj = this.state.dateListObj;
    let arrOfDates = [];
    if (dateListObj) {
      for (let [key, value] of Object.entries(dateListObj)) {
        arrOfDates.push({ date: [key, value] });
      }
    }
    return arrOfDates;
  };

  render() {
    const conflictArr = ["noConflict", "unresolvableConflict", "conflict"];
    return (
      <React.Fragment>
        <Navbar />

        {this.state.selectedDate !== null && (
          <div
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
                  day => day.date === this.state.selectedDate.toDateString()
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
          </div>
        )}

        <div>
          <Layout>
            <Header style={{ backgroundColor: "white" }}>
              <Menu
                mode="horizontal"
                style={{
                  background: "rgba(0, 53, 89, 1)",
                  color: "rgb(161, 233, 29)",
                  border: "3px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  textAlign: "center",
                  width: "20%",
                  height: "100%"
                }}
              >
                <Menu.Item>Schedule</Menu.Item>
                <Menu.Item>Conflicts</Menu.Item>
              </Menu>
            </Header>
          </Layout>
          <Layout>
            <Content
              style={{
                color: "rgba(0, 53, 89, 1)",
                backgroundColor: "rgb(74, 162, 197)",
                padding: "20px",
                border: "5px rgba(0, 53, 89, 1) solid",
                borderRadius: "5px",
                width: "400px",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {this.state.view ? (
                <Calendar
                  onPanelChange={this.handlePanelChange}
                  onSelect={this.handleSelect}
                />
              ) : (
                <List
                  {...console.log(this.renderList())}
                  dataSource={this.state.dateListObj ? this.renderList() : ""}
                  renderItem={item => (
                    <List.Item>
                      {console.log(item)}
                      {console.log("item")}
                      <List.Item.Meta
                        title={<a href="https://ant.design">{item.date[0]}</a>}
                        description={<p>{conflictArr[item.date[1]]}</p>}
                      />
                    </List.Item>
                  )}
                />
              )}

              <Button onClick={this.toggleView}>Toggle Calendar View</Button>
            </Content>
            <Sider
              style={{
                color: "rgba(0, 53, 89, 1)",
                backgroundColor: "rgb(74, 162, 197)",
                padding: "20px",
                border: "5px rgba(0, 53, 89, 1) solid",
                borderRadius: "5px",
                width: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              This is where when you click on an event the information will go
            </Sider>
          </Layout>
        </div>
      </React.Fragment>
    );
  }
}

export default CalendarPage;
