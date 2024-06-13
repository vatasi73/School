import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { InputReducer } from "./components/UI/Input/InputFeature/inputSlice";
import { GlobalFeatureReducer } from "./components/GlobalFuture/GlobalFutureSlice";
import { HeaderReducer } from "./components/Header/HeaderFeature/HeaderFeatureSlice";

export const store = configureStore({
  reducer: {
    input: InputReducer,
    globalFeature: GlobalFeatureReducer,
    user: HeaderReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
