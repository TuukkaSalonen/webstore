import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addNotification } from "../redux/actionCreators/notificationActions";
import { errorMessages } from "../redux/constants";
import { useState } from "react";
import { putUser } from "../redux/actionCreators/thunks/users";
import { dataTestIds } from "../tests/constants/components";

const selectStyle = { marginBottom: "15px" };

export const ModifyUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);
  const selectedUser = users.find((item) => item.id === userId);
  const isEditable = userId !== auth.id;
  const [role, setRole] = useState(selectedUser.role);

  const returnToPrevious = useCallback(() => {
    navigate("/users", { replace: true });
  }, [navigate]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const updatedUserData = {
      id: selectedUser.id,
      role: role,
    };
    dispatch(putUser(updatedUserData));
    returnToPrevious();
  }, [dispatch, selectedUser, role, returnToPrevious]);

  const handleRoleChange = useCallback((e) => {
    setRole(e.target.value);
  }, [setRole]);

  if (!selectedUser) {
    navigate("/");
    dispatch(
      addNotification({ error: true, message: errorMessages.userNotFound })
    );
    return null;
  }
  return (
    <form data-testid={dataTestIds.containerId.form}>
      <h2>Modify {selectedUser.id}</h2>
      <p data-testid={dataTestIds.textId.name}>Name: {selectedUser.name}</p>
      Role:
      <select
        value={role}
        onChange={handleRoleChange}
        data-testid={dataTestIds.selectId.role}
        style={selectStyle}
      >
        <option value="customer">customer</option>
        <option value="admin">admin</option>
      </select>
      <br></br>
      {isEditable && (
        <>
          <button
            type="submit"
            disabled={role === selectedUser.role}
            onClick={handleSubmit}
            data-testid={dataTestIds.clickId.submit}
          >
            Update
          </button>
        </>
      )}
      <button
        onClick={returnToPrevious}
        data-testid={dataTestIds.clickId.cancel}
      >
        Cancel
      </button>
    </form>
  );
};
