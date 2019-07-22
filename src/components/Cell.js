import React, { Component } from "react";
import "./css/userConflicts.css";

class Cell extends Component {
  render() {
    return <div className={this.props.className} style={{ width: "100%" }} />;
  }
}

export default Cell;
