import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const userCredentials = {
  login: "developer21",
  password: "123456",
};

export type State = {
  login: string;
  password: string;
  disabledButton: boolean;
};

const initialState: State = {
  login: "",
  password: "",
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
      state.login = action.payload;
      if (checkCredentials(state.login, state.password)) {
        state.disabledButton = false;
      } else {
        state.disabledButton = true;
      }
    },

    passwordChange: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
      if (checkCredentials(state.login, state.password)) {
        state.disabledButton = false;
      } else {
        state.disabledButton = true;
      }
    },
  },
});

export const selectPassword = (state: RootState) => state.user.password;
export const selectLogin = (state: RootState) => state.user.login;
export const isDisabled = (state: RootState) => state.user.disabledButton;
export const { loginChange, passwordChange } = userSlice.actions;

export default userSlice.reducer;
