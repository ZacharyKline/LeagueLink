import React, { Component } from "react";
//import { connect } from "react-redux";
//import { registerUser as register } from "../../actions";
import { Form, Icon } from "antd";
import "../../App.css";
import { RegisterHeader } from "..";
import "../../registration.css";
// import {connect} from 'react-redux'

class RegisterParentSelectTeamsForm extends Component {
  render() {
    const {
      teams,
      coaches,
      handleStaySelected,
      handleSelectTeam,
      handleBack,
      handleNext,
      handleNext2
    } = this.props;
    return (
      <Form className="stylesForm" id="parentSelectTeams">
        <RegisterHeader text={"Select your Team(s)"} />
        <div className="ulContainerDiv">
          <ul style={{ listStyle: "none" }}>
            {teams.map(team => {
              let index = coaches.findIndex(coach => coach.id === team.coachId);
              let currentCoachName = coaches[index].name;
              return (
                <li key={team.id} className="liTeam">
                  <div>
                    <input
                      type="checkbox"
                      name="team"
                      checked={handleStaySelected(team.id)}
                      onChange={handleSelectTeam(team.id)}
                    />
                  </div>
                  <div className="teamAgeCoachContainerDiv">
                    <div className="paddingLeft">
                      <span>
                        <b> Team: </b>
                        {team.name}
                      </span>
                    </div>
                    <div className="paddingLeft">
                      <span>
                        {" "}
                        <b>Age Group: </b>
                        {team.ageGroup}
                      </span>
                    </div>
                    <div className="paddingLeft">
                      <span>
                        {" "}
                        <b>Coach:</b> {currentCoachName}
                      </span>
                    </div>
                  </div>
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
        <br />
        <button type="submit" onClick={handleNext2} className="buttonStyle">
          I do not see my team listed here.
        </button>
        <br />
        <div className="buttonContainerDiv">
          <button type="submit" onClick={handleNext} className="buttonStyle">
            Next
            <Icon type="right" />
          </button>
          <button type="submit" onClick={handleBack} className="buttonStyle">
            <Icon type="left" />
            Back
          </button>
        </div>
      </Form>
    );
  }
}

export default RegisterParentSelectTeamsForm;
