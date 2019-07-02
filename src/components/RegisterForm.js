import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser as register } from "../actions";
import { Input, Form, Icon, Radio } from "antd";
import Spinner from "react-spinkit";
import "../App.css";
import { RegisterHeader } from ".";
import teams from "../teams.json";
//import { tsImportEqualsDeclaration } from "@babel/types";
import coaches from "../coaches.json";
import facilities from "../facilities.json";
import managers from "../managers.json";

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
    selectedTeamIds: [],
    selectedCoachIds: [],
    selectedFacilityId: null,
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
    userInformationForm: true,
    userTypeForm: false,
    parentSelectTeamsForm: false,
    coachSelectFacilityForm: false,
    coachRegisterTeamForm: false,
    managerRegisterFacilityForm: false,
    confirmationPageForm: false,
    missingTeamInformation: false,
    missingFacilityForm: false,
    userType: "parent"
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

  handleSubmit = userType => e => {
    if (userType === "parent") {
      console.log("Create Parent, Add Parent ID to Coach");
    } else if (userType === "coach") {
      console.log("Create Coach, Create Team, Add Coach ID to Facility");
    } else if (userType === "manager") {
      console.log("Create Manager, Create Facility");
    }
  };

  handleNext = whereTo => e => {
    //e.preventDefault();
    switch (whereTo) {
      case "toUserTypeForm":
        if (
          this.state.firstName !== "" &&
          this.state.lastName !== "" &&
          this.state.email !== "" &&
          this.state.phone !== "" &&
          this.state.password !== "" &&
          this.state.confirmPassword === this.state.password
        ) {
          return this.setState({
            userInformationForm: false,
            userTypeForm: true
          });
        } else {
          return this.setState({ userInformationForm: true });
        }
      case "parent":
        return this.setState({
          userTypeForm: false,
          parentSelectTeamsForm: true
        });

      case "coach":
        return this.setState({
          userTypeForm: false,
          coachSelectFacilityForm: true,
          missingFacilityForm: false
        });
      case "manager":
        return this.setState({
          userTypeForm: false,
          managerRegisterFacilityForm: true
        });
      case "toCoachRegisterTeamForm":
        return this.setState({
          coachSelectFacilityForm: false,
          coachRegisterTeamForm: true,
          missingFacilityForm: false
        });
      case "toConfirmationPageForm":
        if (this.state.userType === "manager") {
          if (
            this.state.facilityName !== "" &&
            this.state.facilityAddress !== "" &&
            this.state.facilityCity !== "" &&
            this.state.facilityState !== "" &&
            this.state.facilityZipCode !== "" &&
            this.state.facilityEmail !== "" &&
            this.state.facilityPhone !== ""
          ) {
            return this.setState({
              parentSelectTeamsForm: false,
              coachRegisterTeamForm: false,
              managerRegisterFacilityForm: false,
              confirmationPageForm: true
            });
          } else {
            return this.setState({
              managerRegisterFacilityForm: true
            });
          }
        }
        if (this.state.userType === "coach") {
          if (this.state.teamName !== "" && this.state.ageGroup !== "") {
            return this.setState({
              parentSelectTeamsForm: false,
              coachRegisterTeamForm: false,
              managerRegisterFacilityForm: false,
              confirmationPageForm: true,
              missingFacilityForm: false
            });
          } else {
            return this.setState({
              coachRegisterTeamForm: true
            });
          }
        }
        return this.setState({
          parentSelectTeamsForm: false,
          coachRegisterTeamForm: false,
          managerRegisterFacilityForm: false,
          missingTeamInformation: false,
          confirmationPageForm: true
        });
      case "toMissingTeamInformationPage":
        return this.setState({
          parentSelectTeamsForm: false,
          missingTeamInformation: true
        });
      case "toMissingFacilityPage":
        return this.setState({
          coachSelectFacilityForm: false,
          missingFacilityForm: true
        });
      default:
        return this.state;
    }
  };

  handleBack = whereTo => e => {
    e.preventDefault();
    switch (whereTo) {
      case "ToUserInformationForm":
        return this.setState({
          userInformationForm: true,
          userTypeForm: false
        });
      case "toUserTypeForm":
        return this.setState({
          parentSelectTeamsForm: false,
          coachSelectFacilityForm: false,
          managerRegisterFacilityForm: false,
          userTypeForm: true
        });
      case "toCoachSelectFacilityForm":
        return this.setState({
          coachRegisterTeamForm: false,
          coachSelectFacilityForm: true,
          missingFacilityForm: false
        });
      case "parent":
        return this.setState({
          confirmationPageForm: false,
          parentSelectTeamsForm: true,
          missingTeamInformation: false
        });
      case "coach":
        return this.setState({
          confirmationPageForm: false,
          coachRegisterTeamForm: true
        });
      case "manager":
        return this.setState({
          confirmationPageForm: false,
          managerRegisterFacilityForm: true
        });
      case "toMissingTeamInformationPage":
        return this.setState({
          parentSelectTeamsForm: false,
          missingTeamInformation: true
        });
      case "toMissingFacilityPage":
        return this.setState({
          coachSelectFacilityForm: false,
          missingFacilityForm: true
        });
      default:
        return this.state;
    }
  };

  handleChange = e => {
    this.setState({ passwordMatch: true });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRadioClick = e => {
    this.setState({
      userType: e.target.value
    });
  };

  handleSelectTeam = teamId => e => {
    if (this.state.selectedTeamIds.includes(teamId)) {
      const filteredTeams = this.state.selectedTeamIds.filter(
        id => id !== teamId
      );

      return this.setState({ selectedTeamIds: filteredTeams });
    } else {
      const newTeams = [...this.state.selectedTeamIds, teamId];
      return this.setState({ selectedTeamIds: newTeams });
    }
  };

  handleSelectFacility = e => {
    this.setState({ selectedFacilityId: e.target.value });
  };

  render() {
    const { handleChange } = this;
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
        {this.state.userInformationForm && (
          <Form style={stylesForm} id="userInformation">
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
                onClick={this.handleNext("toUserTypeForm")}
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

        {this.state.userTypeForm && (
          <Form style={stylesForm} id="userTypeForm">
            <RegisterHeader text={"Are you a..."} />
            <div
              style={{
                background: "rgba(0, 53, 89, 1)",
                borderRadius: "5px"
              }}
            >
              <Radio.Group
                onChange={this.handleRadioClick}
                value={this.state.userType}
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
                <Radio checked style={radioStyle} value={"parent"}>
                  Athlete / Athlete's Legal Guardian?
                </Radio>
                <Radio style={radioStyle} value={"coach"}>
                  Coach?
                </Radio>
                <Radio style={radioStyle} value={"manager"}>
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
                onClick={this.handleNext(this.state.userType)}
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
                onClick={this.handleBack("ToUserInformationForm")}
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

        {this.state.parentSelectTeamsForm && (
          <Form style={stylesForm} id="parentSelectTeams">
            <RegisterHeader text={"Select your Team(s)"} />
            <div
              style={{
                background: "rgba(0, 53, 89, 1)",
                borderRadius: "5px",
                paddingTop: "10px"
              }}
            >
              <ul style={{ listStyle: "none" }}>
                {teams.map(team => {
                  let index = coaches.findIndex(
                    coach => coach.id === team.coachIds[0]
                  );
                  let currentCoachName = coaches[index].name;
                  return (
                    <li
                      key={team.id}
                      style={{
                        color: "rgb(161, 233, 29)",
                        display: "flex",
                        flexDirection: "row"
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          name="team"
                          onClick={this.handleSelectTeam(team.id)}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flex: "row",
                          flexWrap: "wrap"
                        }}
                      >
                        <div style={{ paddingLeft: "10px" }}>
                          <span>
                            <b> Team: </b>
                            {team.name}
                          </span>
                        </div>
                        <div style={{ paddingLeft: "10px" }}>
                          <span>
                            {" "}
                            <b>Age Group: </b>
                            {team.ageGroup}
                          </span>
                        </div>
                        <div style={{ paddingLeft: "10px" }}>
                          <span>
                            {" "}
                            <b>Coach:</b> {currentCoachName}
                          </span>
                        </div>
                      </div>
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
            <br />
            <button
              type="submit"
              onClick={this.handleNext("toMissingTeamInformationPage")}
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
              I do not see my team listed here.
            </button>
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
                onClick={this.handleNext("toConfirmationPageForm")}
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
                onClick={this.handleBack("toUserTypeForm")}
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

        {this.state.coachSelectFacilityForm && (
          <Form style={stylesForm} id="coachSelectFacility">
            <RegisterHeader text={"Select your Facility"} />
            <div
              style={{
                background: "rgba(0, 53, 89, 1)",
                borderRadius: "5px",
                paddingTop: "10px"
              }}
            >
              <Radio.Group
                value={this.state.selectedFacilityId}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "15px",
                  paddingLeft: "30px",
                  fontSize: "large"
                }}
                onChange={this.handleSelectFacility}
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
                      style={{
                        color: "rgb(161, 233, 29)",
                        display: "flex",
                        flexDirection: "row"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flex: "row",
                          flexWrap: "wrap"
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: "10px"
                          }}
                        >
                          <span>
                            <b> {facility.name} </b>
                          </span>
                        </div>
                        <div style={{ paddingLeft: "10px" }}>
                          <span>
                            {facility.address} {facility.city}, {facility.state}{" "}
                            {facility.zipCode}
                          </span>
                        </div>
                        <div style={{ paddingLeft: "10px" }}>
                          {facility.phone}
                        </div>
                        <div style={{ paddingLeft: "10px" }}>
                          {facility.email}
                        </div>
                        <div style={{ paddingLeft: "10px" }}>
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
            <button
              type="submit"
              onClick={this.handleNext("toMissingFacilityPage")}
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
              I do not see the facility listed here.
            </button>
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
                onClick={this.handleNext("toCoachRegisterTeamForm")}
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
                onClick={this.handleBack("toUserTypeForm")}
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

        {this.state.missingFacilityForm && (
          <Form style={stylesForm} id="missingFacilityForm">
            <div
              style={{
                background: "rgba(0, 53, 89, 1)",
                borderRadius: "5px",
                paddingTop: "10px",
                color: "rgb(161, 233, 29)"
              }}
            >
              <h3 style={{ padding: "20px", color: "rgb(161, 233, 29)" }}>
                Please check with your league manager to make sure your facility
                has been registered under the correct name.{" "}
              </h3>
              <h3 style={{ padding: "20px", color: "rgb(161, 233, 29)" }}>
                You may finish registration at this time without linking your
                account to a facility.
              </h3>{" "}
              <h3 style={{ padding: "20px", color: "rgb(161, 233, 29)" }}>
                You may link a facility to your account from the edit account
                page in the future.
              </h3>
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
                onClick={this.handleNext("toCoachRegisterTeamForm")}
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
                onClick={this.handleBack("toCoachSelectFacilityForm")}
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

        {this.state.missingTeamInformation && (
          <Form style={stylesForm} id="missingTeamInformation">
            <div
              style={{
                background: "rgba(0, 53, 89, 1)",
                borderRadius: "5px",
                paddingTop: "10px",
                color: "rgb(161, 233, 29)"
              }}
            >
              <h3 style={{ padding: "20px", color: "rgb(161, 233, 29)" }}>
                Please check with your coach to confirm the team name that your
                team has been registered.{" "}
              </h3>
              <h3 style={{ padding: "20px", color: "rgb(161, 233, 29)" }}>
                You may finish registration at this time without linking your
                account to a team.
              </h3>{" "}
              <h3 style={{ padding: "20px", color: "rgb(161, 233, 29)" }}>
                Be sure to link your account to a team from the edit account
                page in the future.
              </h3>
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
                onClick={this.handleNext("toConfirmationPageForm")}
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
                onClick={this.handleBack("parent")}
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

        {this.state.coachRegisterTeamForm && (
          <Form style={stylesForm} id="coachRegisterTeam">
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
                onClick={this.handleNext("toConfirmationPageForm")}
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
                onClick={this.handleBack("toCoachSelectFacilityForm")}
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

        {this.state.managerRegisterFacilityForm && (
          <Form style={stylesForm} id="managerRegisterFacility">
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
                onClick={this.handleNext("toConfirmationPageForm")}
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
                onClick={this.handleBack("toUserTypeForm")}
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

        {this.state.confirmationPageForm || (
          <Form style={stylesForm} id="confirmationPage">
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
                    <b>{this.state.firstName} </b>
                  </span>
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
                {this.state.userType === "parent" &&
                  this.state.selectedTeamIds.length === 0 && (
                    <div
                      style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        maxHeight: "21px"
                      }}
                    >
                      <span>Account not linked to Team</span>
                    </div>
                  )}
                {this.state.userType === "parent" &&
                  this.state.selectedTeamIds.length > 0 && (
                    <ul style={{ listStyle: "none" }}>
                      {this.state.selectedTeamIds.map(selectedId => {
                        let currentTeam = teams.filter(
                          team => team.id === selectedId
                        );
                        console.log(currentTeam);

                        return (
                          <li key={currentTeam.id}>
                            <span>{currentTeam.name}</span>
                            <span>{currentTeam.ageGroup}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                {false && this.state.userType === "coach" && (
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
                {this.state.userType === "manager" && (
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
                onClick={this.handleSubmit(this.state.userType)}
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
                onClick={this.handleBack(this.state.userType)}
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
