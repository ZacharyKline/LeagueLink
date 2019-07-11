import { domain, jsonHeaders, handleJsonResponse } from "./constants";
//import { store } from "../index";
import {
  login,
  createFacility,
  addUserIdToTeam,
  createTeam,
  addTeamIdToFacility,
  loginThenGoToUserProfile
} from "../actions";
import { push } from "connected-react-router";

const url = domain + "users";
//working, not saving teamIds for parents, different key values from expected
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";
//working, different key values from expected
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";

//working, same as get users
export const GET_PARENTS = "GET_PARENTS";
export const GET_PARENTS_SUCCESS = "GET_PARENTS_SUCCESS";
export const GET_PARENTS_FAIL = "GET_PARENTS_FAIL";
//working
export const GET_PARENT_BY_PARENTID = "GET_PARENT_BY_PARENTID";
export const GET_PARENT_BY_PARENTID_SUCCESS = "GET_PARENT_BY_PARENTID_SUCCESS";
export const GET_PARENT_BY_PARENTID_FAIL = "GET_PARENT_BY_PARENTID_FAIL";
//untested, may need backend addition
export const GET_PARENTS_BY_TEAMID = "GET_PARENTS_BY_TEAMID";
export const GET_PARENTS_BY_TEAMID_SUCCESS = "GET_PARENTS_BY_TEAMID_SUCCESS";
export const GET_PARENTS_BY_TEAMID_FAIL = "GET_PARENTS_BY_TEAMID_FAIL";
//working, same as get users
export const GET_COACHES = "GET_COACHES";
export const GET_COACHES_SUCCESS = "GET_COACHES_SUCCESS";
export const GET_COACHES_FAIL = "GET_COACHES_FAIL";
//working
export const GET_COACH_BY_COACHID = "GET_COACH_BY_COACHID";
export const GET_COACH_BY_COACHID_SUCCESS = "GET_COACH_BY_COACHID_SUCCESS";
export const GET_COACH_BY_COACHID_FAIL = "GET_COACH_BY_COACHID_FAIL";
//untested, may need additon on backend
export const GET_COACH_BY_TEAMID = "GET_COACH_BY_TEAMID";
export const GET_COACH_BY_TEAMID_SUCCESS = "GET_COACH_BY_TEAMID_SUCCESS";
export const GET_COACH_BY_TEAMID_FAIL = "GET_COACH_BY_TEAMID_FAIL";
//untested, will need addition on backend
export const GET_COACHES_BY_FACILITYID = "GET_COACHES_BY_FACILITYID";
export const GET_COACHES_BY_FACILITYID_SUCCESS =
  "GET_COACHES_BY_FACILITYID_SUCCESS";
export const GET_COACHES_BY_FACILITYID_FAIL = "GET_COACHES_BY_FACILITYID_FAIL";
//working, same as get users
export const GET_MANAGERS = "GET_MANAGERS";
export const GET_MANAGERS_SUCCESS = "GET_MANAGERS_SUCCESS";
export const GET_MANAGERS_FAIL = "GET_MANAGERS_FAIL";
//working
export const GET_MANAGER_BY_MANAGERID = "GET_MANAGER_BY_MANAGERID";
export const GET_MANAGER_BY_MANAGERID_SUCCESS =
  "GET_MANAGER_BY_MANAGERID_SUCCESS";
export const GET_MANAGER_BY_MANAGERID_FAIL = "GET_MANAGER_BY_MANAGERID_FAIL";
//untested, will need additon to backend
export const GET_MANAGER_BY_FACILITYID = "GET_MANAGER_BY_FACILITYID";
export const GET_MANAGER_BY_FACILITYID_SUCCESS =
  "GET_MANAGER_BY_FACILITYID_SUCCESS";
