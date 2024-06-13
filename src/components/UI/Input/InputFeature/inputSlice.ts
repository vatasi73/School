import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  email: string;
  password: string;
  tempEmail: string;
  tempPassword: string;
  isFormValid: null | boolean;
  userIsAuth: boolean;
}

const initialInputState: InputState = {
  email: "",
  password: "",
  tempEmail: "",
  tempPassword: "",
  isFormValid: null,
  userIsAuth: false,
};

const inputSlice = createSlice({
  name: "input",
  initialState: initialInputState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
      state.tempEmail = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
      state.tempPassword = action.payload;
    },
    setUserIsAuth(state, action: PayloadAction<boolean>) {
      state.userIsAuth = action.payload;
    },
    setIsFormValid(state, action: PayloadAction<boolean>) {
      state.isFormValid = action.payload;
    },
    setAuthStatus(state) {
      if (
        state.tempEmail === "user@mail.ru" &&
        state.tempPassword === "userpassword"
      ) {
        state.userIsAuth = true;
      } else {
        state.userIsAuth = false;
      }
      state.tempEmail = "";
      state.tempPassword = "";
    },
  },
});

export const {
  setEmail,
  setPassword,
  setUserIsAuth,
  setAuthStatus,
  setIsFormValid,
} = inputSlice.actions;
export const InputReducer = inputSlice.reducer;
