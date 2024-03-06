import { createSlice } from "@reduxjs/toolkit";
import { initialState as productData } from "./productData";

interface Product {
  src: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  showColors: boolean;
  category: string;
  brand: string;
}

interface FilterProductState {
  filteredProducts: Product[];
  filteredProductsByCategory: Product[];
  filteredProductsByBrand: Product[];
}

const initialState: FilterProductState = {
  filteredProducts: [],
  filteredProductsByCategory: [],
  filteredProductsByBrand: [],
};

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState: initialState,
  reducers: {
    filterByCategory(state, action) {
      const { category } = action.payload;
      let filteredProductsByCategory: Product[];
      if (!category || category === "All Men's clothing") {
        filteredProductsByCategory = productData;
      } else {
        filteredProductsByCategory = state.filteredProducts.filter(
          (item) => item.category === category
        );
      }
      const newState = { ...state, filteredProductsByCategory };
      return newState;
    },
    filterByBrand(state, action) {
      const { brands } = action.payload;
      let filteredProductsByBrand: Product[];
      if (!brands || brands.length === 0) {
        filteredProductsByBrand = productData;
      } else {
        filteredProductsByBrand = state.filteredProducts.filter((item) =>
          brands.includes(item.brand)
        );
      }
      const newState = { ...state, filteredProductsByBrand };
      return newState;
    },
    filterAll(state) {
      let filteredProducts: Product[] = [];
      if (
        state.filteredProductsByCategory.length === 0 ||
        state.filteredProductsByBrand.length === 0
      ) {
        filteredProducts = productData;
      } else {
        state.filteredProductsByCategory.forEach((categoryProduct) => {
          const matchingBrandProduct = state.filteredProductsByBrand.find(
            (brandProduct) =>
              categoryProduct.category === brandProduct.category &&
              categoryProduct.brand === brandProduct.brand
          );

          if (matchingBrandProduct) {
            filteredProducts.push(matchingBrandProduct);
          }
        });
      }
      const newState = { ...state, filteredProducts };
      return newState;
    },
  },
});

export const { filterByCategory, filterByBrand, filterAll } =
  filterProductSlice.actions;
export default filterProductSlice.reducer;
