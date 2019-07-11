import { domain, jsonHeaders, handleJsonResponse } from "./constants";
//import { createUser } from ".";

export const CREATE_FACILITY = "CREATE_FACILITY";
export const CREATE_FACILITY_SUCCESS = "CREATE_FACILITY_SUCCESS";
export const CREATE_FACILITY_FAIL = "CREATE_FACILITY_FAIL";

export const GET_FACILITIES = "GET_FACILITIES";
export const GET_FACILITIES_SUCCESS = "GET_FACILITIES_SUCCESS";
export const GET_FACILITIES_FAIL = "GET_FACILITIES_FAIL";

export const GET_FACILITY_BY_FACILITYID = "GET_FACILITY_BY_FACILITYID";
export const GET_FACILITY_BY_FACILITYID_SUCCESS =
  "GET_FACILITY_BY_FACILITYID_SUCCESS";
export const GET_FACILITY_BY_FACILITYID_FAIL =
  "GET_FACILITY_BY_FACILITYID_FAIL";

export const GET_FACILITY_BY_MANAGERID = "GET_FACILITY_BY_MANAGERID";
export const GET_FACILITY_BY_MANAGERID_SUCCESS =
  "GET_FACILITY_BY_MANAGERID_SUCCESS";
export const GET_FACILITY_BY_MANAGERID_FAIL = "GET_FACILITY_BY_MANAGERID_FAIL";

export const GET_FACILITY_BY_TEAMID = "GET_FACILITY_BY_TEAMID";
export const GET_FACILITY_BY_TEAMID_SUCCESS = "GET_FACILITY_BY_TEAMID_SUCCESS";
export const GET_FACILITY_BY_TEAMID_FAIL = "GET_FACILITY_BY_TEAMID_FAIL";

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

export const getFacilities = () => dispatch => {
  dispatch({ type: GET_FACILITIES });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_FACILITIES_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_FACILITIES_FAIL, payload: err.message })
      );
    });
};

export const getFacilityByFaciltyId = facilityId => dispatch => {
  dispatch({ type: GET_FACILITY_BY_FACILITYID });

  return fetch(url + `/${facilityId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_FACILITY_BY_FACILITYID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_FACILITY_BY_FACILITYID_FAIL,
          payload: err.message
        })
      );
    });
};

export const getFacilityByManagerId = managerId => dispatch => {
  dispatch({ type: GET_FACILITY_BY_MANAGERID });

  return fetch(url + `?managerId=${managerId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_FACILITY_BY_MANAGERID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_FACILITY_BY_MANAGERID_FAIL,
          payload: err.message
        })
      );
    });
};

export const getFacilityByTeamId = teamId => dispatch => {
  dispatch({ type: GET_FACILITY_BY_TEAMID });

  return fetch(url + `?teamId=${teamId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_FACILITY_BY_TEAMID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_FACILITY_BY_TEAMID_FAIL,
          payload: err.message
        })
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
