import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Logout } from ".";
import "./css/userConflicts.css";

class Navbar extends Component {
  render() {
    const { userType } = this.props;

    return (
      <React.Fragment>
        <div className="menuContainerDiv">
          <Menu className="menuStyle" mode="horizontal">
            {false && (
              <Menu.Item>
                {/* <Link to="/home" style={{ color: "rgb(161, 233, 29)" }}>
              Calendar Page
            </Link> */}
              </Menu.Item>
            )}
            {userType !== "manager" && (
              <Menu.Item>
                <Link to="/conflicts" style={{ color: "rgb(161, 233, 29)" }}>
                  My Conflicts
                </Link>
              </Menu.Item>
            )}
            {userType === "coach" && (
              <Menu.Item>
                <Link
                  to="/teamconflicts"
                  style={{ color: "rgb(161, 233, 29)" }}
                >
                  Team Conflicts
                </Link>
              </Menu.Item>
            )}
            {userType !== "parent" && (
              <Menu.Item>
                <Link
                  to="/matchconflicts"
                  style={{ color: "rgb(161, 233, 29)" }}
                >
                  Match Conflicts
                </Link>
              </Menu.Item>
            )}
            {
              <Menu.Item>
                <Link to="/profile" style={{ color: "rgb(161, 233, 29)" }}>
                  Profile Page
                </Link>
              </Menu.Item>
            }
            {
              <Menu.Item>
                <div>
                  <Icon type="logout" />
                  <Logout />
                </div>
              </Menu.Item>
            }
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userType: state.auth.user.userType
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
