import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: string;
}
interface IState {
  filter: {
    brands: string[] | null;
    category: string | null;
    products: [];
    minprice: number;
    maxprice: number;
  };
  products: Product[];
  isLoading: boolean;
  error: null | string;
  selectedBrands: string[];
}

interface Query {
  brands: string[] | null;
  category: string | null;
  minprice: number;
  maxprice: number;
}
const initialState: IState = {
  filter: {
    brands: [],
    category: null,
    products: [],
    minprice: 0,
    maxprice: 0,
  },
  products: [],
  isLoading: false,
  error: null,
  selectedBrands: ["all"],
};

export const fetchFilterdProducts = createAsyncThunk(
  "filters/fetchFilteredProducts",
  async (query: Query) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/product-variant-filter?brand=${query.brands}&category=${query.category}&min=${query.minprice}&max=${query.maxprice}`
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState: initialState,
  reducers: {
    addBrand: (state, action) => {
      if (action.payload !== "all") {
        state.selectedBrands = state.selectedBrands.filter(
          (product) => product !== "all"
        );
        state.selectedBrands.push(action.payload.brand);
        state.filter.brands = state.selectedBrands;
      }
      if (action.payload.brand == "all") {
        state.selectedBrands = ["all"];
        state.filter.brands = ["zara","levi's","adidas","peter england","allen solly","fabindia"];
      }
    },
    removeBrand: (state, action) => {
      if (state.selectedBrands.includes(action.payload.brand)) {
        state.selectedBrands = state.selectedBrands.filter(
          (brand) => brand !== action.payload.brand
        );
        state.filter.brands = state.selectedBrands;
      }
    },
    addCategory: (state, action) => {
      state.filter = { ...state.filter, category: action.payload.category };
    },
    addminPrice: (state, action) => {
      state.filter = { ...state.filter, minprice: action.payload };
    },
    addmaxPrice: (state, action) => {
      state.filter = { ...state.filter, maxprice: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterdProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilterdProducts.fulfilled, (state, acion) => {
        state.isLoading = false;
        state.products = acion.payload.products;
      })
      .addCase(fetchFilterdProducts.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export const { addBrand, addCategory, addmaxPrice, addminPrice, removeBrand } =
  filterSlice.actions;
export default filterSlice.reducer;
