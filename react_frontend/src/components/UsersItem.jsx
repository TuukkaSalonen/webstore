import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/actionCreators/thunks/users";
import { dataTestIds } from "../tests/constants/components";
import { useCallback } from "react";

export const UsersItem = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isEditable = user.id !== auth.id && auth.role === "admin";

  const removeUser = useCallback((e) => {
    e.preventDefault();
    dispatch(deleteUser(user.id));
  }, [dispatch, deleteUser]);

  const modifyUser = useCallback(() => {
    navigate(`${user.id}/modify`);
  }, [navigate]);

  return (
    <div data-testid={dataTestIds.containerId.listItem(user.id)}>
      <p data-testid={dataTestIds.textId.name}>Name: {user.name}</p>
      <p data-testid={dataTestIds.textId.role}>Role: {user.role}</p>
      <p data-testid={dataTestIds.linkId.inspect(user.id)}><Link to={`/users/${user.id}`}>Inspect user</Link></p>
      {isEditable && (
        <>
          <button onClick={modifyUser} data-testid={dataTestIds.clickId.modify}>Modify</button>
          <button onClick={removeUser} data-testid={dataTestIds.clickId.delete}>Delete</button>
        </>
      )}
    </div>
  );
};
