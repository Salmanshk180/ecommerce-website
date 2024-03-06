import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slices/productData";
import filterProducts from "../Slices/filterProducts";
export const store = configureStore({
  reducer: {
    product: productReducer,
    filterProducts: filterProducts,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
