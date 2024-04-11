import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: string;
  color: string;
  size: string;
  price: number;
  discount_price: number;
  description: string;
  in_stock: boolean;
  currency: string;
  default: string;
  images: string[];
  product: {
    id: string;
    name: string;
  };
}

interface I {
  isLoading: boolean;
  data: { product: Product | null; product_variants: Product[] | null };
  error: string | null;
}

export const initialState2: I = {
  isLoading: false,
  data: { product: null, product_variants: null },
  error: null,
};

interface Query {
  color?: string;
  size?: string;
  productid?: string;
}

export const fetchOneProduct = createAsyncThunk(
  "oneProduct/fetchOneProduct",
  async (query: Query) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/product?color=${query.color}&size=${query.size}&productid=${query.productid}`
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);

const productSlice = createSlice({
  name: "oneProduct",
  initialState: initialState2,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneProduct.fulfilled, (state, acion) => {
        state.isLoading = false;
        state.data = acion.payload;
      })
      .addCase(fetchOneProduct.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
