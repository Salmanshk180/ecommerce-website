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
  filterCategory: string | null;
  filterBrands: string[];
  filterPrice: { min: number; max: number };
  //   filteredProductsByCategory: Product[];
  //   filteredProductsByBrand: Product[];
}

const initialState: FilterProductState = {
  filteredProducts: [],
  filterCategory: null,
  filterBrands: [],
  filterPrice: { min: 0, max: 0 },
  //   filteredProductsByCategory: [],
  //   filteredProductsByBrand: [],
};

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState: initialState,
  reducers: {
    filterByCategory(state, action) {
      const { category } = action.payload;
      state.filterCategory = category;
      //   if (category === "All Men's clothing" || category === "") {
      //     return { ...state, filteredProductsByCategory: productData };
      //   }
      //   const filteredProduct = productData.filter(
      //     (item) => item.category === category
      //   );
      //   return { ...state, filteredProductsByCategory: filteredProduct };
    },
    filterByBrand(state, action) {
      const { brand } = action.payload;
      if (!state.filterBrands.includes(brand)) {
        state.filterBrands.push(brand);
      } else if (state.filterBrands.includes(brand)) {
        const index = state.filterBrands.indexOf(brand);
        state.filterBrands.splice(index, 1);
      }
      //   if (brands.length === 0) {
      //     return { ...state, filteredProductsByBrand: productData };
      //   }
      //   const filteredProduct = productData.filter((item) =>
      //     brands.includes(item.brand)
      //   );
      //   return { ...state, filteredProductsByBrand: filteredProduct };
    },
    filterPrice: (state, action) => {
      state.filterPrice = action.payload;
    },
    filterAll(state) {
      //   const commonProducts: Product[] = [];
      //   if (
      //     state.filteredProductsByCategory.length === 0 ||
      //     state.filteredProductsByBrand.length === 0
      //   ) {
      //     return { ...state, filteredProducts: productData };
      //   }

      //   state.filteredProductsByCategory.forEach((categoryProduct) => {
      //     const matchingBrandProduct = state.filteredProductsByBrand.find(
      //       (brandProduct) =>
      //         categoryProduct.category === brandProduct.category &&
      //         categoryProduct.brand === brandProduct.brand
      //     );

      //     if (matchingBrandProduct) {
      //       commonProducts.push(matchingBrandProduct);
      //     }
      //   });

      //   return { ...state, filteredProducts: commonProducts };

      let filterData = productData;
      if (state.filterCategory !== null) {
        if (state.filterCategory !== "All Men's clothing") {
          filterData = filterData.filter(
            (product) => product.category === state.filterCategory
          );
        }
      }
      if (state.filterBrands.length > 0) {
        if (!state.filterBrands.includes("All Men's clothing")) {
          filterData = filterData.filter((product) =>
            state.filterBrands.includes(product.brand)
          );
        }
      }
    //   if (state.filterPrice.min !== 0 || state.filterPrice.max !== 1000) {
    //     filterData = filterData.filter(
    //       (product) =>
    //         product.original_price >= state.filterPrice.min &&
    //         product.original_price <= state.filterPrice.max
    //     );
    //   }
      state.filteredProducts = filterData;
    },
  },
});

export const { filterByCategory, filterByBrand, filterAll,filterPrice } =
  filterProductSlice.actions;
export default filterProductSlice.reducer;
