import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser as register } from "../../actions";
import { Form, Icon } from "antd";
import "../../App.css";
import "../../registration.css";

class RegisterMissingTeamInformation extends Component {
  render() {
    const { handleBack, handleNext } = this.props;
    return (
      <Form className="stylesForm" id="missingTeamInformation">
        <div className="messageStyle">
          <h3>
            Please check with your coach to confirm your team name and that your
            team has been registered.{" "}
          </h3>
          <h3>
            You may finish registration at this time without linking your
            account to a team.
          </h3>{" "}
          <h3>
            Be sure to link your account to a team from the edit account page in
            the future.
          </h3>
        </div>
        <br />
        <div className="buttonContainerDiv">
          <button type="submit" onClick={handleNext} className="buttonStyle">
            Next
            <Icon type="right" />
          </button>
          <button type="submit" onClick={handleBack} className="buttonStyle">
            <Icon type="left" />
            Back
          </button>
        </div>
      </Form>
    );
  }
}
export default connect(
  null,
  { register }
)(RegisterMissingTeamInformation);
