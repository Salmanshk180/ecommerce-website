import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Address {
  id?: string | null;
  building: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  pincode: number | null;
  country: string | null;
}
interface InitialState {
  isLoading: boolean;
  error: string | null;
  message: string | null;
  addresses: Address[] | null;
  selectedAddress: Address | null;
}

const initialState: InitialState = {
  addresses: [],
  isLoading: false,
  error: null,
  message: null,
  selectedAddress: null,
};

interface Query {
  id?: string;
}

interface AddressData {
  query?: Query;
  data?: Address;
}
export const getAddress = createAsyncThunk(
  "address/getAddress",
  async (query: Query) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/address/${query.id}`
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (addressData: AddressData) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/address/${addressData?.query?.id}`,
        addressData?.data
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressData: AddressData) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/address/${addressData?.query?.id}`,
        addressData.data
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async (addressData: AddressData) => {    
    try {
      const response = await axios.patch(
        `http://localhost:8000/address/${addressData?.query?.id}`,
        addressData.data
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);
const addressSlice = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {
    selectAddress: (state, action) => {
      state.selectedAddress = action.payload.address;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses = action.payload.data;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(addAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(updateAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});

export const {selectAddress} = addressSlice.actions;
export default addressSlice.reducer;
