import React, { Component } from "react";
import "../userConflicts.css";

class Cell extends Component {
  render() {
    return <div className={this.props.className} />;
  }
}

export default Cell;
