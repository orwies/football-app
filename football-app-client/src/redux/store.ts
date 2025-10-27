import { configureStore } from "@reduxjs/toolkit";
import { generatedApi } from "../api/generated-api";
import { filtersReducer } from "./filters-slice";
import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector,
} from "react-redux";

export const store = configureStore({
  reducer: {
    [generatedApi.reducerPath]: generatedApi.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generatedApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
