import {
  //mostly working, not adding all information correctly to user in db
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  //working, but packaging of data and the keys need to be looked at to get the data
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  //I have not tested
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  //working, same issues as get users
  GET_PARENTS,
  GET_PARENTS_SUCCESS,
  GET_PARENTS_FAIL,
  //not working, get error
  GET_PARENT_BY_PARENTID,
  GET_PARENT_BY_PARENTID_SUCCESS,
  GET_PARENT_BY_PARENTID_FAIL,
  //not set up to work yet, will need addition to backend
  GET_PARENTS_BY_TEAMID,
  GET_PARENTS_BY_TEAMID_SUCCESS,
  GET_PARENTS_BY_TEAMID_FAIL,
  //working, same issues as get users
  GET_COACHES,
  GET_COACHES_SUCCESS,
  GET_COACHES_FAIL,
  //not working, get error
  GET_COACH_BY_COACHID,
  GET_COACH_BY_COACHID_SUCCESS,
  GET_COACH_BY_COACHID_FAIL,
  //not set up to work yet, will need addition to backend
  GET_COACH_BY_TEAMID,
  GET_COACH_BY_TEAMID_SUCCESS,
  GET_COACH_BY_TEAMID_FAIL,
  //not set up to work yet, will need addition to backend
  GET_COACHES_BY_FACILITYID,
  GET_COACHES_BY_FACILITYID_SUCCESS,
  GET_COACHES_BY_FACILITYID_FAIL,
  //working same issues as get users
  GET_MANAGERS,
  GET_MANAGERS_SUCCESS,
  GET_MANAGERS_FAIL,
  //not working get error
  GET_MANAGER_BY_MANAGERID,
  GET_MANAGER_BY_MANAGERID_SUCCESS,
  GET_MANAGER_BY_MANAGERID_FAIL,
  //not set up to work yet, will need addition to backend
  GET_MANAGER_BY_FACILITYID,
  GET_MANAGER_BY_FACILITYID_SUCCESS,
  GET_MANAGER_BY_FACILITYID_FAIL,
  //not set up to work yet, will need addition to backend
  ADD_FACILITYID_TO_USER,
  ADD_FACILITYID_TO_USER_SUCCESS,
  ADD_FACILITYID_TO_USER_FAIL,

  GET_USER_BY_ID
} from "../actions";

