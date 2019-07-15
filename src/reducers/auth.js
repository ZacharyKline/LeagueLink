import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from "../actions";

const initialState = {
  loginLoading: false,
  login: {},
  loginError: null,
  deleteUserLoading: false,
  deleteUserError: null,
  logoutError: null,
  logoutLoading: false
};

const getInitState = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState;
};

export default (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, user: action.payload.user[0], token: action.payload.token, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };
    case DELETE_USER:
      return { ...state, deleteUserLoading: true, deleteUserError: null };
    case DELETE_USER_SUCCESS:
      return { ...initialState };
    case DELETE_USER_FAIL:
      return {
        ...state,
        deleteUserLoading: false,
        deleteUserError: action.payload
      };

    case LOGOUT:
      return { ...state, logoutLoading: true, logoutError: null };
    case LOGOUT_SUCCESS:
      return { ...initialState };
    case LOGOUT_FAIL:
      return {
        ...state,
        logoutError: action.payload,
        logoutLoading: false
      };

    default:
      return state;
  }
};
