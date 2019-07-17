import React, { Component } from "react";
import { getUserById } from "../actions";
import { connect } from "react-redux";
import Profile from "./ProfilePage"

 class ProfileContainer extends Component{
    
    render(){
        const {userLevel} = this.props

        if(userLevel === parent){
            return(
                <Profile />
            )
        }else if(userLevel === coaches){
            return(
                <Profile />
            )
        }else if(userLevel === managers){
            return(
                <Profile />
            )
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