import { Navbar, RegistrationForm } from "."
import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser as register } from "../actions";
import { Input, Form, Icon, Radio } from "antd";
import Spinner from "react-spinkit";
import "../App.css";
import { RegisterHeader } from ".";
import teams from "../teams.json";


export default class RegistrationPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <RegistrationForm />
      </React.Fragment>
    )
  }
}