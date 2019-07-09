import { domain, jsonHeaders, handleJsonResponse } from "./constants";
//import { store } from "../index";
import {
  login,
  createFacility,
  addUserIdToTeam,
  createTeam,
  addTeamIdToFacility
} from "../actions";
import { push } from "connected-react-router";

const url = domain + "users";

export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";
export const ADD_FACILITYID_TO_USER = "ADD_FACILITYID_TO_USER";
export const ADD_FACILITYID_TO_USER_SUCCESS = "ADD_FACILITYID_TO_USER_SUCCESS";
export const ADD_FACILITYID_TO_USER_FAIL = "ADD_FACILITYID_TO_USER_FAIL";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";
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
      dispatch(login({ email: userData.email, password: userData.password }));
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
      dispatch(push("/profile"));
    });
};

export const createUserThenLoginThenCreateTeamThenAddTeamIdToCoachThenAddTeamIdToFacilityThenRedirect = (
  userData,
  teamData
) => (dispatch, getState) => {
  dispatch(createUser(userData))
    .then(() => {
      dispatch(login({ email: userData.email, password: userData.password }));
    })
    .then(() => {
      let userId = getState().users.userId;
      teamData.coachId = userId;
      dispatch(createTeam(teamData));
    })
    .then(() => {
      let teamId = getState().teams.teamId;
      let userId = getState().users.userId;
      dispatch(addFacilityIdToUser({ userId: userId, teamId: teamId }));
    })
    .then(() => {
      let teamId = getState().teams.teamId;
      let facilityId = userData.facilityId;
      if (facilityId !== null) {
        dispatch(
          addTeamIdToFacility({ facilityId: facilityId, teamId: teamId })
        );
      }
    })
    .then(() => {
      dispatch(push("/profile"));
    });
};

export const createUserThenLoginThenCreateFacilityThenAddFacilityIdToUserThenRedirect = (
  userData,
  facilityData
) => (dispatch, getState) => {
  dispatch(createUser(userData))
    .then(() => {
      dispatch(login({ email: userData.email, password: userData.password }));
    })
    .then(() => {
      let userId = getState().users.userId;
      facilityData.managerId = userId;
      dispatch(createFacility(facilityData));
    })
    .then(() => {
      let facilityId = getState().facilities.facilityId;
      let userId = getState().users.userId;
      dispatch(addFacilityIdToUser({ userId: userId, facilityId: facilityId }));
    })
    .then(() => {
      dispatch(push("/profile"));
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
