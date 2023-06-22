import { createTodo, fatchAllTodos } from "./todoAPI";
const { createSlice } = require("@reduxjs/toolkit");

// create todo slice
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fatchAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

// selector
export const selectTodo = (state) => state.todo;

// actions
export const {} = todoSlice.actions;

// reducer
export default todoSlice.reducer;
