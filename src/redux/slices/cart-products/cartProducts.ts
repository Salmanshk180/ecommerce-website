import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: string;
  quantity: number;
  subtotal: number;
  product_variants: {
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
}

interface cartProductState {
  isLoading: boolean;
  // data: { cartProducts: Product[] };
  cartData: Product[];
  error: string | null;
  update: string | null;
  delete: string | null;
}

const initialState: cartProductState = {
  isLoading: false,
  // data: { cartProducts: [] },
  cartData: [],
  error: null,
  update: null,
  delete: null,
};

interface Query {
  token?: string;
  product_variant_id?: string;
  quantity?: number;
  cart_id?: string;
}

export const addToCartProduct = createAsyncThunk(
  "cart/addToCartProduct",
  async (query: Query) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/cart?product_variant_id=${query.product_variant_id}&token=${query.token}`
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (query: Query) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/cart?product_variant_id=${query.product_variant_id}&quantity=${query.quantity}`
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (query: Query) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/cart?cart_id=${query.cart_id}`
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);

export const getCartProducts = createAsyncThunk(
  "cart/getCartProducts",
  async (token: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/cart?token=${token}`
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
const cartProductsSlice = createSlice({
  name: "cartProductsSlices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCartProduct.fulfilled, (state, acion) => {
        state.isLoading = false;
        // state.data = acion.payload;
      })
      .addCase(addToCartProduct.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      })
      .addCase(getCartProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload;
      })
      .addCase(getCartProducts.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      })
      .addCase(updateCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.update = action.payload;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      })
      .addCase(deleteCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.delete = action.payload;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export default cartProductsSlice.reducer;
