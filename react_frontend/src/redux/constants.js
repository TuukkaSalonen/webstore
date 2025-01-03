// Cart constants
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REDUCE_ITEM = "REDUCE_ITEM";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const CLEAR_CART = "CLEAR_CART";
export const SET_ITEMS = "SET_ITEMS";

// Product constants
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";

// Auth constants
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const INIT_USER = 'INIT_USER';

// Order constants
export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDERS = "SET_ORDERS";
export const SET_ORDER = "SET_ORDER";
export const CLEAR_ORDERS = "CLEAR_ORDERS";

// User constants
export const FETCH_USERS = 'FETCH_USERS';
export const CLEAR_USERS = 'CLEAR_USERS';
export const REMOVE_USER = 'REMOVE_USER';
export const UPDATE_USER = 'UPDATE_USER';

// Notification constants
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

export const ADD_USER_NOTIFICATION = 'ADD_USER_NOTIFICATION';
export const ADD_AUTH_NOTIFICATION = 'ADD_AUTH_NOTIFICATION';
export const ADD_PRODUCT_NOTIFICATION = 'ADD_PRODUCT_NOTIFICATION';
export const ADD_CART_NOTIFICATION = 'ADD_CART_NOTIFICATION';
export const ADD_ORDER_NOTIFICATION = 'ADD_ORDER_NOTIFICATION';

export const CLEAR_USER_NOTIFICATION = 'CLEAR_USER_NOTIFICATION';
export const CLEAR_AUTH_NOTIFICATION = 'CLEAR_AUTH_NOTIFICATION';
export const CLEAR_PRODUCT_NOTIFICATION = 'CLEAR_PRODUCT_NOTIFICATION';
export const CLEAR_CART_NOTIFICATION = 'CLEAR_CART_NOTIFICATION';
export const CLEAR_ORDER_NOTIFICATION = 'CLEAR_ORDER_NOTIFICATION';


// Url
export const url = "http://localhost:3001/api/"

//Messages
export const errorMessages = {
    name: "Too short name. Must be 3 or more characters",
    email: "Invalid email",
    password: "Too short password. Must be 10 or more characters",
    passwordMatch: "Passwords don't match",
    authentication: "Authentication required",
    productNotFound: "Product was not found",
    userNotFound: "User was not found"
}

export const successMessages = {
    loginSuccess: "Login was successful",
    logOutSuccess: "Logged out successfully",
    registrationSuccess: "Registration was successful",
    userLoaded: "User checked",
    loading: "Loading...",
    order: "New order sent",
    userDeleted: "User deleted successfully",
    userUpdated: "User updated successfully",
    productUpdated: "Product updated successfully",
    productDeleted: "Product deleted successfully",
    productCreated: "Product created successfully",
    cartAdd: "Product added to cart",
    cartReduce: "Product removed from cart",
    productsLoaded: "Products loaded",
    ordersLoaded: "Orders loaded",
    usersLoaded: "Users loaded"
}