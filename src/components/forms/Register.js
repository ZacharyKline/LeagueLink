import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser as register } from "../../actions";
import {
  Button,
  Input,
  Form,
} from 'antd'
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";


class RegisterForm extends Component {
  state = { username: "", password: "", displayname: "", confirmPassword: "", passwordMatch: true };
  handleRegister = e => {
    e.preventDefault()

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ passwordMatch: false })
    } else {
      this.props.register({ username: this.state.username, password: this.state.password, displayName: this.state.displayname })
    }
  }

  handleChange = e => {
    this.setState({ passwordMatch: true })
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { handleRegister, handleChange } = this
    const { passwordMatch } = this.state
    const { isLoading, err } = this.props;
    var stylesForm = {
      color:'black',
      backgroundColor:'lightgrey',
      padding:'10px',
      border:'1px black dashed',
      width:'250px',
      marginLeft:'550px',
      marginTop:'100px'
    };

    return (
      <React.Fragment>
        <h1
        style={{
          background: "rgba(0, 53, 89, 1)",
          color: "rgb(161, 233, 29)",
          border: "3px rgb(130, 184, 31) solid",
          borderRadius: "25px",
          textAlign: "center",
          width: "100%"
        }}>this is the header</h1>
        <h1> Registration page </h1>
        <Form style={stylesForm}>
        <h1>Register</h1>
          <label htmlFor="userName">Username</label>
          <Form.Item>
            
            <Input
              type="text"
              name="username"
              autoFocus
              required
              onChange={handleChange}
            />
          </Form.Item>
          <label htmlFor="displayName">Display Name</label>
          <Form.Item>
            
            <Input
              type="text"
              name="displayname"
              required
              onChange={handleChange}
            />
          </Form.Item>
          <label htmlFor="password">Password</label>
          <Form.Item>
            
            <Input
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </Form.Item>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Form.Item>
            
            <Input
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Button 
            onClick={handleRegister}
            type="submit" 
            disabled={isLoading}>
              Register
            </Button>
          </Form.Item>
          <Link to={'/'} className={"registerLink"}>Login</Link>

        </Form>

        {!passwordMatch && <p style={{ color: 'red' }}>passwords do not match</p>}
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.registerLoading,
    err: auth.registerError
  }),
  { register }
)(RegisterForm);