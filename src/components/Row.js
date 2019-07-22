import React, { Component } from "react";
import "../userConflicts.css";
import { Cell } from ".";

class Row extends Component {
  render() {
    return (
      <div className="rowContainerDiv">
        <div className="parentNameDiv">{this.props.parent}</div>
        <div className="cellContainerDiv">
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