export const GET_MANAGER_BY_FACILITYID_FAIL = "GET_MANAGER_BY_FACILITYID_FAIL";
//untested, will need addiotn to backend
export const ADD_FACILITYID_TO_USER = "ADD_FACILITYID_TO_USER";
export const ADD_FACILITYID_TO_USER_SUCCESS = "ADD_FACILITYID_TO_USER_SUCCESS";
export const ADD_FACILITYID_TO_USER_FAIL = "ADD_FACILITYID_TO_USER_FAIL";
//uncertain of status, I have not tested
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";
//I have not tested
export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "EDIT_PROFILE_FAIL";

export const createUser = registerData => dispatch => {
  dispatch({
    type: CREATE_USER
  });
  return fetch(url + "/register", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATE_USER_FAIL, payload: err.message })
      );
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_USERS_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_USERS_FAIL, payload: err.message })
      );
    });
};

export const getParents = () => dispatch => {
  dispatch({ type: GET_PARENTS });
  return fetch(url + "/parents", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_PARENTS_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_PARENTS_FAIL, payload: err.message })
      );
    });
};

export const getParentByParentId = parentId => dispatch => {
  dispatch({ type: GET_PARENT_BY_PARENTID });
  return fetch(url + `/parents/${parentId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_PARENT_BY_PARENTID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_PARENT_BY_PARENTID_FAIL, payload: err.message })
      );
    });
};

export const getParentsByTeamId = teamId => dispatch => {
  dispatch({ type: GET_PARENTS_BY_TEAMID });
  return fetch(url + `/parents?teamId=${teamId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_PARENTS_BY_TEAMID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_PARENTS_BY_TEAMID_FAIL, payload: err.message })
      );
    });
};

export const getCoaches = () => dispatch => {
  dispatch({ type: GET_COACHES });
  return fetch(url + "/coaches", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_COACHES_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_COACHES_FAIL, payload: err.message })
      );
    });
};

export const getCoachByCoachId = coachId => dispatch => {
  dispatch({ type: GET_COACH_BY_COACHID });
  return fetch(url + `/coaches/${coachId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_COACH_BY_COACHID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_COACH_BY_COACHID_FAIL, payload: err.message })
      );
    });
};

export const getCoachByTeamId = teamId => dispatch => {
  dispatch({ type: GET_COACH_BY_TEAMID });
  return fetch(url + `/coaches?teamId=${teamId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_COACH_BY_TEAMID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_COACH_BY_TEAMID_FAIL, payload: err.message })
      );
    });
};

export const getCoachesByFacilityId = facilityId => dispatch => {
  dispatch({ type: GET_COACHES_BY_FACILITYID });
  return fetch(url + `/coaches?facilityId=${facilityId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_COACHES_BY_FACILITYID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_COACHES_BY_FACILITYID_FAIL, payload: err.message })
      );
    });
};

export const getManagers = () => dispatch => {
  dispatch({ type: GET_MANAGERS });
  return fetch(url + "/managers", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_MANAGERS_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_MANAGERS_FAIL, payload: err.message })
      );
    });
};

export const getManagerByManagerId = managerId => dispatch => {
  dispatch({ type: GET_MANAGER_BY_MANAGERID });
  return fetch(url + `/managers/${managerId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_MANAGER_BY_MANAGERID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_MANAGER_BY_MANAGERID_FAIL, payload: err.message })
      );
    });
};

