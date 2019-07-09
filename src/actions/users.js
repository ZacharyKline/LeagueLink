import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { store } from '../index'

const url = domain + '/users'

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

const handleDeleteUser = () => dispatch => {
    const id = store.getState().auth.login.id;
    const token = store.getState().auth.login.token;

    return fetch(url + id, {
        method: 'DELETE',
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
                dispatch({ type: DELETE_USER_FAILURE, payload: err.message })
            );
        });
}

export const deleteUserThenGoToLoginPage = () => dispatch => {
    return dispatch(handleDeleteUser()).then(() => dispatch(push("/")));
};