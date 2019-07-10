import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL

} from "../actions";

const initialState = {
  createUserLoading: false,
  createUserError: null,
  userId: null,
  name: '',
  contactPhone: '',
  teamAffiliation: '',
  editUserLoading: false,
  editUserError: null
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
    case EDIT_PROFILE:
      return { ...state, editUserLoading: true, editUserError: null }
    case EDIT_PROFILE_SUCCESS:
      return { ...state, userId: action.payload.id, contactPhone: action.payload.contactPhone, teamAffiliation: action.payload.teamAffiliation, editUserLoading: false }
    case EDIT_PROFILE_FAIL:
      return { ...state, editUserError: action.payload, editUserLoading: false }

    default:
      return state;
  }
};
