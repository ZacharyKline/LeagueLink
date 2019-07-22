import { RegistrationForm } from "..";
import React, { Component } from "react";
import { Layout } from "antd";
import "../../App.css";
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
          className="something"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // backgroundSize: "100ev",
            marginBottom: 0
          }}
        >
          <div className="welcomeBox">
            <div
              style={
                {
                  //display: "flex",
                  //flexDirection: "row",
                  // justifyContent: "center"
                }
              }
            >
              <img
                src="./LeagueLinkLogo.png"
                alt=""
                width="230px"
                height="230px"
                style={{
                  float: "left",
                  margin: "60px",
                  marginRight: "0px",
                  marginTop: "30px"
                }}
              />
              <h1
                className="welcomeText"
                style={{
                  marginLeft: "0px",
                  paddingLeft: "0px",
                  paddingBottom: "0px",
                  marginBottom: "0px"
                }}
              >
                <b>
                  Welcome to
                  <br />
                  League Link:
                </b>
              </h1>
              <h2 className="welcomeText" style={{ fontSize: "45px" }}>
                <i>finding times that work</i>
              </h2>
            </div>
            <p className="welcomeExplain">
              League Link coordinates schedules to quickly find the best times
              for games and practices.
            </p>
            <ul className="welcomeExplain">
              <li>
                My Conflicts - Mark conflicts as inconvienient or impossible.
                (Athletes & Coaches)
              </li>
              <li>
                Team Conflicts - View Athletes' conflicts and mark conflicts for
                the team. (Coaches)
              </li>
              <li>
                Match Conflicts - Combine the conflicts of two teams to find the
                remaining times that work for them both. (Coaches and Managers)
              </li>
              <li>Easy to use user profile</li>
              <li>and more features coming!</li>
            </ul>
            <div className="welcomeExplain">Thank you for your support!</div>
          </div>
          <RegistrationForm />
        </Layout>
      </React.Fragment>
    );
  }
}
