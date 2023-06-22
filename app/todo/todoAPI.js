import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit");

// get all todos
export const fatchAllTodos = createAsyncThunk(
  "todo/fatchAllTodos",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/todo`);
    return response.data.todos;
  }
);

// create new todo
export const createTodo = createAsyncThunk("todo/createTodo", async (data) => {
  const response = await axios.post(`http://localhost:3000/api/todo`, data)
  return response.data.todo
})