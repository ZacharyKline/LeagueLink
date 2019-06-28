import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser as register } from "../actions";
import { Input, Form, Icon, Radio } from "antd";
import Spinner from "react-spinkit";
import "../App.css";
import { RegisterHeader } from ".";

class RegisterForm extends Component {
  state = {
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    teamId: null,
    facilityId: null,
    facilityName: null,
    facilityAddress: null,
    facilityCity: null,
    facilityState: null,
    facilityZipCode: null,
    facilityPhone: null,
    facilityEmail: null,
    facilityUrl: null,
    passwordMatch: true,
    firstPage: true,
    secondPage: false,
    thirdPage: false,
    radioValue: null
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
  handleNext = num => e => {
    e.preventDefault();
    num === 1
      ? this.setState({ firstPage: false, secondPage: true })
      : num === 2 && this.state.radioValue !== null
      ? this.setState({ secondPage: false, thirdPage: true })
      : this.setState({ firstPage: false, secondPage: true });
  };

  handleBack = num => e => {
    e.preventDefault();

    num === 1
      ? this.setState({ firstPage: true, secondPage: false })
      : num === 2
      ? this.setState({ secondPage: true, thirdPage: false })
      : this.setState({ thirdPage: false });
  };

  handleChange = e => {
    this.setState({ passwordMatch: true });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRadioClick = e => {
    this.setState({
      radioValue: e.target.value
    });
  };

  render() {
    const { handleChange, handleNext } = this;
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

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
      color: "rgb(161, 233, 29)"
    };

    return (
      <React.Fragment>
        {this.state.firstPage && (
          <Form style={stylesForm}>
            <RegisterHeader text={"Register"} />
            <Form.Item>
              <Input
                addonBefore="First Name"
                type="text"
                name="firstName"
                required
                onChange={handleChange}
                value={this.state.firstName}
              />

              <Input
                addonBefore="Last Name"
                type="text"
                name="lastName"
                required
                onChange={handleChange}
                value={this.state.lastName}
              />
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore="Email"
                type="email"
                name="email"
                required
                onChange={handleChange}
                value={this.state.email}
              />
              <Input
                addonBefore="Phone"
                type="tel"
                name="phone"
                placeholder="000-000-0000"
                //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleChange}
                value={this.state.phone}
              />
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore="Password"
                type="password"
                name="password"
                value={this.state.password}
                required
                onChange={handleChange}
              />

              <Input
                addonBefore="Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm"
                value={this.state.confirmPassword}
                required
                onChange={handleChange}
              />
            </Form.Item>
            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <button
                type="submit"
                onClick={handleNext(1)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                Next
                <Icon type="right" />
              </button>
            </div>
          </Form>
        )}

        {this.state.secondPage && (
          <Form style={stylesForm}>
            <RegisterHeader text={"Are you a..."} />
            <div
              style={{
                background: "rgba(0, 53, 89, 1)",
                borderRadius: "5px"
              }}
            >
              <Radio.Group
                onChange={this.handleRadioClick}
                value={this.state.radioValue}
                size="large"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "15px",
                  paddingLeft: "30px",
                  fontSize: "large"
                }}
              >
                <Radio style={radioStyle} value={1}>
                  Athlete / Athlete's Legal Guardian?
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Coach?
                </Radio>
                <Radio style={radioStyle} value={3}>
                  League Manager?
                </Radio>
              </Radio.Group>
            </div>
            <br />
            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <button
                type="submit"
                onClick={this.handleNext(2)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                Next
                <Icon type="right" />
              </button>
              <button
                type="submit"
                onClick={this.handleBack(1)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                <Icon type="left" />
                Back
              </button>
            </div>
          </Form>
        )}

        {this.state.thirdPage && this.state.radioValue === 1 && (
          <Form style={stylesForm}>
            <RegisterHeader text={"Select your Team(s)"} />
            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <button
                type="submit"
                onClick={this.handleNext(3)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                Next
                <Icon type="right" />
              </button>
              <button
                type="submit"
                onClick={this.handleBack(2)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                <Icon type="left" />
                Back
              </button>
            </div>
          </Form>
        )}

        {this.state.thirdPage && this.state.radioValue === 2 && (
          <Form style={stylesForm}>
            <RegisterHeader text={"Select your Facility"} />
            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <button
                type="submit"
                onClick={this.handleNext(3)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                Next
                <Icon type="right" />
              </button>
              <button
                type="submit"
                onClick={this.handleBack(2)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                <Icon type="left" />
                Back
              </button>
            </div>
          </Form>
        )}

        {this.state.thirdPage && this.state.radioValue === 3 && (
          <Form style={stylesForm}>
            <RegisterHeader text={"Register your Facility"} />
            <Form.Item>
              <Input
                addonBefore="Facility Name"
                type="text"
                name="facilityName"
                required
                onChange={handleChange}
                value={this.state.facilityName}
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
                  value={this.state.facilityAddress}
                />

                <Input
                  addonBefore="City"
                  type="text"
                  name="facilityCity"
                  required
                  onChange={handleChange}
                  value={this.state.facilityCity}
                />
                <div style={{ display: "flex" }}>
                  <Input
                    addonBefore="State"
                    type="text"
                    name="facilityState"
                    maxLength={2}
                    required
                    onChange={handleChange}
                    value={this.state.facilityState}
                  />
                  <Input
                    addonBefore="Zip Code"
                    type="text"
                    name="facilityZipCode"
                    required
                    onChange={handleChange}
                    value={this.state.facilityZipCode}
                  />
                </div>
              </div>
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore="Phone"
                type="tel"
                name="facilityPhone"
                placeholder="optional"
                onChange={handleChange}
                value={this.state.facilityPhone}
              />
              <Input
                addonBefore="Email"
                type="email"
                name="facilityPhone"
                placeholder="optional"
                onChange={handleChange}
                value={this.state.facilityEmail}
              />
              <Input
                addonBefore="Website Url"
                type="url"
                name="facilityUrl"
                placeholder="optional"
                onChange={handleChange}
                value={this.state.facilityUrl}
              />
            </Form.Item>

            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between"
              }}
            >
              <button
                type="submit"
                onClick={this.handleNext(3)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                Next
                <Icon type="right" />
              </button>
              <button
                type="submit"
                onClick={this.handleBack(2)}
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
              >
                <Icon type="left" />
                Back
              </button>
            </div>
          </Form>
        )}

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
