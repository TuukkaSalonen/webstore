import {ADD_ORDER, CLEAR_ORDERS, SET_ORDERS, SET_ORDER} from "../constants";

export const addOrder = (order) => {
    return {
        type: ADD_ORDER,
        payload: order
    }
};

export const clearOrders = (orders) => {
    return {
        type: CLEAR_ORDERS,
        payload: orders
    }
};

export const setOrders = (orders) => {
    return {
        type: SET_ORDERS,
        payload: orders
    }
};

export const setOrder = (order) => {
    return {
        type: SET_ORDER,
        payload: order
    }
};