import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT, SET_PRODUCTS, SET_PRODUCT } from "../constants";

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
};

export const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    }
};

export const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        payload: product
    }
};

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
};

export const setProduct = (product) => {
    return {
        type: SET_PRODUCT,
        payload: product
    }
};