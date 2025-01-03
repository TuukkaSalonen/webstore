import { CLEAR_USERS, FETCH_USERS, REMOVE_USER, UPDATE_USER } from "../../constants";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log("Fetch users");
      return action.payload;
    case REMOVE_USER:
      return [...state.filter((user) => user.id !== action.payload.id)];
    case CLEAR_USERS:
      console.log("Clear users");
      return [];
    case UPDATE_USER:
      return [...state.map((user) => user.id === action.payload.id ? action.payload : user)];
    default:
      return state;
  }
};

export default usersReducer;
