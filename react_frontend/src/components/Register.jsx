import { register } from "../redux/actionCreators/thunks/auth";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataTestIds } from "../tests/constants/components";

export const Register = () => {
  const isGuest = useSelector((state) => state.auth).role === "guest";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordc: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = useCallback(
    (e) => {
      console.log("register");
      e.preventDefault();
      console.log(formData);

      dispatch(register(formData));
    },
    [dispatch, formData]
  );

  useEffect(() => {
    if (!isGuest) {
      navigate("/");
    }
  }, [isGuest, navigate]);

  return (
    <form onSubmit={submitForm} data-testid={dataTestIds.containerId.form}>
      <h2>Register</h2>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={useCallback(
          (e) => setFormData({ ...formData, name: e.target.value }),
          [setFormData, formData]
        )}
        required
        placeholder="John Doe"
        data-testid={dataTestIds.inputId.name}
      />
      <br></br>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={useCallback(
          (e) => setFormData({ ...formData, email: e.target.value }),
          [setFormData, formData]
        )}
        required
        placeholder="user@example.com"
        data-testid={dataTestIds.inputId.email}
      ></input>
      <br></br>
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={useCallback(
          (e) => setFormData({ ...formData, password: e.target.value }),
          [setFormData, formData]
        )}
        size={25}
        required
        placeholder="password (atleast 10 characters)"
        data-testid={dataTestIds.inputId.password}
      ></input>
      <br></br>
      <label htmlFor="password-confirmation">Password confirmation: </label>
      <input
        type="password"
        name="password-confirmation"
        id="password-confirmation"
        onChange={useCallback(
          (e) => setFormData({ ...formData, passwordc: e.target.value }),
          [setFormData, formData]
        )}
        required
        placeholder="password confirmation"
        data-testid={dataTestIds.inputId.passwordConfirmation}
      ></input>
      <br></br>
      <button type="submit" data-testid={dataTestIds.clickId.submit}>
        Register
      </button>
    </form>
  );
};
