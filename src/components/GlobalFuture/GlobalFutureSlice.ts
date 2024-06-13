import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGlobalFeatureState {
  navNum: number | null;
  anchorEl: null | HTMLElement;
  lesson: string;
  curentDate: Date;
}

const initialGlobalFeature: IGlobalFeatureState = {
  navNum: 0,
  anchorEl: null,
  lesson: "Выбрать предмет",
  curentDate: new Date(),
};

const GlobalFeatureSlice = createSlice({
  name: "globalFeature",
  initialState: initialGlobalFeature,
  reducers: {
    setNavNum(state, action: PayloadAction<number>) {
      state.navNum = action.payload;
    },
    setAnchorEl(state, action: PayloadAction<null>) {
      state.anchorEl = action.payload;
    },
    setLesson(state, action: PayloadAction<string>) {
      state.lesson = action.payload;
    },
    setCurrentDate(state, action: PayloadAction<Date>) {
      state.curentDate = action.payload;
    },
  },
});

export const { setNavNum, setAnchorEl, setLesson, setCurrentDate } =
  GlobalFeatureSlice.actions;
export const GlobalFeatureReducer = GlobalFeatureSlice.reducer;
