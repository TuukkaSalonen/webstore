import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Redux-devtools extension library
import { composeWithDevTools } from "@redux-devtools/extension";
import notificationsReducer from "./actionCreators/reducers/notificationReducer";
import authReducer from "./actionCreators/reducers/authReducer";
import productReducer from "./actionCreators/reducers/productReducer";
import cartReducer from "./actionCreators/reducers/cartReducer";
import ordersReducer from "./actionCreators/reducers/ordersReducer";
import userReducer from "./actionCreators/reducers/userReducer"

export const reducers = combineReducers({
  notification: notificationsReducer,
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
  users: userReducer
});

export default legacy_createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
