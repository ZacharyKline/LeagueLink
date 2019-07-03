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
        ? { height: "30px", width: "30px", background: "blue" }
        : this.state.status === "conflict"
        ? { height: "30px", width: "30px", background: "orange" }
        : { height: "30px", width: "30px", background: "red" };

    return <div onClick={this.handleToggle} style={statusStyle} />;
  }
}

export default TimeBlock;
