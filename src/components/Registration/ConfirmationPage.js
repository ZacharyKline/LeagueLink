import React, { Component } from "react";
//import { connect } from "react-redux";
//import { registerUser as register } from "../../actions";
import { Form, Icon } from "antd";
import "../../App.css";
import "../css/registration.css";

class RegisterConfirmationPageForm extends Component {
  render() {
    const {
      teams,
      coaches,
      facilities,
      managers,
      firstName,
      lastName,
      email,
      phone,
      userType,
      selectedTeamIds,
      teamName,
      ageGroup,
      selectedFacilityId,
      facilityAddress,
      facilityCity,
      facilityEmail,
      facilityName,
      facilityPhone,
      facilityState,
      facilityUrl,
      facilityZipCode,
      handleBack,
      handleSubmit
    } = this.props;
    return (
      <Form className="stylesForm" id="confirmationPage">
        <h1 className="header">"Confirm your Details"</h1>
        <div className="containerDiv">
          <Form.Item className="formItemStyle">
            <div className="confirmContentContainers">
              <span>
                <b>{firstName} </b>
              </span>
              <span>
                <b>{lastName}</b>
              </span>
            </div>

            <div className="confirmContentContainers">
              <span>{email}</span>
            </div>
            <div className="confirmContentContainers">
              <span>{phone}</span>
            </div>
            <br />

            {userType === "parent" && selectedTeamIds.length === 0 && (
              <div className="confirmContentContainers">
                <span>Account not linked to Team</span>
              </div>
            )}
            {userType === "parent" && selectedTeamIds.length > 0 && (
              
              <React.Fragment>
                {selectedTeamIds.map((selectedId, i) => {
                  let currentTeam = teams.find(team => team.id === selectedId);

                  let currentCoach = coaches.find(
                    coach => coach.id === currentTeam.coachId
                  );

                  return (
                    <div key={currentTeam.id} className="otherContentContainer">
                      <p className="confirmContentContainers">
                        <span>
                          <b>Team: </b>
                          {currentTeam.name}
                        </span>

                        <span> </span>
                        <span>
                          <b>Age Group: </b>
                          {currentTeam.ageGroup}
                        </span>
                      </p>
                      <p className="confirmContentContainers">
                        <span>
                          <b>Coach: </b>
                          {currentCoach.name}
                        </span>
                      </p>
                      <br />
                    </div>
                  );
                })}
              </React.Fragment>
            )}
            {userType === "coach" && teamName !== "" && ageGroup !== "" && (
              <React.Fragment>
                <div className="confirmContentContainers">
                  <span>
                    <b>Coaching:</b>{" "}
                  </span>
                  <span>{teamName}</span>
                </div>
                <div className="confirmContentContainers">
                  <span>
                    {" "}
                    <b>Ages:</b>{" "}
                  </span>
                  <span>{ageGroup}</span>
                </div>
                <br />
              </React.Fragment>
            )}

            {userType === "coach" && selectedFacilityId === null && (
              <div className="confirmContentContainers">
                <span>Account not linked to Facility</span>
              </div>
            )}
            {userType === "coach" && selectedFacilityId !== null && (
              <React.Fragment>
                <div className="confirmContentContainers">
                  <b>
                    {
                      facilities.find(
                        facility => facility.id === selectedFacilityId
                      ).name
                    }
                  </b>
                </div>
                <div className="confirmContentContainers">
                  {
                    facilities.find(
                      facility => facility.id === selectedFacilityId
                    ).address
                  }
                </div>
                <div className="confirmContentContainers">
                  <span>
                    {
                      facilities.find(
                        facility => facility.id === selectedFacilityId
                      ).city
                    }
                    ,
                  </span>
                  <span> </span>
                  <span>
                    {
                      facilities.find(
                        facility => facility.id === selectedFacilityId
                      ).city
                    }
                  </span>
                  <span> </span>
                  <span>
                    {
                      facilities.find(
                        facility => facility.id === selectedFacilityId
                      ).zipCode
                    }
                  </span>
                </div>
                <div className="confirmContentContainers">
                  {
                    facilities.find(
                      facility => facility.id === selectedFacilityId
                    ).email
                  }
                </div>
                <div className="confirmContentContainers">
                  {
                    facilities.find(
                      facility => facility.id === selectedFacilityId
                    ).phone
                  }
                </div>
                <div className="confirmContentContainers">
                  <span>
                    <b>League Manager:</b>
                  </span>
                  <span> </span>
                  <span>
                    {
                      managers.find(
                        manager => manager.facilityId === selectedFacilityId
                      ).name
                    }
                  </span>
                </div>
              </React.Fragment>
            )}
            {userType === "manager" && (
              <React.Fragment>
                <div className="confirmContentContainers">
                  <span>
                    <b>{facilityName}</b>
                  </span>
                </div>
                <div className="confirmContentContainers">
                  <span>{facilityAddress}</span>
                </div>
                <div className="confirmContentContainers">
                  <span className="confirmContentContainers">
                    {facilityCity}
                  </span>
                  <span>, </span>
                  <span>{facilityState}</span>
                  <span> </span>
                  <span>{facilityZipCode}</span>
                </div>
                {facilityUrl !== "" && (
                  <div className="confirmContentContainers">
                    <span className="confirmContentContainers">
                      {facilityUrl}
                    </span>
                  </div>
                )}
                <div className="confirmContentContainers">
                  <span className="confirmContentContainers">
                    {facilityEmail}
                  </span>
                </div>
                <div className="confirmContentContainers">
                  <span className="confirmContentContainers">
                    {facilityPhone}
                  </span>
                </div>
              </React.Fragment>
            )}
          </Form.Item>
        </div>
        <br />
        <div className="buttonContainerDiv">
          <button
            //type="submit"
            onClick={handleSubmit}
            className="buttonStyle"
          >
            Confirm
            <Icon type="right" />
          </button>
          <button
            //type="submit"
            onClick={handleBack}
            className="buttonStyle"
          >
            <Icon type="left" />
            Back
          </button>
        </div>
      </Form>
    );
  }
}

export default RegisterConfirmationPageForm;
