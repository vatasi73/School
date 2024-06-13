import { RootState } from "../../../store";

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectUnActiveUser = (state: RootState) => state.user.unActiveUser;
