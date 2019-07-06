import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser as register } from "../../actions";
import { Form, Icon } from "antd";
import "../../App.css";
import "../../registration.css";

class RegisterMissingFacilityForm extends Component {
  render() {
    const { handleBack, handleNext } = this.props;
    return (
      <Form className="stylesForm" id="missingFacilityForm">
        <div className="messageStyle">
          <h3>
            Please check with your league manager to make sure your facility has
            been registered under the correct name.{" "}
          </h3>
          <h3>
            You may finish registration at this time without linking your
            account to a facility.
          </h3>{" "}
          <h3>
            You may link a facility to your account from the edit account page
            in the future.
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
)(RegisterMissingFacilityForm);
