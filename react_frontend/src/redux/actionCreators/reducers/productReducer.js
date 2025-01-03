import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  SET_PRODUCTS,
  SET_PRODUCT,
} from "../../constants";

const initialState = {
  products: [],
  product: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("Add new product");
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case REMOVE_PRODUCT:
      console.log("Remove product");
      return  {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload)
      }
    case UPDATE_PRODUCT:
      console.log("Update product");
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case SET_PRODUCTS:
      console.log("Set products");
      return {
        ...state,
        products: action.payload,
      };
    case SET_PRODUCT:
      console.log("Set product");
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
