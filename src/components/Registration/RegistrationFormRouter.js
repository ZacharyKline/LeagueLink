import React, { Component } from "react";
import { Form } from "antd";

//There should be more naming consistency here.
import { SelectFacilityForm,
  ConfirmationPage,
  MissingFacilityInfo,
  MissingTeamInfo,
  RegisterFacilityForm,
  RegisterTeam,
  RegisterUserTypeForm,
  RegistrationForm,
  UserInfoForm,
  SelectTeamForm } from '.'

//wraps all the forms and handles routing them
//could also be done using actual url routing, but that's overkill
class RegisterRouter extends Component {
  //Linear order of form needs to be determined
  ParentForms  = [<SelectTeamForm />]
  CoachForms   = [<SelectFacilityForm />, <RegisterTeam />]
  ManagerForms = [<RegisterFacilityForm /> ]

  masterPath = [
    <UserInfoForm />,
    <RegisterUserTypeForm />,
    this.state.userSpecificForms || <ConfirmationPage />, //It looks like this isnt going to work with more than 1 as you can't return an unspread spread array. ex  return (...CoachForms)
    <ConfirmationPage />
  ]

  state = {
    formStep: 0 //This inits the Form to first index of masterPath aka <UserInfoForm />
  }
  
  //Do this if you don't want to handle form-data with redux. Depending on the implementation Redux is probably better
  handleChange = e => {
    this.setState({ FormData:
      { [e.target.name]: e.target.value }
    })
  }
  
  handleNext = e => {
    if(this.state.formStep < this.masterPath.length){
      this.setState({step: this.state.step + 1})
    }
  }
  
  handleBack = e => {
    this.checkMasterPath()

    if(this.state.formStep > 0){
      this.setState({step: this.state.step - 1})
    }
  }
  
  checkMasterPath = () => { 
    if(this.state.formStep < 2 && this.state.Remove){
      this.masterPath = this.masterPath.filter(path => {
        const mergedPaths = [...this.ParentForms, ...this.CoachForms, ...this.ManagerForms]
        if(mergedPaths.indexOf(path) === -1){
          return path
        }
      })
    }
  }

  //TODO Figure out where to put UserTypeForms so that they can be used in checkMasterPath and returned by <RegisterUserTypeForm />
  //Maybe stored on both? Maybe passed? Stored on the Store? pulled from a const? stored on index.js?
  setMasterPath = Forms = e => {
    this.masterPath = a1.splice(2, 0, ...Forms);
  }

  render() {
    const {
      Parent,
      Coach,
      Manager
    } = this.state

    //Still need to pass props & create function to return appropriate arr { here v }.
    console.log(this.props)
    return (
      <React.Fragment>
        {masterPath[this.state.formStep]}
      </React.Fragment>
    );
  }
}

//This Form.create Wraps the component to create a Higher Order Component and allows this component to access this.props.form
//See antd docs https://ant.design/components/form/ for why that's useful.
const FormWrapped = Form.create({name:"NewUser"})(RegisterRouter)
export default FormWrapped;