import React, { Component } from "react";
import { Day } from ".";

class Week extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Day date={this.props.date} />
        <Day date={this.props.date2} />
        <Day date={this.props.date3} />
        <Day date={this.props.date4} />
        <Day date={this.props.date5} />
        <Day date={this.props.date6} />
        <Day date={this.props.date7} />
      </div>
    );
  }
}

export default Week;
