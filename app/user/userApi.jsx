import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fatch all user
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  // get response
  const response = await axios.get("http://localhost:3000/api/user");

  // send data
  return response.data.user;
});

// create new user
export const createUser = createAsyncThunk("user/createUser", async (data) => {
  
  // get response
  const response = await axios.post(`http://localhost:3000/api/user`, data);

  // send data
  return response.data.user

});
