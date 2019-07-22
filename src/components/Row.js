import React, { Component } from "react";
import "../userConflicts.css";
import { Cell } from ".";

class Row extends Component {
  render() {
    return (
      <div className="rowContainerDiv">
        <div className="parentNameDiv">{this.props.parent}</div>
        <div className="cellContainerDiv">
          {this.props.days.map( day =>
            <Cell className={`${day} cell`} />
          )}
        </div>
      </div>
    );
  }
}

export default Row;
