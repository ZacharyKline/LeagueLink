import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { store } from '../index'

const url = domain + '/users'

export const DELETE_USER = "DELETE_USER";

const handleDeleteUser = () => dispatch => {
    const id = store.getState().auth.login.id;
    const token = store.getState().auth.login.token;

    return fetch (url + id, {
        method: 'DELETE',
        headers: {
            ...jsonHeaders,
            Authorization: `Bearer ${token}`
        }
    })
    .then(handleJsonResponse)
    .then(result => {
      console.log(result);
    });
}

export const deleteUserThenGoToLoginPage = () => dispatch => {
    return dispatch(handleDeleteUser()).then(() => dispatch(push("/")));
  };