import React, { Component } from "react";
//import { connect } from "react-redux";
//import { registerUser as register } from "../../actions";
import { Input, Form, Icon, Button } from "antd";
import "../../App.css";
import { RegisterHeader } from "..";
import "../../registration.css";
import { Link } from 'react-router-dom'
class RegisterUserInformationForm extends Component {
  render() {
    const {
      handleChange,
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      handleNext
    } = this.props;
    return (
      <Form className="stylesForm" id="userInformation">
                <Link to='/'>
            <Button 
            style={{
              background: "rgba(0, 53, 89, 1)",
              color: "rgb(161, 233, 29)",
              border: "3px rgb(130, 184, 31) solid",
              borderRadius: "25px",
              textAlign: "center",
              fontSize: '15px'
            }}>Go Back</Button>
          </Link>
          <br/>
        <RegisterHeader text={"Register"} />
        <Form.Item layout="vertical">
          <Input
            addonBefore="First Name"
            type="text"
            name="firstName"
            required
            onChange={handleChange}
            value={firstName}
          />

          <Input
            addonBefore="Last Name"
            type="text"
            name="lastName"
            required
            onChange={handleChange}
            value={lastName}
          />
        </Form.Item>
        <Form.Item>
          <Input
            addonBefore="Email"
            type="email"
            name="email"
            required
            placeholder="For login"
            onChange={handleChange}
            value={email}
          />
          <Input
            addonBefore="Phone"
            type="tel"
            name="phone"
            placeholder="(000) 000-0000"
            pattern="[(][0-9]{3}[)][\s][0-9]{3}-[0-9]{4}"
            required
            onChange={handleChange}
            value={phone}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            addonBefore="Password"
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />

          <Input.Password
            addonBefore="Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm"
            value={confirmPassword}
            pattern={password}
            required
            onChange={handleChange}
          />
        </Form.Item>
        <div className="buttonContainerDiv">
          <button
            //type="submit"
            onClick={handleNext}
            className="buttonStyle"
          >
            Next
            <Icon type="right" />
          </button>
        </div>
      </Form>
    );
  }
}
export default RegisterUserInformationForm;
