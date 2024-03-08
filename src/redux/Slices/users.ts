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
      const { email,password } = action.payload;
      state.Users.forEach(user => {
        if (user.email === email){
          if(user.password === password){
            state.isLoggedin=true;
          }
        }
      })
    },
    logout(state) {
      state.isLoggedin=false;
    }
  },
});

export const { addUser,login,logout } = userSlice.actions;
export default userSlice.reducer;
