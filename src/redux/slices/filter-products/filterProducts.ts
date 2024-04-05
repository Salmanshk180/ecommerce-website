import { createSlice, current } from "@reduxjs/toolkit";
import { fetchProducts, initialState as productData } from "../product-data/productData";

interface Product {
  id: string;
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
  isLoading: boolean;
  filteredProducts: Product[];
  filterCategory: string | null;
  filterBrands: string[];
  filterPrice: { min: number; max: number };
  error: string | null;
}

export const initialState: FilterProductState = {
  isLoading: false,
  filteredProducts: [],
  filterCategory: null,
  filterBrands: [],
  filterPrice: { min: 0, max: 0 },
  error: null
};

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState: initialState,
  reducers: {
    filterByCategory(state, action) {
      const { category } = action.payload;
      state.filterCategory = category;
    },
    filterByBrand(state, action) {
      const { brand } = action.payload;
      if (!state.filterBrands.includes(brand)) {
        state.filterBrands.push(brand);
      } else if (state.filterBrands.includes(brand)) {
        const index = state.filterBrands.indexOf(brand);
        state.filterBrands.splice(index, 1);
      }
    },
    filterPrice: (state, action) => {
      state.filterPrice = action.payload;
    },
    filterAll(state) {
      let filterData = state.filteredProducts;
      if (
        state.filterCategory !== null &&
        state.filterCategory !== "All Men's clothing"
      ) {
        filterData = filterData.filter(
          (product: any) =>
            product.product.category.name === state.filterCategory
        );
      }
      if (
        state.filterBrands.length > 0 &&
        !state.filterBrands.includes("All")
      ) {
        filterData = filterData.filter((product: any) =>
          state.filterBrands.includes(product.product.brand.name)
        );
      }
      if (state.filterPrice.min > 0 || state.filterPrice.max > 0) {
        const filterDatas = filterData.filter(
          (product: any) =>
            product.original_price >= state.filterPrice.min &&
            product.original_price <= state.filterPrice.max
        );
        filterData = filterDatas;
      }
      state.filteredProducts = filterData;
    },
    priceLowToHigh(state) {
      state.filteredProducts = state.filteredProducts
        .slice()
        .sort(
          (product1, product2) =>
            product1.original_price - product2.original_price
        );
    },
    priceHighToLow(state) {
      state.filteredProducts = state.filteredProducts
        .slice()
        .sort(
          (product1, product2) =>
            product2.original_price - product1.original_price
        );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchProducts.fulfilled, (state, acion) => {
      state.isLoading = false;
      state.filteredProducts = acion.payload.data;
    }).addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error.message as string;
      state.isLoading = false;
    })
  }
});

export const {
  filterByCategory,
  filterByBrand,
  filterAll,
  filterPrice,
  priceLowToHigh,
  priceHighToLow,
} = filterProductSlice.actions;
export default filterProductSlice.reducer;

export const filterData = initialState.filteredProducts;
