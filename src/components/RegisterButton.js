import React, { Component } from "react";

class RegisterButton extends Component {
  render() {
    const buttonStyle = {
      background: "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
      color: "rgb(161, 233, 29)",
      border: "2px rgb(130, 184, 31) solid",
      borderRadius: "25px",
      fontSize: "large",
      minWidth: "120px"
    };

    return (
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "spaceAround"
        }}
      >
        <button type="submit" style={buttonStyle}>
          {this.props.iconBefore}
          {this.props.value}
          {this.props.iconAfter}
        </button>
      </div>
    );
  }
}

export default RegisterButton;
