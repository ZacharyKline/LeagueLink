import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  foo,
  foo_FAIL,
  foo_SUCCESS
} from "../actions";

const initialState = {
  createUserLoading: false,
  createUserError: null,
  userId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        createUserLoading: true,
        createUserError: null
      };
    case CREATE_USER_SUCCESS:
      return { ...state, userId: action.payload.id, createUserLoading: false };
    case CREATE_USER_FAIL:
      return {
        ...state,
        createUserError: action.payload,
        createUserLoading: false
      };

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
