import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  transation: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTransations: (state) => {},
  },
});

export const { getTransations } = expenseSlice.actions;

export default expenseSlice.reducer;
