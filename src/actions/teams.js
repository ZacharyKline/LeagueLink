import { domain, jsonHeaders, handleJsonResponse } from "./constants";
//import { createUser } from ".";

export const CREATE_TEAM = "CREATE_TEAM";
export const CREATE_TEAM_SUCCESS = "CREATE_TEAM_SUCCESS";
export const CREATE_TEAM_FAIL = "CREATE_TEAM_FAIL";
export const ADD_USERID_TO_TEAM = "ADD_COACHID_TO_TEAM";
export const ADD_USERID_TO_TEAM_SUCCESS = "ADD_COACHID_TO_TEAM_SUCCESS";
export const ADD_USERID_TO_TEAM_FAIL = "ADD_COACHID_TO_TEAM_FAIL";
export const ADD_FACILITYID_TO_TEAM = "ADD_FACILITYID_TO_TEAM";
export const ADD_FACILITYID_TO_TEAM_SUCCESS = "ADD_FACILITYID_TO_TEAM_SUCCESS";
export const ADD_FACILITYID_TO_TEAM_FAIL = "ADD_FACILITYID_TO_TEAM_FAIL";

const url = domain + "/teams";

export const createTeam = teamData => dispatch => {
  dispatch({
    type: CREATE_TEAM
  });
  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(teamData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_TEAM_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATE_TEAM_FAIL, payload: err.message })
      );
    });
};

export const addUserIdToTeam = teamData => dispatch => {
  dispatch({ type: ADD_USERID_TO_TEAM });
  return fetch(url + `/${teamData.id}`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify(teamData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADD_USERID_TO_TEAM_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: ADD_USERID_TO_TEAM_FAIL, payload: err.message })
      );
    });
};

//dataObj ={teamId, facilityId}
export const addFacilityIdToTeam = dataObj => dispatch => {
  dispatch({ type: ADD_FACILITYID_TO_TEAM });
  return fetch(url + `/${dataObj.teamId}`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify(dataObj)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADD_FACILITYID_TO_TEAM_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: ADD_FACILITYID_TO_TEAM_FAIL, payload: err.message })
      );
    });
};
