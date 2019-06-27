import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">Login Page</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/home">Calendar Page</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/profile">Profile Page</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/registration">Registration Page</Link>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default Navbar;
