import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Mihail from "../../../assets/Avatar/Mihail.jpg";
import Anna from "../../../assets/Avatar/Anna.jpg";

interface IUser {
  img: string;
  name: string;
  id: number;
}

interface IHeaderState {
  currentUser: IUser;
  unActiveUser: IUser;
  tempUser: IUser | null; // Промежуточное состояние для хранения временного пользователя
}

const initialHeader: IHeaderState = {
  currentUser: { img: Mihail, name: "Михаил", id: 1 },
  unActiveUser: { img: Anna, name: "Анна", id: 2 },
  tempUser: null,
};

const HeaderSlice = createSlice({
  name: "header",
  initialState: initialHeader,
  reducers: {
    setCurrentUser(state, action: PayloadAction<IUser>) {
      if (state.tempUser) {
        state.unActiveUser = state.tempUser;
      }
      state.tempUser = state.currentUser;
      state.currentUser = action.payload;
    },
    setUnActiveUser(state, action: PayloadAction<IUser>) {
      state.unActiveUser = action.payload;
    },
  },
});

export const { setCurrentUser, setUnActiveUser } = HeaderSlice.actions;
export const HeaderReducer = HeaderSlice.reducer;
