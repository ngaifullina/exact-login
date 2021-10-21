import React from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  loginChange,
  passwordChange,
  selectCredentials,
  isDisabled,
} from "../userSlice";
import Styles from "./Styles";

export function Login() {
  const dispatch = useAppDispatch();
  const { login, password } = useAppSelector(selectCredentials);
  const disabled = useAppSelector(isDisabled);
  let history = useHistory();
  // todo type
  function handleLoginChange(event: any) {
    dispatch(loginChange(event.target.value));
  }

  function handlePasswordChange(event: any) {
    dispatch(passwordChange(event.target.value));
  }

  function handleClick() {
    history.push("/account");
  }

  return (
    <Styles>
      <form>
        <div>
          <input
            value={login}
            onChange={handleLoginChange}
            type="login"
            className="field-long"
            placeholder="Login"
            required
          />
        </div>
        <div>
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            className="field-long"
            placeholder="password"
            required
          />
        </div>
        <button type="submit" disabled={disabled} onClick={handleClick}>
          Log in
        </button>
      </form>
    </Styles>
  );
}
