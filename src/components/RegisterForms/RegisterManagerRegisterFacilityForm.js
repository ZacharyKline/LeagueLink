import React, { Component } from "react";
//import { connect } from "react-redux";
//import { registerUser as register } from "../../actions";
import { Input, Form, Icon } from "antd";
import "../../App.css";
import { RegisterHeader } from "..";
import "../css/registration.css";

class RegisterManagerRegisterFacilityForm extends Component {
  render() {
    const {
      handleBack,
      handleChange,
      handleNext,
      facilityName,
      facilityAddress,
      facilityCity,
      facilityEmail,
      facilityPhone,
      facilityState,
      facilityUrl,
      facilityZipCode
    } = this.props;
    return (
      <Form className="stylesForm" id="managerRegisterFacility">
        <RegisterHeader text={"Register your Facility"} />
        <Form.Item>
          <Input
            addonBefore="Facility Name"
            type="text"
            name="facilityName"
            required
            onChange={handleChange}
            value={facilityName}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
              addonBefore="Street"
              type="text"
              name="facilityAddress"
              required
              onChange={handleChange}
              value={facilityAddress}
            />

            <Input
              addonBefore="City"
              type="text"
              name="facilityCity"
              required
              onChange={handleChange}
              value={facilityCity}
            />
            <div style={{ display: "flex" }}>
              <Input
                addonBefore="State"
                type="text"
                name="facilityState"
                maxLength={2}
                required
                onChange={handleChange}
                value={facilityState}
              />
              <Input
                addonBefore="Zip Code"
                type="text"
                name="facilityZipCode"
                required
                onChange={handleChange}
                value={facilityZipCode}
              />
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <Input
            addonBefore="Website Url"
            type="url"
            name="facilityUrl"
            placeholder="optional"
            onChange={handleChange}
            value={facilityUrl}
          />
          <Input
            addonBefore="Email"
            type="email"
            name="facilityEmail"
            required
            onChange={handleChange}
            value={facilityEmail}
          />
          <Input
            addonBefore="Phone"
            type="tel"
            name="facilityPhone"
            placeholder="(000) 000-0000"
            pattern="[(][0-9]{3}[)][\s][0-9]{3}-[0-9]{4}"
            required
            onChange={handleChange}
            value={facilityPhone}
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

export default RegisterManagerRegisterFacilityForm;
