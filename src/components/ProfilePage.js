import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Navbar } from ".";
import {
  Col,
  Card,
  Button,
  Popconfirm,
  Modal
} from "antd";
import { connect } from "react-redux";
import RegisterParentSelectTeamsForm from "../components/RegisterForms/RegisterParentSelectTeamsForm"
import { getUserById, getTeamByTeamId, editProfile, deleteUserThenGoToLoginPage as handleDeleteUser } from "../actions";

const text = "Are you sure to delete this Account?";

class Profile extends Component {
  state = {}
  componentDidMount() {
    this.props.getUserById(this.props.login.id);
    console.log(this.props)
    this.props.getTeamByTeamId(this.props.teamId)
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
                    Teams: <h4>Frogs</h4>
                    Coach: <h4>Ben Carter</h4>
                    Coach Email: <h4>bc@gm.com</h4>
                    Coach Phone: <h4>(000) 000-0009</h4>

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
                    </Button>


                </Col>
              </div>

            </div>
          </div>
        </section>
        <Modal
          title="Basic Modal"
          visible={this.state.modal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <RegisterParentSelectTeamsForm />
        </Modal>
      </React.Fragment>
    );
  }
}


function mapStateToProps({ auth }) {
  return {
    login: auth.login,
    fullName: auth.user.fullName,
    phone: auth.user.phone,
    teamIds: auth.user.teamIds,
    userLevel: auth.user.userType,
  };
 }

const mapDispatchToProps = {
  getUserById,
  handleDeleteUser,
  getTeamByTeamId,
  editProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
