import { createSlice } from "@reduxjs/toolkit";
import { initialState as productData } from "./productData";

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState: productData,
  reducers: {
    filterByCategory(state, action) {
      const { category } = action.payload;
      if (category == "All Men's clothing") {
        return productData;
      }
      return productData.filter((item) => item.category === category);
    },

    filterByBrands(state, action) {
        
    }
  },
});

export const { filterByCategory } = filterProductSlice.actions;
export default filterProductSlice.reducer;
