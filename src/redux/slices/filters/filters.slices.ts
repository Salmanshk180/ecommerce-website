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
    sortby: string;
    page: number;
    limit: number;
  };
  products: Product[];
  total: number;
  isLoading: boolean;
  error: null | string;
  selectedBrands: string[];
}

interface Query {
  brands: string[] | null;
  category: string | null;
  minprice: number;
  maxprice: number;
  sortby: string;
  page: number;
  limit: number;
}
const initialState: IState = {
  filter: {
    brands: [],
    category: "all",
    products: [],
    minprice: 0,
    maxprice: 0,
    sortby: "asc",
    page: 1,
    limit: 12,
  },
  products: [],
  total: 0,
  isLoading: false,
  error: null,
  selectedBrands: ["all"],
};

export const fetchFilterdProducts = createAsyncThunk(
  "filters/fetchFilteredProducts",
  async (query: Query) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/product-variant-filter?brand=${query.brands}&category=${query.category}&min=${query.minprice}&max=${query.maxprice}&sortby=${query.sortby}&page=${query.page}&limit=${query.limit}`
      );
      return response.data.data;
    } catch (error: any) {
      return error.response.error as string;
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
        state.filter.brands = [
          "zara",
          "levi's",
          "adidas",
          "peter england",
          "allen solly",
          "fabindia",
        ];
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
      if (action.payload.category == "all") {
        state.filter = { ...state.filter, category: "all" };
      }
      state.filter = { ...state.filter, category: action.payload.category };
    },
    addminPrice: (state, action) => {
      state.filter = { ...state.filter, minprice: action.payload };
    },
    addmaxPrice: (state, action) => {
      state.filter = { ...state.filter, maxprice: action.payload };
    },
    sortBy: (state, action) => {
      state.filter = { ...state.filter, sortby: action.payload.sortby };
    },
    changePage: (state, action) => {
      state.filter = { ...state.filter, page: action.payload.page };
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
        state.total = acion.payload.total;
      })
      .addCase(fetchFilterdProducts.rejected, (state, action) => {
        state.error = action.error?.message!;
        state.isLoading = false;
      });
  },
});

export const {
  addBrand,
  addCategory,
  addmaxPrice,
  addminPrice,
  removeBrand,
  sortBy,
  changePage,
} = filterSlice.actions;
export default filterSlice.reducer;
