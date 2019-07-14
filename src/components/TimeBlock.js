import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import "../userConflicts.css";

class TimeBlock extends Component {
  state = {
    status: this.props.status,
    date: this.props.date,
    id: this.props.id,
    start: this.props.start,
    end: this.props.end
  };

  handleToggle = e => {
    switch (this.state.status) {
      case "okay":
        return this.setState({ status: "conflict", iconType: "meh" });
      case "conflict":
        return this.setState({ status: "impossible", iconType: "frown" });
      case "impossible":
        return this.setState({ status: "okay", iconType: "smile" });
      default:
        return this.state;
    }
  };

  render() {
    let faceIcon =
      this.state.status === "impossible"
        ? "frown"
        : this.state.status === "conflict"
        ? "meh"
        : "smile";

    let iconStyle =
      this.state.status === "impossible"
        ? { color: "rgb(74, 162, 197)", fontSize: "25px" }
        : this.state.status === "conflict"
        ? { color: "rgb(131, 68, 10)", fontSize: "25px" }
        : { color: "rgb(74, 112, 4)", fontSize: "25px" };

    let statusStyle =
      this.state.status === "impossible"
        ? {
            height: "60px",
            width: "160px",
            background: "rgba(0, 53, 89, 1)",
            border: "5px solid rgba(0, 53, 89, 1)",
            borderRadius: "5px",
            color: "rgb(161, 233, 29)",
            textAlign: "center",
            margin: "3px"
          }
        : this.state.status === "conflict"
        ? {
            height: "60px",
            width: "160px",
            background: "orange",
            borderTop: "5px solid rgb(156, 103, 4)",
            borderLeft: "5px solid rgb(189, 124, 3)",
            borderBottom: "5px solid rgb(248, 201, 114)",
            borderRight: "5px solid rgb(247, 187, 75)",
            borderRadius: "5px",
            textAlign: "center",
            margin: "3px"
          }
        : {
            height: "60px",
            width: "160px",
            background: "rgb(161, 233, 29)",
            borderTop: "5px solid rgb(220, 250, 164)",
            borderLeft: "5px solid rgb(194, 238, 113)",
            borderBottom: "5px solid rgb(74, 112, 4)",
            borderRight: "5px solid rgb(99, 150, 5)",
            borderRadius: "5px",
            textAlign: "center",
            margin: "3px"
          };

    return (
      <div onClick={this.handleToggle} className={this.props.className}>
        {this.props.hours}
        <br />
        <Icon type={this.props.type} />
      </div>
    );
  }
}

export default TimeBlock;
