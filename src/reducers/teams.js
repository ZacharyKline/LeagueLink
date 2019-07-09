import {
  CREATE_TEAM,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAIL,
  ADD_USERID_TO_TEAM,
  ADD_USERID_TO_TEAM_SUCCESS,
  ADD_USERID_TO_TEAM_FAIL,
  ADD_FACILITYID_TO_TEAM,
  ADD_FACILITYID_TO_TEAM_SUCCESS,
  ADD_FACILITYID_TO_TEAM_FAIL
} from "../actions";

const initialState = {
  createTeamLoading: false,
  createTeamError: null,
  teamId: null,
  addCoachIdTOTeamLoading: false,
  addCoachIdTOTeamError: null,
  coachLinkedToTeam: false,
  addFacilityIdToTeamLoading: false,
  addFacilityIdToTeamError: null,
  facilityId: null,
  reducerLoading: false,
  payload: null,
  Error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TEAM:
      return {
        ...state,
        createTeamLoading: true,
        createTeamError: null
      };
    case CREATE_TEAM_SUCCESS:
      return { ...state, teamId: action.payload.id, createTeamLoading: false };
    case CREATE_TEAM_FAIL:
      return {
        ...state,
        createTeamError: action.payload,
        createTeamLoading: false
      };

    case ADD_USERID_TO_TEAM:
      return {
        ...state,
        addCoachIdTOTeamLoading: true,
        addCoachIdTOTeamError: null
      };
    case ADD_USERID_TO_TEAM_SUCCESS:
      return { ...state, accountLinked: true, addCoachIdTOTeamLoading: false };
    case ADD_USERID_TO_TEAM_FAIL:
      return {
        ...state,
        addCoachIdTOTeamError: action.payload,
        addCoachIdTOTeamLoading: false
      };

    case ADD_FACILITYID_TO_TEAM:
      return {
        ...state,
        addFacilityIdToTeamLoading: true,
        addFacilityIdToTeamError: null
      };
    case ADD_FACILITYID_TO_TEAM_SUCCESS:
      return {
        ...state,
        facilityId: action.payload.id,
        addFacilityIdToTeamLoading: false
      };
    case ADD_FACILITYID_TO_TEAM_FAIL:
      return {
        ...state,
        addFacilityIdToTeamError: action.payload,
        addFacilityIdToTeamLoading: false
      };
    /*
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
*/
    default:
      return state;
  }
};
