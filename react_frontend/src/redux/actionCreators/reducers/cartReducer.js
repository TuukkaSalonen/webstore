import {
  ADD_ITEM,
  CLEAR_CART,
  REDUCE_ITEM,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  SET_ITEMS,
} from "../../constants";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("Reducer: Add item to cart");
      return [...state, action.payload];
    case REMOVE_ITEM:
      console.log("Reducer: Remove item from cart");
      return [...state.filter((item) => item.product.id !== action.payload)];
    case INCREMENT_ITEM:
      console.log("Reducer: Increment item count");
      return [
        ...state.map((item) => {
          console.log(item);
          if (item.product.id === action.payload) {
            item.quantity += 1;
          }
          return item;
        }),
      ];
    case REDUCE_ITEM:
      console.log("Reducer: Reduce item count");
      return [
        ...state.map((item) => {
          if (item.product.id === action.payload) {
            item.quantity -= 1;
          }
          return item;
        }),
      ];
    case SET_ITEMS:
      console.log("Reducer: Set items to cart");
      if (action.payload) {
        return [...action.payload];
      }
      return state;
    case CLEAR_CART:
      console.log("Reducer: Clear cart items");
      return [];
    default:
      return state;
  }
};

export default cartReducer;
