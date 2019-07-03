import React, { Component } from "react";
//import { connect } from "react-redux";

class TimeBlock extends Component {
  state = {
    status: "okay"
  };

  handleToggle = e => {
    switch (this.state.status) {
      case "okay":
        return this.setState({ status: "conflict" });
      case "conflict":
        return this.setState({ status: "impossible" });
      case "impossible":
        return this.setState({ status: "okay" });
      default:
        return this.state;
    }
  };

  render() {
    let statusStyle =
      this.state.status === "okay"
        ? {
            height: "50px",
            width: "200px",
            background: "blue",
            border: "1px solid black"
          }
        : this.state.status === "conflict"
        ? {
            height: "50px",
            width: "200px",
            background: "orange",
            border: "1px solid black"
          }
        : {
            height: "50px",
            width: "200px",
            background: "red",
            border: "1px solid black"
          };

    return (
      <div onClick={this.handleToggle} style={statusStyle}>
        {this.props.date}
        {this.props.hrBlock}
      </div>
    );
  }
}

export default TimeBlock;
