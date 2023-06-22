import { createUser, fetchUser } from "./userApi";

const { createSlice } = require("@reduxjs/toolkit");

// create slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload, type }) => {
        state.users = payload;
      })
      .addCase(createUser.fulfilled, (state, { type, payload }) => {
        state.users = [...state.users, payload]
      });
  },
});

// selector
export const selectUser = (state) => state.user;

// actions
export const {} = userSlice.actions;

// reducers
export default userSlice.reducer;
