import {ADD_ITEM, CLEAR_CART, REDUCE_ITEM, REMOVE_ITEM, 
    INCREMENT_ITEM, SET_ITEMS} from "../constants";

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
};

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
};

export const clearCart = () => {
    localStorage.removeItem("cart");
    return {
        type: CLEAR_CART,
    }
};

export const incrementItem = (id) => {
    return {
        type: INCREMENT_ITEM,
        payload: id
    }
};

export const reduceItem = (id) => {
    return {
        type: REDUCE_ITEM,
        payload: id
    }
};

export const setItems = (items) => {
    return {
        type: SET_ITEMS,
        payload: items
    }
};