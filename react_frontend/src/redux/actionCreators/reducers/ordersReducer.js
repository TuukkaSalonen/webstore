import {
  ADD_ORDER,
  CLEAR_ORDERS,
  SET_ORDERS,
  SET_ORDER,
} from "../../constants";

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      console.log("Add order");
      return [...state, action.payload];
    case SET_ORDERS:
      console.log("Set orders");
      return [...action.payload];
    case SET_ORDER:
      return [action.payload];
    case CLEAR_ORDERS:
      console.log("Clear orders");
      return [];
    default:
      return state;
  }
};

export default ordersReducer;
