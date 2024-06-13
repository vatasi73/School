import { RootState } from "../../store";

export const selectNavNum = (state: RootState) => state.globalFeature.navNum;
export const selectAnchorEl = (state: RootState) =>
  state.globalFeature.anchorEl;
export const selectLesson = (state: RootState) => state.globalFeature.lesson;
export const selectCurrentDay = (state: RootState) =>
  state.globalFeature.curentDate;
