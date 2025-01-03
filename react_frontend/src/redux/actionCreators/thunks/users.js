import { url as base, successMessages } from "../../constants";
import { fetchUsers, removeUser, updateUser } from "../userActions";
import { addUserNotification } from "../notificationActions";

const url = `${base}users/`;

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(addUserNotification({error: null, message: successMessages.loading}));
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addUserNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addUserNotification({
            error: true,
            message: data.error,
          })
        );
      }
      console.log("GetUsers", data);
      dispatch(fetchUsers(data));
      dispatch(addUserNotification({error: false, message: successMessages.usersLoaded}));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${url}${id}`, {
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addUserNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addUserNotification({
            error: true,
            message: data.error,
          })
        );
      }
      //dispatch(fetchUsers(users));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
};

export const putUser = (user) => {
  return async (dispatch) => {
    dispatch(addUserNotification({error: null, message: successMessages.loading}));
    try {
      const response = await fetch(`${url}${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addUserNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addUserNotification({
            error: true,
            message: data.error,
          })
        );
      }
      dispatch(updateUser(data));
      dispatch(
        addUserNotification({
          error: false,
          message: successMessages.userUpdated,
        })
      );
    } catch (error) {
      console.log("Error updating user", error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    dispatch(addUserNotification({error: null, message: successMessages.loading}));
    try {
      const response = await fetch(`${url}${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();

      if (!response.ok) {
        if (typeof data.error === "object") {
          return dispatch(
            addUserNotification({
              error: true,
              message: Object.values(data.error)[0],
            })
          );
        }
        return dispatch(
          addUserNotification({
            error: true,
            message: data.error,
          })
        );
      }
      dispatch(removeUser(data));
      dispatch(
        addUserNotification({
          error: false,
          message: successMessages.userDeleted,
        })
      );
    } catch (error) {
      console.log("Error deleting user", error);
    }
  };
};
