import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import ForgotPassword from "./ForgotPasswordModal"
import { Button, Form, Input, Layout } from "antd";

class Login extends Component {
  state = { username: "", password: "", showModal: false };

  handleLogin = e => {
    e.preventDefault();
    const { username, password } = this.state
    this.props.login({ username, password });
    console.log("test1")
  };

  handleForgotPassword = e => {
    e.preventDefault()
    this.setState({showModal:true})
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  render() {
    const { handleChange } = this
    const { isLoading, err } = this.props;
    return (
      <React.Fragment>
        <Layout>
          <Form className="myStyle">
            <h1>Login</h1>
            <label htmlFor="userName">Username</label>
            <Form.Item>

              <Input
                className="stylee"
                type="text"
                name="username"
                autoFocus
                required
                onChange={handleChange}
              />
            </Form.Item >
            <label htmlFor="password">Password</label>
            <Form.Item>

              <Input
                className="stylee"
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="submit"
                disabled={isLoading}
                onClick={this.handleLogin}>
                Login
            </Button>
            <br />
            <Button onClick={this.handleForgotPassword}>Forgot Password </Button>
            </Form.Item>
            <Link to={'/registration'} className={"registerLink"}>Register</Link>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
          </Form>
        </Layout>
        <ForgotPassword visible={this.state.showModal} Loading={isLoading}/>

      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login })(Login);
