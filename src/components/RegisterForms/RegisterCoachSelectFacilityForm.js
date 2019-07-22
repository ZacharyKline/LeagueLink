import React, { Component } from "react";
//import { connect } from "react-redux";
//import { registerUser as register } from "../../actions";
import { Form, Icon, Radio } from "antd";
import "../../App.css";
import { RegisterHeader } from "..";
import "../css/registration.css";

class RegisterCoachSelectFacilityForm extends Component {
  render() {
    const {
      facilities,
      managers,
      selectedFacilityId,
      handleSelectFacility,
      handleNext2,
      handleNext,
      handleBack
    } = this.props;
    return (
      <Form className="stylesForm" id="coachSelectFacility">
        <RegisterHeader text={"Select your Facility"} />
        <div className="radioGroupContainerDiv">
          <Radio.Group
            value={selectedFacilityId}
            className="radioGroupStyle"
            onChange={handleSelectFacility}
          >
            {facilities.map(facility => {
              let index = managers.findIndex(
                manager => manager.id === facility.managerId
              );
              let currentManagerName = managers[index].name;
              return (
                <Radio
                  key={facility.id}
                  value={facility.id}
                  className="radioFacilityStyle"
                >
                  <div className="radioFacilityDiv">
                    <div className="paddingLeft">
                      <span>
                        <b> {facility.name} </b>
                      </span>
                    </div>
                    <div className="paddingLeft">
                      <span>
                        {facility.address} {facility.city}, {facility.state}{" "}
                        {facility.zipCode}
                      </span>
                    </div>
                    <div className="paddingLeft">{facility.phone}</div>
                    <div className="paddingLeft">{facility.email}</div>
                    <div className="paddingLeft">
                      Contact: {currentManagerName}
                    </div>
                  </div>
                  <br />
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
        <br />
        <button type="submit" onClick={handleNext2} className="buttonStyle">
          I do not see the facility listed here.
        </button>
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
export default RegisterCoachSelectFacilityForm;
