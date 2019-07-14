import React, { Component } from "react";
import { Navbar } from ".";
import {
  Row,
  Col,
  Card,
  Button,
  Calendar,
  Avatar,
  Popconfirm
} from "antd";
import { connect } from "react-redux";
import { getUserById } from "../actions";
import { deleteUserThenGoToLoginPage as handleDeleteUser} from '../actions'
const text = "Are you sure to delete this Account?";


function onPanelChange(value, mode) {
  console.log(value, mode);
}

class Profile extends Component {
  componentDidMount() {
    this.props.getUserById(this.props.login.id);
  }
  render() {
    return (
      <React.Fragment>
        <section
          style={
            {
              /* backgroundColor: "lightblue", alignItems:"center", margin:"auto", border: "1px rgba(0, 53, 89, 1) solid"  */
            }
          }
        >
          <Navbar />

          <div
            style={{
              backgroundColor: "rgb(74, 162, 197)",
              width: "1000px",
              margin: "auto",
              alignContent: "center",
              border: "5px darkblue solid",
              borderRadius: "25px"
            }}
          >
            <div
              style={{
                width: "800px",
                margin: "auto",
                alignContent: "center",
                border: "0",
                marginTop: "50px"
              }}
            >
              <div style={{ marginBottom: "175px" /*,marginTop:"50px" , */ }}>
                <Col>
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

                  <Card
                    style={{
                      border: "2px rgba(0, 53, 89, 1) solid",
                      borderRadius: "25px"
                    }}
                  >
                    <Avatar shape="square" size={64} icon="user" />
                    <br />
                    Name: {this.props.fullName}
                    <br />
                    Contact Info: {this.props.phone}

                    <br />
                    Account Type: {this.props.userLevel}
                  </Card>
                  {/* <Link to="/editprofile">
                    <Button type="dashed" style={{
                      border: "2px rgba(0, 53, 89, 1) solid",
                      borderRadius: "25px"
                    }} >
                      Edit User
                      </Button>
                  </Link> */}
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

                  <Card
                    style={{
                      border: "2px rgba(0, 53, 89, 1) solid",
                      borderRadius: "25px",
                      marginBottom: "0px"
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        border: "1px solid #d9d9d9",
                        borderRadius: 4
                      }}
                    >
                      <Calendar
                        fullscreen={false}
                        onPanelChange={onPanelChange}
                      />
                    </div>
                  </Card>
                </Col>
              </div>
              {/* <Col span={8} offset={2}>
              </Col> */}

              <Row>
                {/* <Col span={12} offset={6}>
                  Something Righteous
              </Col> */}
              </Row>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

/////////////////////// incoming change

function mapStateToProps({ users, auth }) {
  return {
    login: auth.login,
    fullName: users.user.fullName,
    phone: users.user.phone,
    TeamIds: users.user.TeamIds,
    userLevel: users.user.userLevel
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
