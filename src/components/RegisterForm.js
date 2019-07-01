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
    teamName: "",
    ageGroup: "",
    teamId: null,
    facilityId: null,
    facilityName: "",
    facilityAddress: "",
    facilityCity: "",
    facilityState: "",
    facilityZipCode: null,
    facilityPhone: "",
    facilityEmail: "",
    facilityUrl: "",
    passwordMatch: true,
    firstPage: true,
    secondPage: false,
    thirdPage: false,
    fourthPage: false,
    confirmationPage: false,
    radioValue: 1
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

  handleSubmit = radioValue => e => {
    if (radioValue === 1) {
      console.log("Create Parent, Add Parent ID to Coach");
    } else if (radioValue === 2) {
      console.log("Create Coach, Create Team, Add Coach ID to Facility");
    } else if (radioValue === 3) {
      console.log("Create Manager, Create Facility");
    }
  };

  handleNext = num => e => {
    //e.preventDefault();
    if (
      num === 1 &&
      (this.state.firstName !== "" &&
        this.state.lastName !== "" &&
        this.state.email !== "" &&
        this.state.phone !== "" &&
        this.state.password !== "" &&
        this.state.confirmPassword === this.state.password)
    ) {
      this.setState({ firstPage: false, secondPage: true });
    }
    if (num === 2) {
      this.setState({ secondPage: false, thirdPage: true });
    }
    if (num === 3) {
      if (
        this.state.radioValue === 3 &&
        this.state.facilityName !== "" &&
        this.state.facilityAddress !== "" &&
        this.state.facilityCity !== "" &&
        this.state.facilityState !== "" &&
        this.state.facilityZipCode !== "" &&
        this.state.facilityEmail !== "" &&
        this.state.facilityPhone !== ""
      ) {
        this.setState({ thirdPage: false, confirmationPage: true });
      } else if (this.state.radioValue === 1) {
        this.setState({ thirdPage: false, confirmationPage: true });
      } else if (this.state.radioValue === 2) {
        this.setState({ thirdPage: false, fourthPage: true });
      }
    }
    if (num === 4) {
      if (this.state.teamName !== "" && this.state.ageGroup !== "") {
        this.setState({ fourthPage: false, confirmationPage: true });
      }
    }
  };

  handleBack = num => e => {
    e.preventDefault();

    num === 1
      ? this.setState({ firstPage: true, secondPage: false })
      : num === 2
      ? this.setState({ secondPage: true, thirdPage: false })
      : num === 3 &&
        (this.state.radioValue === 3 || this.state.radioValue === 1)
      ? this.setState({ thirdPage: true, confirmationPage: false })
      : num === 3 && this.state.radioValue === 2
      ? this.setState({ fourthPage: true, confirmationPage: false })
      : this.setState();
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
                placeholder="(000) 000-0000"
                pattern="[(][0-9]{3}[)][\s][0-9]{3}-[0-9]{4}"
                required
                onChange={handleChange}
                value={this.state.phone}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                addonBefore="Password"
                type="password"
                name="password"
                value={this.state.password}
                required
                onChange={handleChange}
              />

              <Input.Password
                addonBefore="Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm"
                value={this.state.confirmPassword}
                pattern={this.state.password}
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
                //type="submit"
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
                <Radio checked style={radioStyle} value={1}>
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

        {this.state.fourthPage && (
          <Form style={stylesForm}>
            <RegisterHeader text={"Register Team"} />
            <Form.Item>
              <Input
                addonBefore="Team Name"
                type="text"
                name="teamName"
                required
                onChange={handleChange}
                value={this.state.teamName}
              />

              <Input
                addonBefore="Age Group"
                type="text"
                name="ageGroup"
                required
                onChange={handleChange}
                value={this.state.ageGroup}
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
                onClick={this.handleNext(4)}
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
                onClick={this.handleBack(3)}
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
                addonBefore="Website Url"
                type="url"
                name="facilityUrl"
                placeholder="optional"
                onChange={handleChange}
                value={this.state.facilityUrl}
              />
              <Input
                addonBefore="Email"
                type="email"
                name="facilityEmail"
                required
                onChange={handleChange}
                value={this.state.facilityEmail}
              />
              <Input
                addonBefore="Phone"
                type="tel"
                name="facilityPhone"
                placeholder="(000) 000-0000"
                pattern="[(][0-9]{3}[)][\s][0-9]{3}-[0-9]{4}"
                required
                onChange={handleChange}
                value={this.state.facilityPhone}
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

        {this.state.confirmationPage && (
          <Form style={stylesForm}>
            <RegisterHeader text={"Confirm your Details"} />
            <div
              style={{
                background: "rgba(0, 53, 89, 1)",
                borderRadius: "5px"
              }}
            >
              <Form.Item
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "15px",
                  paddingLeft: "30px",
                  fontSize: "large",
                  color: "rgb(161, 233, 29)"
                }}
              >
                <div
                  style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    maxHeight: "21px"
                  }}
                >
                  <span>
                    <b>{this.state.firstName}</b>
                  </span>
                  <span> </span>
                  <span>
                    <b>{this.state.lastName}</b>
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    maxHeight: "21px"
                  }}
                >
                  <span>{this.state.email}</span>
                </div>
                <div
                  style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    maxHeight: "21px"
                  }}
                >
                  <span>{this.state.phone}</span>
                </div>
                {false &&
                  (this.state.radioValue === 1 ||
                    this.state.radioValue === 2) && (
                    <div
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        maxHeight: "21px"
                      }}
                    >
                      <span>{this.state.teamIds}</span>
                    </div>
                  )}
                {false && this.state.radioValue === 2 && (
                  <div
                    style={{
                      marginTop: "0px",
                      marginBottom: "0px",
                      maxHeight: "21px"
                    }}
                  >
                    <span>{this.state.facilityIds}</span>
                  </div>
                )}
                {this.state.radioValue === 3 && (
                  <React.Fragment>
                    <br />
                    <div
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        maxHeight: "21px"
                      }}
                    >
                      <span>
                        <b>{this.state.facilityName}</b>
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        maxHeight: "21px"
                      }}
                    >
                      <span>{this.state.facilityAddress}</span>
                    </div>
                    <div
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        maxHeight: "21px"
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          maxHeight: "21px"
                        }}
                      >
                        {this.state.facilityCity}
                      </span>
                      <span>, </span>
                      <span>{this.state.facilityState}</span>
                      <span> </span>
                      <span>{this.state.facilityZipCode}</span>
                    </div>
                    {this.state.facilityUrl !== "" && (
                      <div
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          maxHeight: "21px"
                        }}
                      >
                        <span
                          style={{
                            marginTop: "0px",
                            marginBottom: "0px",
                            maxHeight: "21px"
                          }}
                        >
                          {this.state.facilityUrl}
                        </span>
                      </div>
                    )}
                    <div
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        maxHeight: "21px"
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          maxHeight: "21px"
                        }}
                      >
                        {this.state.facilityEmail}
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        maxHeight: "21px"
                      }}
                    >
                      <span
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          maxHeight: "21px"
                        }}
                      >
                        {this.state.facilityPhone}
                      </span>
                    </div>
                  </React.Fragment>
                )}
              </Form.Item>
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
                onClick={this.handleSubmit(this.state.radioValue)}
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
                onClick={this.handleBack(3)}
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
