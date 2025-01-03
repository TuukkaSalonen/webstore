import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actionCreators/thunks/auth";
import { dataTestIds } from "../tests/constants/components";
//import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const submitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(login(formData));
  }, [dispatch, formData]);

  const handleEmailChange = useCallback((e) => {
    setFormData({ ...formData, email: e.target.value });
  }, [formData, setFormData]);

  const handlePasswordChange = useCallback((e) => {
    setFormData({ ...formData, password: e.target.value });
  }, [formData, setFormData]);

  /*
  useEffect(() => {
    if (!isGuest) {
      navigate('/');
    }
  }, [isGuest, navigate]);
  */

  return (
    <div data-testid={dataTestIds.containerId.main}>
      <h2>Login</h2>
      <form data-testid={dataTestIds.containerId.form} onSubmit={submitForm}>
          <label htmlFor="email">Email: </label>
            <input data-testid={dataTestIds.inputId.email}
              type="email"
              name="email"
              id="email"
              onChange={handleEmailChange}
              required
              placeholder="user@example.com"
            ></input>
            <br></br>
            <label htmlFor="password">Password: </label>
            <input data-testid={dataTestIds.inputId.password}
              type="password"
              name="password"
              id="password"
              size={25}
              required
              onChange={handlePasswordChange}
              placeholder="password (atleast 10 characters)"
            ></input>
            <br></br>
        <button type="submit" data-testid={dataTestIds.clickId.submit}>
          Login
        </button>
      </form>
    </div>
  );
};
