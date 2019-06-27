import {  } from "../actions";

const initialState = {
  reducerLoading: false,
  payload: null,
  Error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case foo:
      return {
        ...state,
        reducerLoading: true,
        Error: null
      };
    case foo_SUCCESS:
      return { ...state, payload: action.payload, reducerLoading: false };
    case foo_FAIL:
      return { ...state, Error: action.payload, reducerLoading: false };

    case foo:
      return {
        ...state,
        reducerLoading: true,
        Error: null
      };
    case foo_SUCCESS:
      return { ...state, payload: action.payload, reducerLoading: false };
    case foo_FAIL:
      return { ...state, Error: action.payload, reducerLoading: false };

    case foo:
      return {
        ...state,
        reducerLoading: true,
        Error: null
      };
    case foo_SUCCESS:
      return { ...state, payload: action.payload, reducerLoading: false };
    case foo_FAIL:
      return { ...state, Error: action.payload, reducerLoading: false };

    case foo:
      return {
        ...state,
        reducerLoading: true,
        Error: null
      };
    case foo_SUCCESS:
      return { ...state, payload: action.payload, reducerLoading: false };
    case foo_FAIL:
      return { ...state, Error: action.payload, reducerLoading: false };

    case foo:
      return {
        ...state,
        reducerLoading: true,
        Error: null
      };
    case foo_SUCCESS:
      return { ...state, payload: action.payload, reducerLoading: false };
    case foo_FAIL:
      return { ...state, Error: action.payload, reducerLoading: false };

    case foo:
      return {
        ...state,
        reducerLoading: true,
        Error: null
      };
    case foo_SUCCESS:
      return { ...state, payload: action.payload, reducerLoading: false };
    case foo_FAIL:
      return { ...state, Error: action.payload, reducerLoading: false };

    case foo:
      return {
        ...state,
        reducerLoading: true,
        Error: null
      };
    case foo_SUCCESS:
      return { ...state, payload: action.payload, reducerLoading: false };
    case foo_FAIL:
      return { ...state, Error: action.payload, reducerLoading: false };

    default:
      return state;
  }
};
