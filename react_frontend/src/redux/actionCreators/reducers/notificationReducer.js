import {
  ADD_AUTH_NOTIFICATION,
  ADD_CART_NOTIFICATION,
  ADD_ORDER_NOTIFICATION,
  ADD_USER_NOTIFICATION,
  ADD_PRODUCT_NOTIFICATION,
  CLEAR_AUTH_NOTIFICATION,
  CLEAR_PRODUCT_NOTIFICATION,
  CLEAR_USER_NOTIFICATION,
  CLEAR_CART_NOTIFICATION,
  CLEAR_ORDER_NOTIFICATION
} from "../../constants";

const initialState = {
  user: {
    error: null,
    message: null,
    id: null
  },
  order: {
    error: null,
    message: null,
  },
  auth: {
    error: null,
    message: null,
  },
  product: {
    error: null,
    message: null,
  },
  cart: {
    error: null,
    message: null,
  },
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTH_NOTIFICATION:
      console.log("Add auth notification");
      return {
        ...state,
        auth: { error: action.payload.error, message: action.payload.message },
      };
    case ADD_CART_NOTIFICATION:
      console.log("Add cart notification");
      return {
        ...state,
        cart: { error: action.payload.error, message: action.payload.message },
      };
    case ADD_ORDER_NOTIFICATION:
      console.log("Add order notification");
      return {
        ...state,
        order: { error: action.payload.error, message: action.payload.message },
      };
    case ADD_USER_NOTIFICATION:
      console.log("Add user notification");
      return {
        ...state,
        user: { error: action.payload.error, message: action.payload.message },
      };
    case ADD_PRODUCT_NOTIFICATION:
      console.log("Add product notification");
      return {
        ...state,
        product: {
          error: action.payload.error,
          message: action.payload.message,
        },
      };
    case CLEAR_AUTH_NOTIFICATION:
      console.log("Clear auth notification");
      return {
        ...state,
        auth: {},
      };
    case CLEAR_CART_NOTIFICATION:
      console.log("Clear cart notification");
      return {
        ...state,
        cart: {},
      };
    case CLEAR_ORDER_NOTIFICATION:
      console.log("Clear order notification");
      return {
        ...state,
        order: {},
      };
    case CLEAR_USER_NOTIFICATION:
      console.log("Clear user notification");
      return {
        ...state,
        user: {},
      };
    case CLEAR_PRODUCT_NOTIFICATION:
      console.log("Clear product notification");
      return {
        ...state,
        product: {},
      };
    default:
      return state;
  }
};

export default notificationsReducer;
