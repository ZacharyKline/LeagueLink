import { domain, jsonHeaders, handleJsonResponse } from "./constants";

export const GET_TIMEBLOCKS_BY_USERID = "GET_TIMEBLOCKS_BY_USERID";
export const GET_TIMEBLOCKS_BY_USERID_SUCCESS =
  "GET_TIMEBLOCKS_BY_USERID_SUCCESS";
export const GET_TIMEBLOCKS_BY_USERID_FAIL = "GET_TIMEBLOCKS_BY_USERID_FAIL";

export const UPDATE_TIMEBLOCKS_BY_USERID = "UPDATE_TIMEBLOCKS_BY_USERID";
export const UPDATE_TIMEBLOCKS_BY_USERID_SUCCESS =
  "UPDATE_TIMEBLOCKS_BY_USERID_SUCCESS";
export const UPDATE_TIMEBLOCKS_BY_USERID_FAIL =
  "UPDATE_TIMEBLOCKS_BY_USERID_FAIL";

export const GET_TIMEBLOCKS_BY_DATE = "GET_TIMEBLOCKS_BY_DATE";
export const GET_TIMEBLOCKS_BY_DATE_SUCCESS = "GET_TIMEBLOCKS_BY_DATE_SUCCESS";
export const GET_TIMEBLOCKS_BY_DATE_FAIL = "GET_TIMEBLOCKS_BY_DATE_FAIL";

export const GET_ALL_TIMEBLOCKS_BY_DATE = "GET_ALL_TIMEBLOCKS_BY_DATE";
export const GET_ALL_TIMEBLOCKS_BY_DATE_SUCCESS =
  "GET_ALL_TIMEBLOCKS_BY_DATE_SUCCESS";
export const GET_ALL_TIMEBLOCKS_BY_DATE_FAIL =
  "GET_ALL_TIMEBLOCKS_BY_DATE_FAIL";

const url = domain + "timeblocks";

export const getTimeBlocksByUserId = userId => dispatch => {
  dispatch({
    type: GET_TIMEBLOCKS_BY_USERID
  });
  return fetch(url + `/${userId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_TIMEBLOCKS_BY_USERID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_TIMEBLOCKS_BY_USERID_FAIL, payload: err.message })
      );
    });
};

export const updateTimeBlock = (userId, timeBlockData) => dispatch => {
  dispatch({ type: UPDATE_TIMEBLOCKS_BY_USERID });
  return fetch(url + `/${userId}`, {
    method: "PUT",
    headers: jsonHeaders,
    body: JSON.stringify(timeBlockData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_TIMEBLOCKS_BY_USERID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: UPDATE_TIMEBLOCKS_BY_USERID_FAIL,
          payload: err.message
        })
      );
    });
};

export const getTimeBlocksOfUserByDate = (userId, dateObj) => dispatch => {
  dispatch({
    type: GET_TIMEBLOCKS_BY_USERID
  });
  return fetch(
    url + `/bydate/${userId}?year=${dateObj.year}&?month=${dateObj.month}`,
    {
      method: "GET",
      headers: jsonHeaders
    }
  )
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_TIMEBLOCKS_BY_USERID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_TIMEBLOCKS_BY_USERID_FAIL, payload: err.message })
      );
    });
};

export const getAllTimeBlocksOfUserByDate = (userId, dateObj) => dispatch => {
  dispatch({
    type: GET_ALL_TIMEBLOCKS_BY_DATE
  });
  return fetch(
    url + `/bydate/all?year=${dateObj.year}&?month=${dateObj.month}`,
    {
      method: "GET",
      headers: jsonHeaders
    }
  )
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_ALL_TIMEBLOCKS_BY_DATE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_ALL_TIMEBLOCKS_BY_DATE_FAIL,
          payload: err.message
        })
      );
    });
};
