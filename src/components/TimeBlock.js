import React, { Component } from "react";
//import { connect } from "react-redux";

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
            background: "rgba(0, 53, 89, 1)",
            border: "5px solid rgba(0, 53, 89, 1)",
            borderRadius: "5px",
            color: "rgb(161, 233, 29)",
            textAlign: "center",
            margin: "3px"
          };

    return (
      <div onClick={this.handleToggle} style={statusStyle}>
        {this.state.start} - {this.state.end}
      </div>
    );
  }
}

export default TimeBlock;