export const getManagerByFacilityId = facilityId => dispatch => {
  dispatch({ type: GET_MANAGER_BY_FACILITYID });
  return fetch(url + `/managers?facilityId=${facilityId}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_MANAGER_BY_FACILITYID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GET_MANAGER_BY_FACILITYID_FAIL, payload: err.message })
      );
    });
};

//dataObj {userId, facilityId}
export const addFacilityIdToUser = dataObj => dispatch => {
  dispatch({ type: ADD_FACILITYID_TO_USER });
  return fetch(url + `/${dataObj.userId}`, {
    method: "PATCH",
    headers: jsonHeaders,
    body: JSON.stringify(dataObj)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADD_FACILITYID_TO_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: ADD_FACILITYID_TO_USER_FAIL, payload: err.message })
      );
    });
};

const handleDeleteUser = () => (dispatch, getState) => {
  dispatch({
    type: DELETE_USER
  });

  const id = getState().auth.login.id;
  const token = getState().auth.login.token;

  return fetch(url + id, {
    method: "DELETE",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_USER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      console.log(err);
      return Promise.reject(
        dispatch({ type: DELETE_USER_FAIL, payload: err.message })
      );
    });
};

export const deleteUserThenGoToLoginPage = () => dispatch => {
  return dispatch(handleDeleteUser()).then(() => dispatch(push("/")));
};

export const createUserThenLoginThenAddUserIdToTeamTheRedirect = userData => (
  dispatch,
  getState
) => {
  dispatch(createUser(userData))
    .then(() => {
      return dispatch(
        login({ email: userData.email, password: userData.password })
      );
    })
    .then(() => {
      let teams = userData.teamIds;
      let userId = getState().users.userId;
      if (teams.length !== 0) {
        for (let i = 0; i < teams.length; i++) {
          let currentTeam = teams[i];
          dispatch(addUserIdToTeam({ id: currentTeam, parentId: userId }));
        }
      }
    })
    .then(() => {
      return dispatch(push("/profile"));
    });
};

export const createUserThenLoginThenCreateTeamThenAddTeamIdToCoachThenAddTeamIdToFacilityThenRedirect = (
  userData,
  teamData
) => (dispatch, getState) => {
  dispatch(createUser(userData))
    .then(() => {
      return dispatch(
        login({ email: userData.email, password: userData.password })
      );
    })
    .then(() => {
      let userId = getState().auth.login.id;
      teamData.coachId = userId;
      return dispatch(createTeam(teamData));
    })
    .then(() => {
      let teamId = getState().teams.teamId;
      let userId = getState().users.userId;
      return dispatch(addFacilityIdToUser({ userId: userId, teamId: teamId }));
    })
    .then(() => {
      let teamId = getState().teams.teamId;
      let facilityId = userData.facilityId;
      if (facilityId !== null) {
        return dispatch(
          addTeamIdToFacility({ facilityId: facilityId, teamId: teamId })
        );
      }
    })
    .then(() => {
      return dispatch(push("/profile"));
    });
};

export const createUserThenLoginThenCreateFacilityThenAddFacilityIdToUserThenRedirect = (
  userData,
  facilityData
) => (dispatch, getState) => {
  dispatch(createUser(userData))
    .then(() => {
      return dispatch(
        login({ email: userData.email, password: userData.password })
      );
    })
    .then(() => {
      let userId = getState().users.userId;
      facilityData.managerId = userId;
      return dispatch(createFacility(facilityData));
    })
    .then(() => {
      let facilityId = getState().facilities.facilityId;
      let userId = getState().users.userId;
      return dispatch(
        addFacilityIdToUser({ userId: userId, facilityId: facilityId })
      );
    })
    .then(() => {
      return dispatch(push("/profile"));
    });
};

export const editProfile = data => (dispatch, getState) => {
  const token = getState().auth.login.token;
  const id = getState().auth.login.id;
  dispatch({
    type: EDIT_PROFILE
  });
  return fetch(url + id, {
    method: "PUT",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: result.user
      });
    })
    .then(result => {
      dispatch(push("/profile"));
    })
    .catch(err => {
      console.log(err);
      return Promise.reject(
        dispatch({ type: EDIT_PROFILE_FAIL, payload: err.message })
      );
    });
};

export const createUserThenLogin = registerData => dispatch => {
  dispatch(createUser(registerData)).then(() => {
    let email = registerData.email;
    let password = registerData.password;
    return dispatch(
      loginThenGoToUserProfile({ email: email, password: password })
    );
  });
};

export const createUserThenLoginThenCreateTeam = (userData, teamData) => (
  dispatch,
  getState
) => {
  dispatch(createUser(userData))
    .then(() => {
      return dispatch(
        login({ email: userData.email, password: userData.password })
      );
    })
    .then(() => {
      let userId = getState().auth.login.id;
      teamData.coachIds = [userId];
      console.log(teamData);
      return dispatch(createTeam(teamData));
    });
};
