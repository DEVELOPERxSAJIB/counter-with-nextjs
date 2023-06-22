import counterSlice from "@/app/counter/counterSlice";
import todoSlice from "@/app/todo/todoSlice";
import userSlice from "@/app/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

// create store
const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    todo: todoSlice,
  },
  devTools: true,
});

// export store
export default store;
