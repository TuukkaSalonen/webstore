import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNotification } from "../redux/actionCreators/notificationActions";
import { errorMessages } from "../redux/constants";
import { UsersItem } from "./UsersItem";
import { getUsers } from "../redux/actionCreators/thunks/users";
import { dataTestIds } from "../tests/constants/components";

export const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth).role;
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (!role || role !== "admin") {
      navigate("/");
      dispatch(
        addNotification({ error: true, message: errorMessages.authentication })
      );
    } else {
      if (users.length === 0) {
        dispatch(getUsers());
      }
    }
  }, [role, navigate, dispatch]);

  const userList = users.map((userItem) => (
    <UsersItem user={userItem} key={userItem.id} />
  ));

  return (
    <div  data-testid={dataTestIds.containerId.main}>
      <h2>Users</h2>
      {userList.length > 0 ? (
        <ul>{ userList } </ul>
      ) : (
        <div data-testid={dataTestIds.containerId.empty}>No users</div>
      )}
    </div>
  );
};
