import { RootState } from "../../../../store";

export const selectEmail = (state: RootState) => state.input.email;
export const selectPassword = (state: RootState) => state.input.password;
export const selectFormIsValid = (state: RootState) => state.input.isFormValid;
export const selectUserIsAuth = (state: RootState) => state.input.userIsAuth;
