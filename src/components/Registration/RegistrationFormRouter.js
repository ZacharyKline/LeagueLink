import React, { Component } from "react";
import { Form } from "antd";
import { SelectFacilityForm,
  ConfirmationPage,
  MissingFacilityInfo,
  MissingTeamInfo,
  RegisterFacilityForm,
  RegisterTeam,
  RegisterUserTypeForm,
  RegistrationForm,
  UserInfoForm,
  SelectTeamForm} from '.'

//wraps all the forms and handles routing them
//could also be done using actual url routing, but that's overkill
class RegisterRouter extends Component {
  //Linear order of form needs to be determined
  state = {
    Parent : [<SelectTeamForm />, ],
    Coach  : [<SelectFacilityForm />, ],
    Manager: [<RegisterFacilityForm />, ],
    FormData: {},
    step: 0
  }
  
  //Do this if you don't want to handle form-data with redux. Depending on the implementation Redux is probably better
  handleChange = e => {
    this.setState({ FormData:
      { [e.target.name]: e.target.value }
    })
  }
  
  handleNext = e => {
    this.setState({step: this.state.step + 1})
  }
  
  handleBack = e => {
    this.setState({step: this.state.step - 1})    
  }

  render() {
    const {
      Parent,
      Coach,
      Manager
    } = this.state

    //Still need to pass props & create function to return appropriate arr { here v }.
    const masterPath = [<UserInfoForm />, <RegisterUserTypeForm />, Parent || Coach || Manager, <ConfirmationPage />]
    console.log(this.props)
    return (
      <React.Fragment>
        {masterPath[this.state.step]}
      </React.Fragment>
    );
  }
}

//This Form.create Wraps the component to create a Higher Order Component and allows this component to access this.props.form
//See antd docs https://ant.design/components/form/ for why that's useful.
const FormWrapped = Form.create({name:"NewUser"})(RegisterRouter)
export default FormWrapped;
