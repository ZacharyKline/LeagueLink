import { domain, jsonHeaders, handleJsonResponse } from "./constants";
//import { createUser } from ".";
//seems to be working, need get request to make sure all data being save correctly
export const CREATE_TEAM = "CREATE_TEAM";
export const CREATE_TEAM_SUCCESS = "CREATE_TEAM_SUCCESS";
export const CREATE_TEAM_FAIL = "CREATE_TEAM_FAIL";
//untested may need addition to backend
export const ADD_USERID_TO_TEAM = "ADD_COACHID_TO_TEAM";
export const ADD_USERID_TO_TEAM_SUCCESS = "ADD_COACHID_TO_TEAM_SUCCESS";
export const ADD_USERID_TO_TEAM_FAIL = "ADD_COACHID_TO_TEAM_FAIL";
//untested may need addition to backend
export const ADD_FACILITYID_TO_TEAM = "ADD_FACILITYID_TO_TEAM";
export const ADD_FACILITYID_TO_TEAM_SUCCESS = "ADD_FACILITYID_TO_TEAM_SUCCESS";
export const ADD_FACILITYID_TO_TEAM_FAIL = "ADD_FACILITYID_TO_TEAM_FAIL";
//untested may need addtion to backend
export const GET_TEAMS = "GET_TEAMS";
export const GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS";
export const GET_TEAMS_FAIL = "GET_TEAMS_FAIL";
//untested may need addition to backend
export const GET_TEAMS_BY_FACILITYID = "GET_TEAMS_BY_FACILITYID";
export const GET_TEAMS_BY_FACILITYID_SUCCESS =
  "GET_TEAMS_BY_FACILITYID_SUCCESS";
export const GET_TEAMS_BY_FACILITYID_FAIL = "GET_TEAMS_BY_FACILITYID_FAIL";
//untested may need addition to backend
export const GET_TEAM_BY_TEAMID = "GET_TEAM_BY_TEAMID";
export const GET_TEAM_BY_TEAMID_SUCCESS = "GET_TEAM_BY_TEAMID_SUCCESS";
export const GET_TEAM_BY_TEAMID_FAIL = "GET_TEAM_BY_TEAMID_FAIL";
//untested may need addtion to backend
export const GET_TEAM_BY_COACHID = "GET_TEAM_BY_COACHID";
export const GET_TEAM_BY_COACHID_SUCCESS = "GET_TEAM_BY_COACHID_SUCCESS";
export const GET_TEAM_BY_COACHID_FAIL = "GET_TEAM_BY_COACHID_FAIL";
//I have not tested
export const UPDATE_TEAM = "UPDATE_TEAM";
export const UPDATE_TEAM_SUCCESS = "UPDATE_TEAM_SUCCESS";
export const UPDATE_TEAM_FAIL = "UPDATE_TEAM_FAIL";

const url = domain + "teams";

export const createTeam = teamData => dispatch => {
  dispatch({
    type: CREATE_TEAM
  });
  return fetch(url + "/new", {
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

//used to link parent and coach to team
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
//used to link facility to team
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

//to be used in registration forms so that parents can find and select team and when user wants to see teams that can be added
export const getTeams = () => dispatch => {
  dispatch({ type: GET_TEAMS });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_TEAMS_SUCCESS,
        payload: result.messages
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TEAMS_FAIL,
        payload: err.message
      });
    });
};

//way the facility can get the relevant teams alternatively get all teams and filter for faclityId
export const getTeamsByFacilityId = facilityId => dispatch => {
  dispatch({ type: GET_TEAMS_BY_FACILITYID });

  return fetch(url + `?facilityId=${facilityId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_TEAMS_BY_FACILITYID_SUCCESS,
        payload: result.messages
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TEAMS_BY_FACILITYID_FAIL,
        payload: err.message
      });
    });
};

//get a specific team
export const getTeamByTeamId = teamId => dispatch => {
  dispatch({ type: GET_TEAM_BY_TEAMID });

  return fetch(url + `/${teamId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_TEAM_BY_TEAMID_SUCCESS,
        payload: result.messages
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TEAMS_BY_FACILITYID_FAIL,
        payload: err.message
      });
    });
};

//may not be needed
export const getTeamByCoachId = coachId => dispatch => {
  dispatch({ type: GET_TEAM_BY_COACHID });

  return fetch(url + `?coachId=${coachId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_TEAM_BY_COACHID_SUCCESS,
        payload: result.messages
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TEAM_BY_COACHID_FAIL,
        payload: err.message
      });
    });
};

export const updateTeam = (teamId, updateData) => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({ type: UPDATE_TEAM });

  return fetch(url + `/${teamId}`, {
    method: "PATCH",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(updateData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_TEAM_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UPDATE_TEAM_FAIL, payload: err.message })
      );
    });
};
