import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import { Button, Form, Input, Layout, Icon } from "antd";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { RegisterHeader } from ".";

//import "./index.css";

class LoginForm extends Component {
  state = { email: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
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

    return (
      <React.Fragment>
        <Layout>
          <Form
            className="myStyle"
            onSubmit={this.handleLogin}
            style={{
              color: "rgba(0, 53, 89, 1)",
              backgroundColor: "rgb(74, 162, 197)",
              padding: "20px",
              border: "5px rgba(0, 53, 89, 1) solid",
              borderRadius: "5px",
              width: "390px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              margin: "200px auto"
              //marginLeft: "40px"
            }}
            // className="stylesForm"
          >
            <RegisterHeader text={"Login"} />
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
              <Input.Password
                className="stylee"
                addonBefore="Password"
                type="password"
                name="password"
                required
                onChange={handleChange}
                onKeyPress={e => {
                  if (e.key === "Enter") this.handleLogin(e);
                }}
              />
            </Form.Item>

            <div className="buttonContainerDiv">
              <Button
                onClick={this.handleLogin}
                type="submit"
                style={{
                  background:
                    "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
                  color: "rgb(161, 233, 29)",
                  border: "2px rgb(130, 184, 31) solid",
                  borderRadius: "25px",
                  fontSize: "large",
                  minWidth: "120px"
                }}
                className="buttonStyle"
                // disabled={isLoading}
              >
                Login
                <Icon type="right" />
              </Button>
              <p>
                <i>- or -</i>
              </p>
              <Link
                to={"/registration"}
                className="buttonStyle"
                style={{
                  height: "32px",
                  width: "73px",
                  textAlign: "center"
                }}
              >
                <Icon type="left" /> Register
              </Link>
            </div>

            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
          </Form>
        </Layout>

        {false && (
          <ForgotPasswordModal
            visible={this.state.showModal}
            Loading={isLoading}
            close={this.handleModalClose}
          />
        )}
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
