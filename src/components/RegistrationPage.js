import { RegistrationForm } from ".";
import React, { Component } from "react";
import { Layout } from 'antd'
import "../App.css";
/*import { connect } from "react-redux";
import { registerUser as register } from "../actions";
import { Input, Form, Icon, Radio } from "antd";
import Spinner from "react-spinkit";

import { RegisterHeader } from ".";
import teams from "../teams.json";*/

export default class RegistrationPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout
          style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundSize: '100ev',
          marginBottom: 0
          }}
        >
        <div
            className='welcomeBox'
            // style={{
            //   color: "rgba(0, 53, 89, 1)",
            //   backgroundColor: "rgba(0, 53, 89, 1)",
            //   backgroundSize: 'cover',
            //   padding: "20px",
            //   border: "5px rgba(0, 53, 89, 1) solid",
            //   borderRadius: "5px",
            //   width: "60%",
            //   height: '100ev',
            //   display: "flex",
            //   flexDirection: "column",
            //   margin: '2ev',
            //   minWidth: '40%'
            // }}
          ></div>
          <RegistrationForm />
        </Layout>
      </React.Fragment>
    );
  }
}
