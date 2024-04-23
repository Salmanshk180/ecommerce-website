import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface Query {
    token?: string;
    product_variant_id?: string;
  }

  interface InitialState{
    isLoading: boolean;
    watchList: Array<any>;
    error:null|string;
  }
  const initialState:InitialState = {
    isLoading: false,
    watchList: [],
    error: null,
  };
  
export const addToWatchList = createAsyncThunk(
    "watchlist/addToWatchList",
    async (query: Query) => {
      try {
        const response = await axios.post(
          `http://localhost:8000/watchlist?product_variant_id=${query.product_variant_id}&token=${query.token}`
        );
        return response.data.data;
      } catch (error: any) {
        return error.response.error;
      }
    }
  );

  export const getWatchlist = createAsyncThunk(
    "watchlist/getWatchlist",
    async (token: string) => {
      try {
        const response = await axios.get(
          `http://localhost:8000/watchlist?token=${token}`
        );
        return response.data.data;
      } catch (error: any) {
        return error.response.error;
      }
    }
  );
  const watchListSlice = createSlice({
    name: "watchListSlices",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addToWatchList.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addToWatchList.fulfilled, (state, acion) => {
          state.isLoading = false;
          // state.data = acion.payload;
        })
        .addCase(addToWatchList.rejected, (state, action) => {
          state.error = action.error.message as string;
          state.isLoading = false;
        })
        .addCase(getWatchlist.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getWatchlist.fulfilled, (state, action) => {
          state.isLoading = false;
          state.watchList = action.payload;
        })
        .addCase(getWatchlist.rejected, (state, action) => {
          state.error = action.error.message as string;
          state.isLoading = false;
        })
        ;
    },
  });
  
  export default watchListSlice.reducer;
  