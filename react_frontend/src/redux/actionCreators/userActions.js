import { CLEAR_USERS, FETCH_USERS, REMOVE_USER, UPDATE_USER } from "../constants.js";

export const clearUsers = () => {
    return {
        type: CLEAR_USERS
    }
};

export const fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        payload: users
    }
};

export const removeUser = (user) => {
    return {
        type: REMOVE_USER,
        payload: user
    }
}

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}