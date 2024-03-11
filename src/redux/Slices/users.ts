import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
}

interface InitialState {
  Users: User[];
  isLoggedin: boolean;
}

const initialState: InitialState = {
  Users: [],
  isLoggedin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      const { email, password } = action.payload;
      state.Users = [...state.Users, { email, password }];
    },
    login(state, action) {
      const { email, password } = action.payload;
      const user = state.Users.find(user => user.email === email && user.password === password);
      state.isLoggedin = !!user; // If user is found, set isLoggedin to true, otherwise false
    },    
    logout(state) {
      state.isLoggedin=false;
    }
  },
});

export const { addUser,login,logout } = userSlice.actions;
export default userSlice.reducer;
