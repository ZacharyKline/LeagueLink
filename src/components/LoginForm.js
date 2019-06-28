import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
//import { Link } from "react-router-dom";
import { Button, Form, Input, Layout } from "antd";


//import "./index.css";

class LoginForm extends Component {
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
    var stylesForm = {
      color:'black',
      backgroundColor:'lightgrey',
      padding:'10px',
      border:'1px black dashed',
      width:'250px',
      marginLeft:'50px',
      marginTop:'100px'
    };
    return (
      <React.Fragment>
        <Layout>
        <Form style={stylesForm}>
        <h1>Login</h1>
          <label htmlFor="userName">Username</label>
          <Form.Item>
            
            <Input
              clasName={"stylee"}
              //style={}
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
                clasName={"stylee"}
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
          </Form.Item>
          <Form.Item>
            <Button 
            className={"btn"}
            type="submit" 
            disabled={isLoading} 
            onClick={this.handleLogin}>
              Login
            </Button>
          </Form.Item>
          {/*<Link to={'/registration'} className={"registerLink"}>Register</Link>*/}
          {isLoading && <Spinner name="circle" color="blue" />}
          {err && <p style={{ color: "red" }}>{err}</p>}

        </Form>
        </Layout>
        <Layout style={{height: "250px"}}>
        </Layout>
      </React.Fragment>
        );
      }
    }
    
    export default connect(
  ({auth}) => ({
          isLoading: auth.loginLoading,
        err: auth.loginError
      }),
  {login})(LoginForm);
