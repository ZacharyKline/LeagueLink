import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser as register } from "../actions";
import { Input, Form, Icon } from "antd";
import Spinner from "react-spinkit";
import "../App.css";
import { RegisterButton, RegisterHeader } from ".";

class RegisterForm extends Component {
  state = {
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    parent: false,
    coach: false,
    manager: false,
    teamId: null,
    facilityId: null,
    facilityName: null,
    facilityAddress: null,
    facilityPhone: null,
    facilityEmail: null,
    facilityUrl: null,
    passwordMatch: true
  };
  /*handleRegister = e => {
    e.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ passwordMatch: false });
    } else {
      this.props.register({
        username: this.state.username,
        password: this.state.password,
        displayName: this.state.displayname
      });
    }
  };
*/
  handleChange = e => {
    this.setState({ passwordMatch: true });
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { handleRegister, handleChange } = this;
    const { passwordMatch } = this.state;
    const { isLoading, err } = this.props;
    const stylesForm = {
      color: "rgba(0, 53, 89, 1)",
      backgroundColor: "rgb(74, 162, 197)",
      padding: "20px",
      border: "5px rgba(0, 53, 89, 1) solid",
      borderRadius: "5px",
      width: "400px",
      display: "flex",
      flexDirection: "column",
      margin: "40px auto"
    };

    return (
      <React.Fragment>
        <Form style={stylesForm}>
          <RegisterHeader text={"Register"} />
          <Form.Item>
            <Input
              addonBefore="First Name"
              type="text"
              name="firstName"
              required
              onChange={handleChange}
            />
            <Input
              addonBefore="Last Name"
              type="text"
              name="lastName"
              required
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
            <Input
              addonBefore="Phone"
              type="tel"
              name="phone"
              placeholder="000-000-0000"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              addonBefore="Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />

            <Input
              addonBefore="Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm"
              required
              onChange={handleChange}
            />
          </Form.Item>
          <RegisterButton
            onClick={handleRegister}
            disabled={isLoading}
            value={"Next"}
            iconAfter={<Icon type="right" />}
          />
        </Form>

        {!passwordMatch && (
          <p style={{ color: "red" }}>passwords do not match</p>
        )}
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { register }
)(RegisterForm);
