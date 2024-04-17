import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  isLoading: boolean;
  error: string | null;
  order_history: CartData[];
  order_details: CartData | null;
}

const initialState: InitialState = {
  isLoading: false,
  error: null,
  order_details: null,
  order_history: [],
};

interface CartData {
  product_variant_id: string;
  subtotal: number;
  quantity: number;
}
interface Query {
  user_id: string;
  data: {
    total: number;
    quantity: number;
    metadata: CartData[];
    order_status: string;
    address_id: string;
  };
}

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (query: Query) => {    
    try {
      const response = await axios.post(
        `http://localhost:8000/order/${query.user_id}`,
        query.data
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOrder.fulfilled, (state, acion) => {
        state.isLoading = false;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export default orderSlice.reducer;
