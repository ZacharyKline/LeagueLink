import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import { Button, Form, Input, Layout } from "antd";
import ForgotPasswordModal from "./ForgotPasswordModal";

//import "./index.css";

class LoginForm extends Component {
  state = { email: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
    console.log("test1");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleForgotPassword = e => {
    e.preventDefault();
    this.setState({ showModal: true });
  };

  handleModalClose = e => {
    e.preventDefault();
    this.setState({ showModal: false });
  };

  render() {
    const { handleChange } = this;
    const { isLoading, err } = this.props;
    /*var stylesForm = {
      color:'black',
      backgroundColor:'lightgrey',
      padding:'10px',
      border:'1px black dashed',
      width:'250px',
      marginLeft:'50px',
      marginTop:'100px'
    };*/
    return (
      <React.Fragment>
        <Layout>
          <Form
            className="myStyle"
            style={{
              color: "rgba(0, 53, 89, 1)",
              backgroundColor: "rgb(74, 162, 197)",
              padding: "20px",
              border: "5px rgba(0, 53, 89, 1) solid",
              borderRadius: "5px",
              width: "400px",
              display: "flex",
              flexDirection: "column",
              margin: "40px auto"
            }}
          >
            <h1
              style={{
                background: "rgba(0, 53, 89, 1)",
                color: "rgb(161, 233, 29)",
                border: "3px rgb(130, 184, 31) solid",
                borderRadius: "25px",
                textAlign: "center",
                width: "100%"
              }}
            >
              Login
            </h1>
            <br />
            <Form.Item>
              <Input
                className="stylee"
                addonBefore="Email"
                type="email"
                name="email"
                autoFocus
                required
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                className="stylee"
                addonBefore="Password"
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item style={{ marginLeft: "230px" }}>
              <Button
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
                type="submit"
                // disabled={isLoading}
                onClick={this.handleLogin}
              >
                Submit
              </Button>
              <br />
              <Button
                onClick={this.handleForgotPassword}
                style={{
                  backgroundColor: "rgb(74, 162, 197)",
                  color: "rgb(161, 233, 29)",
                  border: "0px rgb(74, 162, 197) solid",
                  borderRadius: "25px",
                  minWidth: "120px"
                }}
              >
                Forgot Password
              </Button>
            </Form.Item>
            <Link
              to={"/registration"}
              className={"registerLink"}
              style={{
                background:
                  "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                color: "rgb(161, 233, 29)",
                border: "2px rgb(130, 184, 31) solid",
                borderRadius: "25px",
                fontSize: "large",
                textAlign: "center",
                marginLeft: "235px",
                width: "120px"
              }}
            >
              Register
            </Link>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
          </Form>
        </Layout>
        <ForgotPasswordModal
          visible={this.state.showModal}
          Loading={isLoading}
          close={this.handleModalClose}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
