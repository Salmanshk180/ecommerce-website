import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slices/productData";
import filterProducts from "../Slices/filterProducts";
import  selectBrand from "../Slices/selectBrands";
export const store = configureStore({
  reducer: {
    product: productReducer,
    filterProducts: filterProducts,
    selectBrand: selectBrand,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
