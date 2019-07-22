import React, { Component } from "react";
import { Day } from ".";

class Week extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {this.props.dates.map(date => <Day date={date} />)}
      </div>
    );
  }
}

export default Week;
