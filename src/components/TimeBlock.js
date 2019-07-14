import React, { Component } from "react";
import { Icon } from "antd";
import "../userConflicts.css";

class TimeBlock extends Component {
  render() {
    return (
      <div className={this.props.className} onClick={this.props.onClick}>
        {this.props.hours}
        <br />
        <Icon type={this.props.type} />
      </div>
    );
  }
}

export default TimeBlock;
