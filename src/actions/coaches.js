import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LOGIN          = "LOGIN";
export const LOGIN_SUCCESS  = "LOGIN_SUCCESS";
export const LOGIN_FAIL     = "LOGIN_FAIL";


const url = domain + "/auth";

// action creators
const login = loginData => (dispatch, getStore) => {
  //loginData is an object {username:username, password:password}
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
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
};


export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};
