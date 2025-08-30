import { configureStore } from "@reduxjs/toolkit";
import { generatedApi } from "../api/generated-api";

export const store = configureStore({
  reducer: {
    [generatedApi.reducerPath]: generatedApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generatedApi.middleware),
});
