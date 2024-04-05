import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SignUpData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (signUpData: SignUpData) => {
    try {
      const response = await axios.post('http://localhost:8000/signup', signUpData);
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);


