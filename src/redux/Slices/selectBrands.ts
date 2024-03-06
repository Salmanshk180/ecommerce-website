import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BrandsState {
  brands: string[]; // Define the type of brands array
}

const initialState: BrandsState = {
  brands: [],
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    selectBrand(state, action: PayloadAction<{ brand: string }>) {
      const { brand } = action.payload;
      if (!state.brands.includes(brand)) {
        state.brands.push(brand);
      } else {
        state.brands = state.brands.filter(
          (existingBrand) => existingBrand !== brand
        );
      }
    },
  },
});

export const { selectBrand } = brandsSlice.actions;
export default brandsSlice.reducer;
