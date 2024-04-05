import { createSlice } from "@reduxjs/toolkit";

interface IState {
  filter: {
    brands: string[] | null;
    category: string | null;
    minprice: number | null;
    maxprice: number | null;
  };
}

const initialState: IState = {
  filter: {
    brands: [],
    category: null,
    minprice: null,
    maxprice: null,
  },
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState: initialState,
  reducers: {
    addBrand: (state, action) => {
      state.filter.brands?.push(action.payload.brand);
    },
    removeBrand: (state, action) => {
      if (state.filter.brands !== null) {
        state.filter.brands = state.filter.brands?.filter(
          (brand) => brand !== action.payload.brand
        );
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
});

export const { addBrand, addCategory, addmaxPrice, addminPrice, removeBrand } =
  filterSlice.actions;
export default filterSlice.reducer;
