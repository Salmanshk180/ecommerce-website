import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./signup.slices";
import { loginUser } from "./login.slices";


interface InitialState {
  isLoggedin: boolean;
  isLoading: boolean;
  LoggedInUser:string|null;
  error: string | null | Object,
}

const initialState: InitialState = {
  isLoggedin: false,
  isLoading: false,
  error: null,
  LoggedInUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedin = false;
      state.LoggedInUser = null;
    }
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
        state.LoggedInUser = action.payload.token
        return action.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
