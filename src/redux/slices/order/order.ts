import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Address } from "../address/address";
import { Product } from "../cart-products/cartProducts";

const initialState: InitialState = {
  isLoading: false,
  error: null,
  order_details: null,
  order_history: [],
  openModal: false,
};
interface Product_Variants{
  id: string;
  images: string[];
  color: string;
  description: string;
  currency: string;
  default: boolean;
  size: string;
  price: number;
  discount_price: number;
  product: {
    id: string;
    name: string;
    brand: {
      id: string;
      name: string;
    };
    category: {
      id: string;
      name: string;
    };
  };
};
interface CartData {
  created_at?: Date;
  id?: string;
  total: number;
  quantity: number;
  address?: Address;
  order_status?: string;
  date?: Date;
}
interface OrderMetadata {
  product_variant_id: string;
  product_variant: Product_Variants;
  star:number;
  total: number;
  quantity: number;
}
interface DisplayCart {
  order: {
    created_at: Date;
    id: string;
    metadata: OrderMetadata[] | null;
    total: number;
    quantity: number;
    address: Address;
    order_status: string;
    date: Date;
  };
}

interface InitialState {
  isLoading: boolean;
  error: string | null;
  order_history: CartData[];
  order_details: DisplayCart | null;
  openModal: boolean;
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

interface Query2 {
  token: string;
}
interface Query3 {
  order_id: string;
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
export const getOrder = createAsyncThunk(
  "order/getOrder",
  async (query: Query2) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/order?token=${query.token}`
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (query: Query3) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/order/${query.order_id}`
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
  reducers: {
    setOpenModal: (state) => {
      state.openModal = !state.openModal;
    },
  },
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
      })
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order_history = action.payload;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      })
      .addCase(getOrderById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order_details = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});
export const { setOpenModal } = orderSlice.actions;
export default orderSlice.reducer;
