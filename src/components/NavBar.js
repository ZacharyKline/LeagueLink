import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Logout } from ".";

class Navbar extends Component {
  render() {
    const { login } = this.props;

    return (
      <React.Fragment>
        <div
          style={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Menu
            mode="horizontal"
            style={{
              background: "linear-gradient(rgb(8, 77, 121),rgba(0, 53, 89, 1))",
              color: "rgb(161, 233, 29)",
              border: "3px rgb(130, 184, 31) solid",
              borderRadius: "25px",
              fontSize: "large",
              minWidth: "700px",
              maxWidth: "70%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            {false && (
              <Menu.Item>
                {/* <Link to="/home" style={{ color: "rgb(161, 233, 29)" }}>
              Calendar Page
            </Link> */}
              </Menu.Item>
            )}
            {login !== null && (
              <Menu.Item>
                <Link to="/conflicts" style={{ color: "rgb(161, 233, 29)" }}>
                  My Conflicts
                </Link>
              </Menu.Item>
            )}
            {login !== null && (
              <Menu.Item>
                <Link
                  to="/teamconflicts"
                  style={{ color: "rgb(161, 233, 29)" }}
                >
                  Team Conflicts
                </Link>
              </Menu.Item>
            )}
            {login !== null && (
              <Menu.Item>
                <Link to="/profile" style={{ color: "rgb(161, 233, 29)" }}>
                  Profile Page
                </Link>
              </Menu.Item>
            )}
            {login === null && (
              <Menu.Item>
                <Link to="/registration" style={{ color: "rgb(161, 233, 29)" }}>
                  Registration Page
                </Link>
              </Menu.Item>
            )}
            {login === null && (
              <Menu.Item>
                <Link to="/" style={{ color: "rgb(161, 233, 29)" }}>
                  Login Page
                </Link>
              </Menu.Item>
            )}
            {login !== null && (
              <Menu.Item>
                <div>
                  <Icon type="logout" />
                  <Logout />
                </div>
              </Menu.Item>
            )}
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.login
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
