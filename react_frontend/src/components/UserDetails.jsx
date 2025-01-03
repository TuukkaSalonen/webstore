import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser } from "../redux/actionCreators/thunks/users";
import { dataTestIds } from "../tests/constants/components";

export const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const auth = useSelector((state) => state.auth);
  const isEditable = userId !== auth.id && auth.role === "admin";
  const user = users.find((userItem) => userItem.id === userId);

  const removeUser = (e) => {
    e.preventDefault();
    dispatch(deleteUser(userId));
    navigate("/users");
  }
  const modifyUser = () => {
    navigate("modify");
  }

  if (!user) {
    return <div>User not found</div>;
  } else {
    return (
      <div data-testid={dataTestIds.containerId.inspect}>
        <h2 data-testid={dataTestIds.textId.name}>{user.name}</h2>
        <p data-testid={dataTestIds.textId.role}>Role: {user.role}</p>
        <p data-testid={dataTestIds.textId.email}>Email: {user.email}</p>
        {isEditable && (
          <>
            <button onClick={modifyUser} data-testid={dataTestIds.clickId.modify}>Modify</button>
            <button onClick={removeUser} data-testid={dataTestIds.clickId.delete}>Delete</button>
          </>
        )}
      </div>
    );
  }
};
