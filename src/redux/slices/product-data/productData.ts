import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFilterdProducts } from "../filters/filters.slices";
import axios from "axios";

export interface Product {
  id: string;
}

interface I {
  isLoading: boolean;
  data: { products: Product[]; minimum_price: number; maximum_price: number };
  error: string | null;
}

export const initialState2: I = {
  isLoading: false,
  data: { products: [], minimum_price: 0, maximum_price: 0 },
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`http://localhost:8000/product-variant`);
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState2,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, acion) => {
        state.isLoading = false;
        state.data = acion.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      })
      .addCase(fetchFilterdProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilterdProducts.fulfilled, (state, acion) => {
        state.isLoading = false;
        state.data = acion.payload;
      })
      .addCase(fetchFilterdProducts.rejected, (state, action) => {
        state.error = action.error?.message!;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
