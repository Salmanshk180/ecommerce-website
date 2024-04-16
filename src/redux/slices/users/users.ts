import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./signup.slices";
import { loginUser } from "./login.slices";
import axios from "axios";

export interface User {
  id: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  address?: {
    buildings: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    pincode: number | null;
    country: string | null;
  } | null;
  phone_number: string | null;
}

interface InitialState {
  isLoggedin: boolean;
  isLoading: boolean;
  LoggedInUser: string | null;
  error: string | null | Object;
  user: User | null;
}

const initialState: InitialState = {
  isLoggedin: false,
  isLoading: false,
  error: null,
  LoggedInUser: null,
  user: {
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    address: null,
    phone_number: null,
  },
};

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: User) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/user/${user.id}`,
        user
      );

      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);
export const getUser = createAsyncThunk(
  "user/getUser",
  async (token: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/user?token=${token}`
      );
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id:string) => {
    console.log(id);
    
    try {
      const response = await axios.delete(
        `http://localhost:8000/user/${id}`
      );
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedin = false;
      state.LoggedInUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        return action.payload.data;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedin = true;
        state.LoggedInUser = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.LoggedInUser = null;
        state.isLoggedin = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