const initialState = {
  createUserLoading: false,
  createUserError: null,
  user: {},
  users: [],
  getUsersLoading: false,
  getUsersError: null,
  parents: [],
  getParentsError: null,
  getParentsLoading: false,
  specificParent: {},
  getParentByIdError: null,
  getParentByIdLoading: false,
  teamParents: [],
  getParentsByTeamIdError: null,
  getParentsByTeamIdLoading: false,
  coaches: [],
  getCoachesError: null,
  getCoachesLoading: false,
  getCoachByIdError: null,
  getCoachByIdLoading: false,
  specificCoach: [],
  getCoachByTeamIdLoading: false,
  getCoachByTeamIdError: null,
  teamCoach: {},
  getCoachesByFacilityIdError: null,
  getCoachesByFacilityIdLoading: false,
  leagueTeams: [],
  getManagersError: null,
  getManagersLoading: false,
  managers: [],
  getManagerByIdError: null,
  getManagerByIdLoading: false,
  specificManager: {},
  getManagerByFacilityIdError: null,
  getManagerByFacilityIdLoading: false,
  facilityManager: {},
  addFacilityIdToUserError: null,
  addFacilityIdToUserLoading: false,
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
      return { ...state, user: action.payload, createUserLoading: false };
    case CREATE_USER_FAIL:
      return {
        ...state,
        createUserError: action.payload,
        createUserLoading: false
      };

    case GET_USERS:
      return {
        ...state,
        getUsersLoading: true,
        getUsersError: null
      };
    case GET_USERS_SUCCESS:
      // const loggedUser = action.payload.foundUsers[0]
      return {
        ...state,
        users: action.payload.foundUsers,
        getUsersLoading: false,
        // user: loggedUser

      };
    case GET_USERS_FAIL:
      return {
        ...state,
        getParentByIdError: action.payload,
        getParentByIdLoading: false
      };

    case GET_PARENTS:
      return {
        ...state,
        getParentsLoading: true,
        getParentsError: null
      };
    case GET_PARENTS_SUCCESS:
      return {
        ...state,
        parents: action.payload.user,
        getParentsLoading: false
      };
    case GET_PARENTS_FAIL:
      return {
        ...state,
        getParentsError: action.payload,
        getParentsLoading: false
      };
    case GET_PARENT_BY_PARENTID:
      return {
        ...state,
        getParentByIdLoading: true,
        getParentByIdError: null
      };
    case GET_PARENT_BY_PARENTID_SUCCESS:
      return {
        ...state,
        specificParent: action.payload.user,
        getParentByIdLoading: false
      };
    case GET_PARENT_BY_PARENTID_FAIL:
      return {
        ...state,
        getParentByIdError: action.payload,
        getParentByIdLoading: false
      };

    case GET_PARENTS_BY_TEAMID:
      return {
        ...state,
        getParentsByTeamIdLoading: true,
        getParentsByTeamIdError: null
      };
    case GET_PARENTS_BY_TEAMID_SUCCESS:
      return {
        ...state,
        teamParents: action.payload.user,
        getParentsByTeamIdLoading: false
      };
    case GET_PARENTS_BY_TEAMID_FAIL:
      return {
        ...state,
        getParentsByTeamIdError: action.payload,
        getParentsByTeamIdLoading: false
      };

    case GET_COACHES:
      return {
        ...state,
        getCoachesLoading: true,
        getCoachesError: null
      };
    case GET_COACHES_SUCCESS:
      return {
        ...state,
        coaches: action.payload.foundCoaches,
        getCoachesLoading: false
      };
    case GET_COACHES_FAIL:
      return {
        ...state,
        getCoachesError: action.payload,
        getCoachesLoading: false
      };

    case GET_COACH_BY_COACHID:
      return {
        ...state,
        getCoachByIdLoading: true,
        getCoachByIdError: null
      };
    case GET_COACH_BY_COACHID_SUCCESS:
      return {
        ...state,
        specificCoach: action.payload,
        getCoachByIdLoading: false
      };
    case GET_COACH_BY_COACHID_FAIL:
      return {
        ...state,
        getCoachByIdError: action.payload,
        getCoachByIdLoading: false
      };

    case GET_COACH_BY_TEAMID:
      return {
        ...state,
        getCoachByTeamIdLoading: true,
        getCoachByTeamIdError: null
      };
    case GET_COACH_BY_TEAMID_SUCCESS:
      return {
        ...state,
        teamCoach: action.payload,
        getCoachByTeamIdLoading: false
      };
    case GET_COACH_BY_TEAMID_FAIL:
      return {
        ...state,
        getCoachByTeamIdError: action.payload,
        getCoachByTeamIdLoading: false
      };

    case GET_COACHES_BY_FACILITYID:
      return {
        ...state,
        getCoachesByFacilityIdLoading: true,
        getCoachesByFacilityIdError: null
      };
    case GET_COACHES_BY_FACILITYID_SUCCESS:
      return {
        ...state,
        leagueTeams: action.payload,
        getCoachesByFacilityIdLoading: false
      };
    case GET_COACHES_BY_FACILITYID_FAIL:
      return {
        ...state,
        getCoachesByFacilityIdError: action.payload,
        getCoachesByFacilityIdLoading: false
      };

    case GET_MANAGERS:
      return {
        ...state,
        getManagersLoading: true,
        getManagersError: null
      };
    case GET_MANAGERS_SUCCESS:
      return {
        ...state,
        managers: action.payload.foundManagers,
        getManagersLoading: false
      };
    case GET_MANAGERS_FAIL:
      return {
        ...state,
        getManagersError: action.payload,
        getManagersLoading: false
      };

    case GET_MANAGER_BY_MANAGERID:
      return {
        ...state,
        getManagerByIdLoading: true,
        getManagerByIdError: null
      };
    case GET_MANAGER_BY_MANAGERID_SUCCESS:
      return {
        ...state,
        specificManager: action.payload,
        getManagerByIdLoading: false
      };
    case GET_MANAGER_BY_MANAGERID_FAIL:
      return {
        ...state,
        getManagerByIdError: action.payload,
        getManagerByIdLoading: false
      };

    case GET_MANAGER_BY_FACILITYID:
      return {
        ...state,
        getManagerByFacilityIdLoading: true,
        getManagerByFacilityIdError: null
      };
    case GET_MANAGER_BY_FACILITYID_SUCCESS:
      return {
        ...state,
        facilityManager: action.payload,
        getManagerByFacilityIdLoading: false
      };
    case GET_MANAGER_BY_FACILITYID_FAIL:
      return {
        ...state,
        getManagerByFacilityIdError: action.payload,
        getManagerByFacilityIdLoading: false
      };

    case ADD_FACILITYID_TO_USER:
      return {
        ...state,
        addFacilityIdToUserLoading: true,
        addFacilityIdToUserError: null
      };
    case ADD_FACILITYID_TO_USER_SUCCESS:
      return {
        ...state,
        addFacilityIdToUserLoading: false
      };
    case ADD_FACILITYID_TO_USER_FAIL:
      return {
        ...state,
        addFacilityIdToUserError: action.payload,
        addFacilityIdToUserLoading: false
      };

    case EDIT_PROFILE:
      return { ...state, editUserLoading: true, editUserError: null };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        userId: action.payload.id,
        contactPhone: action.payload.contactPhone,
        teamAffiliation: action.payload.teamAffiliation,
        editUserLoading: false
      };
    case EDIT_PROFILE_FAIL:
      return {
        ...state,
        editUserError: action.payload,
        editUserLoading: false
      };
    case GET_USER_BY_ID:
      const foundUser = state.users.find(user => user._id === action.payload)
      return {
        ...state,
        user: foundUser
      }
    default:
      return state;
  }
};
