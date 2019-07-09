import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  deleteUserLoading: false,
  deleteUserError: null
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
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };
    case DELETE_USER:
      return { ...state, deleteUserLoading: true, deleteUserError: null };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUserLoading: false,
        login: null
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        deleteUserLoading: false,
        deleteUserError: action.payload
      };

    case LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }
};
