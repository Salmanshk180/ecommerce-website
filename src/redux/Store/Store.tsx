import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/product-data/productData";
import cartProductsSlice from "../slices/cart-products/cartProducts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import users from "../slices/users/users";
import loadingSlice from "../slices/loading/loading";
import filterSlice from "../slices/filters/filters.slices";
import brandAndCategorySlice from "../slices/filter-data/filterData";
import getOneProduct from "../slices/get-one-product/getOneProduct";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  cartProducts: cartProductsSlice,
  users: users,
  loadings: loadingSlice,
  filters: filterSlice,
  brandAndCategory: brandAndCategorySlice,
  oneProduct: getOneProduct,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
