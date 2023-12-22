import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUser, getUsers } from "../actions";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface UserState {
  users: User[];
  selected?: number;
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    get: (state, { payload }: PayloadAction<User[]>) => {
      state.users = payload;
    },
    add: (state, { payload }: PayloadAction<User>) => {
      state.users.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      const dataFromAPI: User[] = action.payload; // Resolved value from the async action
      state.users = dataFromAPI; // Update the state with data from the API
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      console.log("state, action", state, action);
      const dataFromAPI: User = action.payload; // Resolved value from the async action
      state.users.push(dataFromAPI); // Update the state with data from the API
    });
  },
});

export default userSlice.reducer;
