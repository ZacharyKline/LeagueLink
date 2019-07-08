import React, { Component } from "react";
import { TimeBlock } from ".";

class Day extends Component {
  render() {
    return (
      <div>
        <TimeBlock date={this.props.date} hrBlock={"8AM-10AM"} />
        <TimeBlock date={this.props.date} hrBlock={"10AM-12PM"} />
        <TimeBlock date={this.props.date} hrBlock={"12PM-2PM"} />
        <TimeBlock date={this.props.date} hrBlock={"2PM-4PM"} />
        <TimeBlock date={this.props.date} hrBlock={"4PM-6PM"} />
        <TimeBlock date={this.props.date} hrBlock={"6PM-8PM"} />
        <TimeBlock date={this.props.date} hrBlock={"8PM-10PM"} />
      </div>
    );
  }
}

export default Day;
