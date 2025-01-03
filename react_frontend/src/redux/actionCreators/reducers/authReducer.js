import {LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS, INIT_USER} from "../../constants";


const authReducer = (state = {role: "guest"}, action) => {
    switch (action.type) {
      case INIT_USER:
      return {...action.payload}
      case LOGIN_SUCCESS:
        console.log("Successful login");
        return {...action.payload};
      case LOGOUT_SUCCESS:
        console.log("Successful logout");
        return { role: "guest" };
      case REGISTER_SUCCESS:
        console.log("Successful registration");
        return {...action.payload};
      default:
        return state;
    }
  }; 
  
  export default authReducer;