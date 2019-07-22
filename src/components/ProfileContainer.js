import React, { Component } from "react";
import { getUserById } from "../actions";
import { connect } from "react-redux";
import Profile from "./Pages/ProfilePage";
import CoachProfile from "./CoachProfile";
import FacilityManagerProfile from "./FacilityManagerProfile";

class ProfileContainer extends Component {
  render() {
    const { userLevel } = this.props;

    if (userLevel === "parent") {
      return <Profile />;
    } else if (userLevel === "coach") {
      return <CoachProfile />;
    } else if (userLevel === "manager") {
      return <FacilityManagerProfile />;
    } else {
      return <Profile />;
    }
  }
}

function mapStateToProps({ auth }) {
  return {
    userLevel: auth.user.userType
  };
}
const mapDispatchToProps = {
  getUserById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
