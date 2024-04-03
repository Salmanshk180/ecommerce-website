import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  'user/login',
  async (loginData: LoginData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', loginData);
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);