import { createSlice } from "@reduxjs/toolkit";

// create counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, { type, payload }) => {
      state.count++;
    },
    decrement: (state, { type, payload }) => {
      state.count--;
    },
  },
  extraReducers: () => {},
});

// selector
export const selectCount = (state) => state.counter

// actions
export const {increment, decrement} = counterSlice.actions;

// reducer
export default counterSlice.reducer;
