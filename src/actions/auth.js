import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";


// action types
//working
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

const url = domain + "auth";

// action creators
export const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result);
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message })
      );
    });
};

export const loginThenGoToUserProfile = loginData => (dispatch, getState) => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT
  });

  const token = getState().auth.token;
  return fetch(url + "/logout", {
    method: "GET",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGOUT_FAIL, payload: err.message })
      );
    });
};


export const logoutThenGoToHomepage = () => dispatch => {
  return dispatch(logout())
  .then(() => dispatch(push("/")))
  .catch(()=>(dispatch(push("/"))));
};
