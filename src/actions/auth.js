import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
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

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};

// action types
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

//we did the url like this because all the action creators will be doing the fetch request to the domain with the path of /auth
//const url = domain + "/auth";

// action creators
//here the action creator has two parts (the dispatch and the actual fetch request)
//in dispatch , we dispatch the type of action so as the reducer will know what will happen and renders its code.
const logout = () => (dispatch, getState) => {
  //here we used () instaed of login data because there is no data
  dispatch({
    type: LOGOUT
  });

  const token = getState().auth.login.token; //the demo of kwitter reducers/actions at 42 min shows how we found the token inside the reducers/auth file.

  //in fetch, we use url with the actual end point which is here is /logout
  // for fetch , there are 3 parts: method , headers, body
  return fetch(url + "/logout", {
    //to know which method we use for the fetch , we look at the website Swagger UI and see the end point (here is /logout) takes what method(here is GET)
    method: "GET", //we can delete this line (if we want)because GET methos is a default methos and no need to write it.
    //we imported jsonHeaders from the constants folder
    // each headers in fetch has 2 parts: "Content-Type" , Accept (here they are inside the constant jsonHeaders)
    //BUT in logout, we need to add Authorization to the header like bellow:
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` } //here we get the token from the getState at the line--> const tokenValue = getState().auth.login.token
    //body: JSON.stringify(logoutData)////we have to delete this line because GET method is a default method and we dont need a body for it(if we keep this line it will give us error)
  })
    .then(handleJsonResponse) //here we imported handleJsonResponse from constants folder
    .then(result => {
      //here it says the fetch was successful and here is your result which contain the token which a string of contents
      // go back to the homepage
      //dispatch(push("/"));
      return dispatch({
        //here it says please dispatch the type of dispatch (LOGOUT_SUCCESS)and payload of dispatch (the result content)
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

//this is an example of higher level chains where you are doing fetch case action creator then pushing it to somewhere else
export const logoutThenGoToHomepage = () => dispatch => {
  return dispatch(logout()).then(() => dispatch(push("/")));
};

//this should not be here , instead it should be in actions/users.js file
// this is an example of higher level chains where you want to collect data from two different API end points to be displayed in one page
//export const getUserProfilePageData = () => dispatch => {
//return dispatch(getUserProfilePicture()).then(() => dispatch(getUserInformation()));
//};

/*
export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL"

const register = registerData => dispatch => {
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

export const registerUser = registerData => dispatch => {
  return dispatch(register(registerData))
  .then(() => dispatch(login({password:registerData.password,username:registerData.username})))
  .then(() => dispatch(push("/profile")))
};
*/
