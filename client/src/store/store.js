import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./reducer";
// created using RTK Query
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    expense: expenseSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
