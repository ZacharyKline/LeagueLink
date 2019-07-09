import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createUser,
  createUserThenLoginThenAddUserIdToTeamTheRedirect,
  createUserThenLoginThenCreateTeamThenAddTeamIdToCoachThenAddTeamIdToFacilityThenRedirect,
  createUserThenLoginThenCreateFacilityThenAddFacilityIdToUserThenRedirect
} from "../actions";
import Spinner from "react-spinkit";
import "../App.css";
import {
  RegisterUserInformationForm,
  RegisterUserTypeForm,
  RegisterParentSelectTeamsForm,
  RegisterCoachSelectFacilityForm,
  RegisterMissingFacilityForm,
  RegisterMissingTeamInformation,
  RegisterCoachRegisterTeamForm,
  RegisterManagerRegisterFacilityForm,
  RegisterConfirmationPageForm
} from ".";
import teams from "../teams.json";
import coaches from "../coaches.json";
import facilities from "../facilities.json";
import managers from "../managers.json";
import "../registration.css";

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
    selectedFacilityId: null,
    facilityName: "",
    facilityAddress: "",
    facilityCity: "",
    facilityState: "",
    facilityZipCode: "",
    facilityPhone: "",
    facilityEmail: "",
    facilityUrl: "",
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

  handleSubmit = userType => e => {
    e.preventDefault();
    const fullName = this.state.firstName + " " + this.state.lastName;
    const facilityObj = {};
    if (userType === "manager") {
      facilityObj.name = this.state.facilityName;
      facilityObj.email = this.state.facilityEmail;
      facilityObj.url = this.state.facilityUrl;
      facilityObj.streetAddress = this.state.facilityAddress;
      facilityObj.city = this.state.facilityCity;
      facilityObj.theState = this.state.facilityState;
      facilityObj.zipCode = this.state.facilityZipCode;
    }
    const teamObj = {};
    if (userType === "coach") {
      teamObj.name = this.state.teamName;
      teamObj.ageGroup = this.state.ageGroup;
      teamObj.facilityId = this.state.selectedFacilityId;
    }
    const userObj = {
      fullName: fullName,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      userType: this.state.userType
    };

    switch (userType) {
      case "parent":
        userObj.teamIds = this.state.selectedTeamIds;
        console.log(userObj);
        console.log(
          "Create Parent, Login In User,Add Parent ID to Team, Redirect to Profile page"
        );

        //this.props.registerParent(userObj);
        break;
      case "coach":
        userObj.facilityId = this.state.selectedFacilityId;
        console.log(userObj);
        console.log(teamObj);
        console.log(
          "Create Coach, Login In User, Create Team, Add Team ID to Facility, Add Team ID to Coach, Redirect to Profile Page"
        );
        this.props.registerCoach(userObj, teamObj);
        break;
      case "manager":
        console.log(
          "Create Manager, Login In User, Create Facility, Add Facility ID to Manager, Add ManagerId to Facility, redirect to profile page"
        );
        this.props.registerManager(userObj, facilityObj);
        break;
      default:
        console.log("err");
        break;
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
          missingFacilityForm: true,
          selectedFacilityId: null
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

  handleStaySelected = teamId => {
    return this.state.selectedTeamIds.includes(teamId);
  };

  handleSelectFacility = e => {
    this.setState({ selectedFacilityId: e.target.value });
  };

  render() {
    const {
      handleChange,
      handleNext,
      handleBack,
      handleRadioClick,
      handleStaySelected,
      handleSelectTeam,
      handleSelectFacility,
      handleSubmit
    } = this;
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      userInformationForm,
      userTypeForm,
      userType,
      parentSelectTeamsForm,
      coachSelectFacilityForm,
      selectedFacilityId,
      missingFacilityForm,
      missingTeamInformation,
      coachRegisterTeamForm,
      teamName,
      ageGroup,
      managerRegisterFacilityForm,
      facilityAddress,
      facilityCity,
      facilityEmail,
      facilityName,
      facilityPhone,
      facilityState,
      facilityUrl,
      facilityZipCode,
      confirmationPageForm,
      selectedTeamIds
    } = this.state;
    const { isLoading, err } = this.props;

    return (
      <React.Fragment>
        {userInformationForm && (
          <RegisterUserInformationForm
            handleChange={handleChange}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            password={password}
            confirmPassword={confirmPassword}
            handleNext={handleNext("toUserTypeForm")}
          />
        )}

        {userTypeForm && (
          <RegisterUserTypeForm
            handleRadioClick={handleRadioClick}
            userType={userType}
            handleNext={handleNext(userType)}
            handleBack={handleBack("ToUserInformationForm")}
          />
        )}

        {parentSelectTeamsForm && (
          <RegisterParentSelectTeamsForm
            teams={teams}
            coaches={coaches}
            handleStaySelected={handleStaySelected}
            handleSelectTeam={handleSelectTeam}
            handleNext2={handleNext("toMissingTeamInformationPage")}
            handleNext={handleNext("toConfirmationPageForm")}
            handleBack={handleBack("toUserTypeForm")}
          />
        )}

        {coachSelectFacilityForm && (
          <RegisterCoachSelectFacilityForm
            facilities={facilities}
            managers={managers}
            selectedFacilityId={selectedFacilityId}
            handleSelectFacility={handleSelectFacility}
            handleNext2={handleNext("toMissingFacilityPage")}
            handleNext={handleNext("toCoachRegisterTeamForm")}
            handleBack={handleBack("toUserTypeForm")}
          />
        )}

        {missingFacilityForm && (
          <RegisterMissingFacilityForm
            handleNext={handleNext("toCoachRegisterTeamForm")}
            handleBack={handleBack("toCoachSelectFacilityForm")}
          />
        )}

        {missingTeamInformation && (
          <RegisterMissingTeamInformation
            handleBack={handleBack("parent")}
            handleNext={handleNext("toConfirmationPageForm")}
          />
        )}

        {coachRegisterTeamForm && (
          <RegisterCoachRegisterTeamForm
            handleChange={handleChange}
            handleNext={handleNext("toConfirmationPageForm")}
            handleBack={handleBack("toCoachSelectFacilityForm")}
            teamName={teamName}
            ageGroup={ageGroup}
          />
        )}

        {managerRegisterFacilityForm && (
          <RegisterManagerRegisterFacilityForm
            handleChange={handleChange}
            facilityName={facilityName}
            facilityAddress={facilityAddress}
            facilityCity={facilityCity}
            facilityState={facilityState}
            facilityZipCode={facilityZipCode}
            facilityUrl={facilityUrl}
            facilityEmail={facilityEmail}
            facilityPhone={facilityPhone}
            handleNext={handleNext("toConfirmationPageForm")}
            handleBack={handleBack("toUserTypeForm")}
          />
        )}

        {confirmationPageForm && (
          <RegisterConfirmationPageForm
            teams={teams}
            coaches={coaches}
            facilities={facilities}
            managers={managers}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            userType={userType}
            selectedTeamIds={selectedTeamIds}
            teamName={teamName}
            ageGroup={ageGroup}
            selectedFacilityId={selectedFacilityId}
            facilityAddress={facilityAddress}
            facilityCity={facilityCity}
            facilityEmail={facilityEmail}
            facilityName={facilityName}
            facilityPhone={facilityPhone}
            facilityState={facilityState}
            facilityUrl={facilityUrl}
            facilityZipCode={facilityZipCode}
            handleBack={handleBack(userType)}
            handleSubmit={handleSubmit(userType)}
          />
        )}

        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    facilityId: state.facilities.facilityId,
    userId: state.users.userId
  };
};

const mapDispatchToProps = {
  createUser,
  registerParent: createUserThenLoginThenAddUserIdToTeamTheRedirect,
  registerCoach: createUserThenLoginThenCreateTeamThenAddTeamIdToCoachThenAddTeamIdToFacilityThenRedirect,
  registerManager: createUserThenLoginThenCreateFacilityThenAddFacilityIdToUserThenRedirect
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
