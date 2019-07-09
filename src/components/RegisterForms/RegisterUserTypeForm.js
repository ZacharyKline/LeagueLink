import React, { Component } from "react";
//import { connect } from "react-redux";
//import { registerUser as register } from "../../actions";
import { Form, Icon, Radio } from "antd";
import "../../App.css";
import { RegisterHeader } from "..";
import "../../registration.css";

class RegisterUserTypeForm extends Component {
  render() {
    const { handleRadioClick, userType, handleNext, handleBack } = this.props;
    return (
      <Form className="stylesForm" id="userTypeForm">
        <RegisterHeader text={"Are you a..."} />
        <div className="radioGroupContainerDiv">
          <Radio.Group
            onChange={handleRadioClick}
            value={userType}
            size="large"
            className="radioGroupStyle"
          >
            <Radio checked className="radioStyle" value={"parent"}>
              Athlete / Athlete's Legal Guardian?
            </Radio>
            <Radio className="radioStyle" value={"coach"}>
              Coach?
            </Radio>
            <Radio className="radioStyle" value={"manager"}>
              League Manager?
            </Radio>
          </Radio.Group>
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

export default RegisterUserTypeForm;
