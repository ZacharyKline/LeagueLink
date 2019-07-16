import {
  CREATE_TEAM,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAIL,
  GET_TEAMS,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAIL,
  GET_TEAMS_BY_FACILITYID,
  GET_TEAMS_BY_FACILITYID_SUCCESS,
  GET_TEAMS_BY_FACILITYID_FAIL,
  GET_TEAM_BY_TEAMID,
  GET_TEAM_BY_TEAMID_SUCCESS,
  GET_TEAM_BY_TEAMID_FAIL,
  GET_TEAM_BY_COACHID,
  GET_TEAM_BY_COACHID_SUCCESS,
  GET_TEAM_BY_COACHID_FAIL,
  UPDATE_TEAM,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_FAIL,
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
  newTeam: {},
  getTeamsError: null,
  getTeamsLoading: false,
  teams: [],
  getTeamsByFacilityIdError: null,
  getTeamsByFacilityIdLoading: false,
  leagueTeams: [],
  getTeamByIdError: null,
  getTeamByIdLoading: false,
  specificTeam: {},
  getTeamByCoachIdError: null,
  getTeamByCoachIdLoading: false,
  coachTeam: {},
  updateTeamError: null,
  updateTeamLoading: false,

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
      return { ...state, newTeam: action.payload, createTeamLoading: false };
    case CREATE_TEAM_FAIL:
      return {
        ...state,
        createTeamError: action.payload,
        createTeamLoading: false
      };

    case GET_TEAMS:
      return {
        ...state,
        getTeamsLoading: true,
        getTeamsError: null
      };
    case GET_TEAMS_SUCCESS:
      return { ...state, teams: action.payload, getTeamsLoading: false };
    case GET_TEAMS_FAIL:
      return {
        ...state,
        getTeamsError: action.payload,
        getTeamsLoading: false
      };

    case GET_TEAMS_BY_FACILITYID:
      return {
        ...state,
        getTeamsByFacilityIdLoading: true,
        getTeamsByFacilityIdError: null
      };
    case GET_TEAMS_BY_FACILITYID_SUCCESS:
      return {
        ...state,
        leagueTeams: action.payload,
        getTeamsByFacilityIdLoading: false
      };
    case GET_TEAMS_BY_FACILITYID_FAIL:
      return {
        ...state,
        getTeamsByFacilityIdError: action.payload,
        getTeamsByFacilityIdLoading: false
      };

    case GET_TEAM_BY_TEAMID:
      return {
        ...state,
        getTeamByIdLoading: true,
        getTeamByIdError: null
      };
    case GET_TEAM_BY_TEAMID_SUCCESS:
      console.log(action)
      return {
        ...state,
        specificTeam: action.payload,
        getTeamByIdLoading: false
      };
    case GET_TEAM_BY_TEAMID_FAIL:
      return {
        ...state,
        getTeamByIdError: action.payload,
        getTeamByIdLoading: false
      };

    case GET_TEAM_BY_COACHID:
      return {
        ...state,
        getTeamByCoachIdLoading: true,
        getTeamByCoachIdError: null
      };
    case GET_TEAM_BY_COACHID_SUCCESS:
      return {
        ...state,
        coachTeam: action.payload,
        getTeamByCoachIdLoading: false
      };
    case GET_TEAM_BY_COACHID_FAIL:
      return {
        ...state,
        getTeamByCoachIdError: action.payload,
        getTeamByCoachIdLoading: false
      };

    case UPDATE_TEAM:
      return {
        ...state,
        updateTeamLoading: true,
        updateTeamError: null
      };
    case UPDATE_TEAM_SUCCESS:
      return {
        ...state,
        updateTeamLoading: false
      };
    case UPDATE_TEAM_FAIL:
      return {
        ...state,
        updateTeamLoading: false,
        updateTeamError: action.payload
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
