import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./signup.slices";


interface InitialState {
  isLoggedin: boolean;
  isLoading: boolean;
  error: string | null | Object,
}

const initialState: InitialState = {
  isLoggedin: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { email, password } = action.payload;
      // const user = state.Users.find(user => user.email === email && user.password === password);
      // state.isLoggedin = !!user;
    },
    logout(state) {
      state.isLoggedin = false;
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
      });
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
