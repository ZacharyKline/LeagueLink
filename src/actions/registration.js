import { domain, jsonHeaders, handleJsonResponse } from "./constants";
//import { push } from "connected-react-router";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  });
  return fetch(domain + "/users", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: REGISTER_FAIL, payload: err.message })
      );
    });
};
