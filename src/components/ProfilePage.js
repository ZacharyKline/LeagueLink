import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Navbar } from ".";
import {
  Col,
  Card,
  Button,
  Popconfirm
} from "antd";
import { connect } from "react-redux";
import { getUserById } from "../actions";
import { deleteUserThenGoToLoginPage as handleDeleteUser } from '../actions'
const text = "Are you sure you want to delete this Account?";

class Profile extends Component {
  componentDidMount() {
    this.props.getUserById(this.props.login.id);
    // this.props.getCoachByTeamId(this.props.teamId)
  }
  render() {
    return (
      <React.Fragment>
        <section>
          <Navbar />
          <div style={{marginTop: '40px'}}  />
          <div
            style={{
              backgroundColor: "rgb(74, 162, 197)",
              width: "400px",
              margin: "auto",
              alignContent: "center",
              border: "5px rgba(0, 53, 89, 1) solid",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                margin: "40px auto",
                alignContent: "center",
                border: "0",
                marginTop: "50px"
              }}
            >
              <div
               >
                <Col>
                  <Card
                    style={{
                      border: "2px rgba(0, 53, 89, 1) solid",
                      borderRadius: "25px"
                    }}
                  >
                    Name: {this.props.fullName}
                    <br />
                    Contact Info: {this.props.phone}

                    <br />
                    Account Type: {this.props.userLevel}
                  </Card>
                  <Link to='/editprofile'>
                    <Button
                      span={8}
                      offset={4}
                      type='submit'
                      style={{
                        background: "rgba(0, 53, 89, 1)",
                        color: "rgb(161, 233, 29)",
                        border: "3px rgb(130, 184, 31) solid",
                        borderRadius: "25px",
                        textAlign: "center",
                      }}
                    >
                      Edit Profile
                  </Button>
                  </Link>
                  <Popconfirm
                    placement="top"
                    title={text}
                    onConfirm={this.props.handleDeleteUser}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      span={8}
                      offset={4}
                      type='submit'
                      style={{
                        background: "rgba(0, 53, 89, 1)",
                        color: "rgb(161, 233, 29)",
                        border: "3px rgb(130, 184, 31) solid",
                        borderRadius: "25px",
                        textAlign: "center",
                      }}
                    >
                      Delete Account
                    </Button>
                  </Popconfirm>
                  <br />
                  <br />
                  <Card
                    style={{
                      border: "2px rgba(0, 53, 89, 1) solid",
                      borderRadius: "25px"
                    }}
                  >
                    Teams
                    <br />
                    Team Name- Coaches Info
                  </Card>
                  <Button
                    span={8}
                    offset={4}
                    type='submit'
                    style={{
                      background: "rgba(0, 53, 89, 1)",
                      color: "rgb(161, 233, 29)",
                      border: "3px rgb(130, 184, 31) solid",
                      borderRadius: "25px",
                      textAlign: "center",
                    }}
                  >
                    Add Team(s)
                    </Button>
                  <Button
                    span={8}
                    offset={4}
                    type='submit'
                    style={{
                      background: "rgba(0, 53, 89, 1)",
                      color: "rgb(161, 233, 29)",
                      border: "3px rgb(130, 184, 31) solid",
                      borderRadius: "25px",
                      textAlign: "center",
                    }}
                  >
                    Remove Team(s)
                    </Button>


                </Col>
              </div>

            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

/////////////////////// incoming change

function mapStateToProps({ auth }) {
  return {
    login: auth.login,
    fullName: auth.user.fullName,
    phone: auth.user.phone,
    TeamIds: auth.user.teamIds,
    userLevel: auth.user.userType
  };
}
const mapDispatchToProps = {
  getUserById,
  handleDeleteUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
