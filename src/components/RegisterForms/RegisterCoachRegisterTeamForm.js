import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser as register } from "../../actions";
import { Input, Form, Icon } from "antd";
import "../../App.css";
import { RegisterHeader } from "..";
import "../../registration.css";

class RegisterCoachRegisterTeamForm extends Component {
  render() {
    const {
      handleBack,
      handleChange,
      handleNext,
      teamName,
      ageGroup
    } = this.props;
    return (
      <Form className="stylesForm" id="coachRegisterTeam">
        <RegisterHeader text={"Register Team"} />
        <Form.Item>
          <Input
            addonBefore="Team Name"
            type="text"
            name="teamName"
            required
            onChange={handleChange}
            value={teamName}
          />

          <Input
            addonBefore="Age Group"
            type="text"
            name="ageGroup"
            required
            onChange={handleChange}
            value={ageGroup}
          />
        </Form.Item>

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
)(RegisterCoachRegisterTeamForm);
