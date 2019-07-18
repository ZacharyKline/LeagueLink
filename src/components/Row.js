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
          padding: "0px",
          marginLeft: "3px",
          marginRight: "6px",
          width: "100%"
        }}
      >
        <div
          className="teamDate"
          style={{ width: "150px", height: "50px", padding: "0px" }}
        >
          {this.props.parent}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "85%",
            marginRight: "6px",
            marginLeft: "2px"
          }}
        >
          <Cell className={this.props.className1} />
          <Cell className={this.props.className2} />
          <Cell className={this.props.className3} />
          <Cell className={this.props.className4} />
          <Cell className={this.props.className5} />
          <Cell className={this.props.className6} />
          <Cell className={this.props.className7} />
        </div>
      </div>
    );
  }
}

export default Row;
