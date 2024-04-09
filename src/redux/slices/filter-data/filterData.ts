import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Category {
  id: string;
  name: string;
  images: JSON[];
}
export interface Brand {
  id: string;
  name: string;
}

interface I {
  isLoading: boolean;
  data: { categories: Category[]; brands: Brand[] };
  error: string | null;
}

export const initialState2: I = {
  isLoading: false,
  data: { categories: [], brands: [] },
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    try {
      const response = await axios.get(`http://localhost:8000/category`);
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
export const fetchBrands = createAsyncThunk("brand/fetchBrands", async () => {
  try {
    const response = await axios.get(`http://localhost:8000/brand`);
    return response.data.data;
  } catch (error: any) {
    return error.response.error;
  }
});

const brandAndCategorySlice = createSlice({
  name: "product",
  initialState: initialState2,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, acion) => {
        state.isLoading = false;
        state.data.categories = acion.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      })
      .addCase(fetchBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, acion) => {
        state.isLoading = false;
        state.data.brands = acion.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export default brandAndCategorySlice.reducer;
