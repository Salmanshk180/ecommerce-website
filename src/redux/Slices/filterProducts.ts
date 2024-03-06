import { createSlice } from "@reduxjs/toolkit";
import { initialState as productData } from "./productData";
import { selectBrand } from "./selectBrands";

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState: productData,
  reducers: {
    filterByCategory(state, action) {
      const { category } = action.payload;
      if (category === "All Men's clothing") {
        return productData;
      }
      return productData.filter((item) => item.category === category);
    },
    filterByBrand(state, action) {
      const brands = action.payload.brands; // Array of selected brands
      if (brands.length === 0) {
        return productData;
      }
      return productData.filter((item) => brands.includes(item.brand));
    },
  },
});

export const { filterByCategory, filterByBrand } = filterProductSlice.actions;
export default filterProductSlice.reducer;
