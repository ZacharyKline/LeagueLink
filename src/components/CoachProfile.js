import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from ".";
import { Col, Card, Button, Popconfirm, Modal } from "antd";
import { connect } from "react-redux";
import RegisterParentSelectTeamsForm from "../components/RegisterForms/RegisterParentSelectTeamsForm";
import {
  getUserById,
  getTeamByTeamId,
  editProfile,
  deleteUserThenGoToLoginPage as handleDeleteUser
} from "../actions";

const text = "Are you sure to delete this Account?";

class CoachProfile extends Component {
  state = {};
  componentDidMount() {
    this.props.getUserById(this.props.login.id);
    console.log(this.props);
    this.props.getTeamByTeamId(this.props.teamId);
  }
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <React.Fragment>
        <section>
          <Navbar />
          <div style={{ marginTop: "40px" }} />
          <div
            style={{
              backgroundColor: "rgb(74, 162, 197)",
              width: "400px",
              margin: "auto",
              alignContent: "center",
              border: "5px rgba(0, 53, 89, 1) solid",
              borderRadius: "5px",
              padding: "15px"
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
              <div>
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
                    {this.props.userType}
                  </Card>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginTop: "5px"
                    }}
                  >
                    <Link to="/editprofile">
                      <Button
                        span={8}
                        offset={4}
                        type="submit"
                        style={{
                          background: "rgba(0, 53, 89, 1)",
                          color: "rgb(161, 233, 29)",
                          border: "3px rgb(130, 184, 31) solid",
                          borderRadius: "25px",
                          textAlign: "center"
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
                        type="submit"
                        style={{
                          background: "rgba(0, 53, 89, 1)",
                          color: "rgb(161, 233, 29)",
                          border: "3px rgb(130, 184, 31) solid",
                          borderRadius: "25px",
                          textAlign: "center"
                        }}
                      >
                        Delete Account
                      </Button>
                    </Popconfirm>
                  </div>
                  <br />
                  <br />
                  <Card
                    style={{
                      border: "2px rgba(0, 53, 89, 1) solid",
                      borderRadius: "25px"
                    }}
                  >
                    <h1>Team:</h1>
                    <h4>Tigers</h4>
                    <h1>Parents:</h1>
                    <h4>John Smith</h4>
                    <div>Phone: (000) 000-0001</div>
                    <div>Email: js@gm.com</div>
                    <br></br>
                    <h4>Mary Hamm</h4>
                    <div>Phone: (000) 000-0002</div>
                    <div>Email: mhamm@gm.com</div>
                    <br></br>
                    <h4>Poppy Gloria</h4>
                    <div>Phone: (000) 000-0003</div>
                    <div>Email: pg@gm.com</div>
                    <br></br>
                    <h4>Carl Weathers</h4>
                    <div>Phone: (000) 000-0004</div>
                    <div>Email: cw@gm.com</div>
                    <br></br>
                    <h4>John Wick</h4>
                    <div>Phone: (000) 000-0005</div>
                    <div>Email: jw@gm.com</div>
                    <br></br>
                    <h4>Rick Sanchez</h4>
                    <div>Phone: (000) 000-0006</div>
                    <div>Email: rs@gm.com</div>
                    <h4>Homer Simpson</h4>
                    <div>Phone: (000) 000-0007</div>
                    <div>Email: hs@gm.com</div>
                    <br></br>
                    <h4>Tom Harris</h4>
                    <div>Phone: (000) 000-0008</div>
                    <div>Email: th@gm.com</div>
                    <br></br>
                    <h4>George Martin</h4>
                    <div>Phone: (000) 000-0009</div>
                    <div>Email: grrm@gm.com</div>
                    <br></br>
                    <h4>Stephen King</h4>
                    <div>Phone: (000) 000-0010</div>
                    <div>Email: sk@gm.com</div>
                  </Card>
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
    userLevel: auth.user.userType
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
)(CoachProfile);
