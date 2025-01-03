import { url } from "../../constants";
import { addAuthNotification } from "../notificationActions";
import { stateTypes } from "../../../tests/constants/components";
import { initUser, loginSuccess, logoutSuccess, registerSuccess } from "../authActions";
import { dataTestIds } from "../../../tests/constants/components";
import { validEmailRegex } from "../../../tests/constants/components";
import { successMessages, errorMessages } from "../../constants";
import { clearUsers } from "../userActions";
import { clearOrders } from "../orderActions";

export const initAuth = () => {
  return async (dispatch) => {
    dispatch(addAuthNotification({error: null, message: successMessages.loading}));
    const response = await fetch(`${url}` + "check-status", {
      headers: {
        Accept: "application/json",
      },
      credentials: 'include'
    });
    const data = await response.json();
    console.log("Init auth data: ", data);
    if (!response.ok) {
      if (typeof data.error === "object") {
        return dispatch(
          addAuthNotification({
            error: true,
            message: Object.values(data.error)[0],
          })
        );
      }
      return dispatch(
        addAuthNotification({
          error: true,
          message: data.error,
        })
      );
    }
    dispatch(initUser(data.user));
    dispatch(addAuthNotification({error: false, message: successMessages.userLoaded }));
  };
};

export const register = (userData) => {
  return async (dispatch) => {
    const userCredentials = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    if (userData.name.length < 3) {
      return dispatch(
        addAuthNotification({ error: true, message: errorMessages.name })
      );
    }
    if (!RegExp(validEmailRegex).test(userData.email)) {
      return dispatch(
        addAuthNotification({ error: true, message: errorMessages.email })
      );
    }
    if (userData.password.length < 10) {
      return dispatch(
        addAuthNotification({ error: true, message: errorMessages.password })
      );
    }
    if (userData.password !== userData.passwordc) {
      return dispatch(
        addAuthNotification({ error: true, message: errorMessages.passwordMatch })
      );
    }
    try {
      dispatch(addAuthNotification({error: null, message: successMessages.loading}));
      const response = await fetch(`${url}` + "register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(userCredentials),
      });

      if (!response.ok) {
        const data = await response.json();
        if (typeof data.error === "object") {
          return dispatch(
            addAuthNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addAuthNotification({
            error: true,
            message: data.error,
          })
        );
      }
      const { user } = await response.json();
      dispatch(registerSuccess(user));
      return dispatch(addAuthNotification({error: false, message: successMessages.registrationSuccess}));
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
};

export const login = (userData) => {
  console.log("login", userData);
  return async (dispatch) => {
    if (!RegExp(validEmailRegex).test(userData.email)) {
      return dispatch(
        addAuthNotification({ error: true, message: errorMessages.email })
      );
    }
    if (userData.password.length < 10) {
      return dispatch(
        addAuthNotification({ error: true, message: errorMessages.password })
      );
    }
    try {
      dispatch(addAuthNotification({error: null, message: successMessages.loading}));
      const response = await fetch(`${url}` + 'login', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
        credentials: 'include'
      });
      if (!response.ok) {
        const data = await response.json();
        if (typeof data.error === "object") {
          return dispatch(
            addAuthNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addAuthNotification({
            error: true,
            message: data.error,
          })
        );
      }
      const data = await response.json();
      console.log(data);
      dispatch(loginSuccess(data.user));
      dispatch(addAuthNotification({error: false, message: successMessages.loginSuccess}));
    } catch (error) {
      console.error("Error in login:", error);
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch(addAuthNotification({error: null, message: successMessages.loading}));
    const response = await fetch(`${url}` + "logout", {
      headers: {
        Accept: "application/json",
      },
      credentials: 'include'
    });

    if (!response.ok) {
      const data = await response.json();
      if (typeof data.error === "object") {
        return dispatch(
          addAuthNotification({
            error: true,
            message: Object.values(data.error)[0],
          })
        );
      }
      return dispatch(
        addAuthNotification({
          error: true,
          message: data.error,
        })
      );
    }
    dispatch(logoutSuccess());
    dispatch(clearUsers());
    dispatch(clearOrders());
    dispatch(addAuthNotification({error: false, message: successMessages.logOutSuccess}));
  };
};