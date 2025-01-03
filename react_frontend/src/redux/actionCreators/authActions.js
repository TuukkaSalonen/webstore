import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_USER_DETAILS,
  REGISTER_SUCCESS, INIT_USER
} from "../constants.js";

export const initUser = (user) => {
  return {
    type: INIT_USER,
    payload: user
  }
}

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const logoutSuccess = (user) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: user,
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_DETAILS,
    payload: user,
  };
};

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};
