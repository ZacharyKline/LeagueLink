import React, { Component } from "react";

class RegisterHeader extends Component {
  render() {
    return (
      <h1
        style={{
          background: "rgba(0, 53, 89, 1)",
          color: "rgb(161, 233, 29)",
          border: "3px rgb(130, 184, 31) solid",
          borderRadius: "25px",
          textAlign: "center",
          width: "100%",
          fontSize: "25px"
        }}
      >
        {this.props.text}
      </h1>
    );
  }
}

export default RegisterHeader;
