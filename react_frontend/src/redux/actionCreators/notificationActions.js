import {
  CLEAR_NOTIFICATION,
  ADD_NOTIFICATION,
  ADD_AUTH_NOTIFICATION,
  ADD_CART_NOTIFICATION,
  ADD_ORDER_NOTIFICATION,
  ADD_PRODUCT_NOTIFICATION,
  ADD_USER_NOTIFICATION,
  CLEAR_AUTH_NOTIFICATION,
  CLEAR_CART_NOTIFICATION,
  CLEAR_PRODUCT_NOTIFICATION,
  CLEAR_ORDER_NOTIFICATION,
  CLEAR_USER_NOTIFICATION,
} from "../constants.js";

export const clearNotification = () => {
  return {
    type: CLEAR_NOTIFICATION,
  };
};

export const addNotification = (notification) => {
  return {
    type: ADD_NOTIFICATION,
    payload: notification,
  };
};

export const addAuthNotification = (notification) => {
  return {
    type: ADD_AUTH_NOTIFICATION,
    payload: notification,
  };
};

export const addCartNotification = (notification) => {
  return {
    type: ADD_CART_NOTIFICATION,
    payload: notification,
  };
};

export const addOrderNotification = (notification) => {
  return {
    type: ADD_ORDER_NOTIFICATION,
    payload: notification,
  };
};

export const addUserNotification = (notification) => {
  return {
    type: ADD_USER_NOTIFICATION,
    payload: notification,
  };
};

export const addProductNotification = (notification) => {
  return {
    type: ADD_PRODUCT_NOTIFICATION,
    payload: notification,
  };
};

export const clearAuthNotification = (notification) => {
  return {
    type: CLEAR_AUTH_NOTIFICATION,
    payload: notification,
  };
};

export const clearCartNotification = (notification) => {
  return {
    type: CLEAR_CART_NOTIFICATION,
    payload: notification,
  };
};

export const clearOrderNotification = (notification) => {
  return {
    type: CLEAR_ORDER_NOTIFICATION,
    payload: notification,
  };
};

export const clearUserNotification = (notification) => {
  return {
    type: CLEAR_USER_NOTIFICATION,
    payload: notification,
  };
};

export const clearProductNotification = (notification) => {
  return {
    type: CLEAR_PRODUCT_NOTIFICATION,
    payload: notification,
  };
};
