import { domain, jsonHeaders, handleJsonResponse } from "./constants";
//import { createUser } from ".";

export const CREATE_FACILITY = "CREATE_FACILITY";
export const CREATE_FACILITY_SUCCESS = "CREATE_FACILITY_SUCCESS";
export const CREATE_FACILITY_FAIL = "CREATE_FACILITY_FAIL";
export const ADD_MANAGERID_TO_FACILITY = "ADD_MANAGERID_TO_FACILITY";
export const ADD_MANAGERID_TO_FACILITY_SUCCESS =
  "ADD_MANAGERID_TO_FACILITY_SUCCESS";
export const ADD_MANAGERID_TO_FACILITY_FAIL = "ADD_MANAGERID_TO_FACILITY_FAIL";
export const ADD_TEAMID_TO_FACILITY = "ADD_TEAMID_TO_FACILITY";
export const ADD_TEAMID_TO_FACILITY_SUCCESS = "ADD_TEAMID_TO_FACILITY_SUCCESS";
export const ADD_TEAMID_TO_FACILITY_FAIL = "ADD_TEAMID_TO_FACILITY_FAIL";

const url = domain + "/facilities";

export const createFacility = facilityData => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({
    type: CREATE_FACILITY
  });
  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(facilityData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_FACILITY_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATE_FACILITY_FAIL, payload: err.message })
      );
    });
};

export const addManagerIdToFacility = facilityData => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({ type: ADD_MANAGERID_TO_FACILITY });
  return fetch(url + `/${facilityData.id}`, {
    method: "PATCH",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(facilityData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADD_MANAGERID_TO_FACILITY_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: ADD_MANAGERID_TO_FACILITY_FAIL, payload: err.message })
      );
    });
};

//dataObj = {facilityId, teamId}
export const addTeamIdToFacility = dataObj => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({ type: ADD_TEAMID_TO_FACILITY });
  return fetch(url + `/${dataObj.facilityId}`, {
    method: "PATCH",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(dataObj)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADD_TEAMID_TO_FACILITY_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: ADD_TEAMID_TO_FACILITY_FAIL, payload: err.message })
      );
    });
};
