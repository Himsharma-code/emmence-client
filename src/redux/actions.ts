import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, add, getAllUsers } from "../api/user";

export const addUser = createAsyncThunk("user/add", async (data: User) => {
  try {
    const response = await add(data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const response = await getAllUsers();
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});
