import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../../actions";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import { Button, Form, Input, Layout } from "antd";

class Login extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
    console.log("test1")
  };

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
            <Link className="ant-btn btn ant-btn-submit"> Forgot Password </Link>
            </Form.Item>
            <Link to={'/registration'} className={"registerLink"}>Register</Link>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}

          </Form>
        </Layout>

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
