import { ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  loginChange,
  passwordChange,
  selectLogin,
  selectPassword,
  isDisabled,
} from "../userSlice";
import Styles from "./Styles";

export function Login() {
  const dispatch = useAppDispatch();
  const login = useAppSelector(selectLogin);
  const password = useAppSelector(selectPassword);
  const disabled = useAppSelector(isDisabled);
  let history = useHistory();

  function handleLoginChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(loginChange(event.target.value));
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(passwordChange(event.target.value));
  }

  function handleClick() {
    history.push("/profile");
  }

  return (
    <Styles>
      <form>
        <div>
          <input
            value={login}
            onChange={handleLoginChange}
            type="login"
            placeholder="Login"
            required
          />
        </div>
        <div>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit" disabled={disabled} onClick={handleClick}>
          Войти
        </button>
      </form>
    </Styles>
  );
}
