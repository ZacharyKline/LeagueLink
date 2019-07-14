import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Logout } from ".";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu
          mode="horizontal"
          style={{
            background: "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
            color: "rgb(161, 233, 29)",
            border: "2px rgb(130, 184, 31) solid",
            borderRadius: "25px",
            fontSize: "large",
            minWidth: "120px"
          }}
        >
          <Menu.Item>
            <Link to="/" style={{ color: "rgb(161, 233, 29)" }}>
              Login Page
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/home" style={{ color: "rgb(161, 233, 29)" }}>
              Calendar Page
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/conflicts" style={{ color: "rgb(161, 233, 29)" }}>
              Conflicts
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/profile" style={{ color: "rgb(161, 233, 29)" }}>
              Profile Page
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/registration" style={{ color: "rgb(161, 233, 29)" }}>
              Registration Page
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/conflicts" style={{ color: "rgb(161, 233, 29)" }}>
              Conflicts
            </Link>
          </Menu.Item>
          <Menu.Item>
            <div>
              <Icon type="logout" />
              <Logout />
            </div>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

export default Navbar;
