import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Navbar } from ".";
import { connect } from "react-redux";
import { Col, Card, Button, Popconfirm, Modal } from "antd";
import { getUserById, getFacilityByManagerId, editProfile, deleteUserThenGoToLoginPage as handleDeleteUser } from "../actions";


const text = "Are you sure to delete this Account?";

class FacilityManagerProfile extends Component {
  state = {}
  componentDidMount() {
    this.props.getUserById(this.props.login.id);
    this.props.getFacilityByManagerId(this.props.login.id).then(res => console.log(res))
    console.log(this.props)
  }
  toggleModal = () => {
    this.setState({modal : !this.state.modal})
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
                    Account Type: {this.props.userLevel}{this.props.userType}
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
                    Facility: <h4>Intermural Sportsplex</h4>
                    Manager: <h4>Ethan Ebel</h4>
                    Teams: <h4>Awesome highschool Team, Undefeated champs</h4>
                    Address: <h4>123 main st</h4>
                    city: <h4>Indianapolis</h4>
                    state: <h4>Indiana</h4>
                    zipCode: <h4>46203</h4>
                    phone: <h4>7735551234</h4>
                    email: <h4>facility@gmail.com</h4>

                  </Card>
                  {/* <Button
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
                    onClick={this.toggleModal}
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
                    </Button> */}


                </Col>
              </div>

            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}


function mapStateToProps({ auth, teams, facilities }) {
    facility = facilities.managerFacility.foundFacilities[0]
  return {
    login: auth.login,
    fullName: auth.user.fullName,
    phone: auth.user.phone,
    teamIds: auth.user.teamIds,
    userLevel: auth.user.userType,
    facility: facility
    // teamIds: auth.user.teamIds,
  };
 }

const mapDispatchToProps = {
  getUserById,
  handleDeleteUser,
  editProfile,
  getFacilityByManagerId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FacilityManagerProfile);
