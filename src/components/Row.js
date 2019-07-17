import React, { Component } from "react";
import "../userConflicts.css";
import { Cell } from ".";

class Row extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "0px",
          padding: "0px"
        }}
      >
        <div
          className="teamDate"
          style={{ width: "160px", height: "50px", padding: "0px" }}
        >
          {this.props.parent}
        </div>
        <Cell className={this.props.className1} />
        <Cell className={this.props.className2} />
        <Cell className={this.props.className3} />
        <Cell className={this.props.className4} />
        <Cell className={this.props.className5} />
        <Cell className={this.props.className6} />
        <Cell className={this.props.className7} />
      </div>
    );
  }
}

export default Row;
