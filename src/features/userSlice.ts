import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const userCredentials = {
  login: "developer21",
  password: "123456",
};

export type Credentials = {
  login: string;
  password: string;
};

export type State = {
  inputCredentials: Credentials;
  disabledButton: boolean;
};

const initialState: State = {
  inputCredentials: {
    login: "",
    password: "",
  },
  disabledButton: true,
};

function checkCredentials(login: string, password: string) {
  return (
    login === userCredentials.login && password === userCredentials.password
  );
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginChange: (state, action: PayloadAction<string>) => {
      state.inputCredentials.login = action.payload;
      if (
        checkCredentials(
          state.inputCredentials.login,
          state.inputCredentials.password
        )
      ) {
        state.disabledButton = false;
      }
    },

    passwordChange: (state, action: PayloadAction<string>) => {
      state.inputCredentials.password = action.payload;
      if (
        checkCredentials(
          state.inputCredentials.login,
          state.inputCredentials.password
        )
      ) {
        state.disabledButton = false;
      }
    },
  },
});

export const selectCredentials = (state: RootState) =>
  state.user.inputCredentials;
export const isDisabled = (state: RootState) => state.user.disabledButton;
export const { loginChange, passwordChange } = userSlice.actions;

export default userSlice.reducer;
