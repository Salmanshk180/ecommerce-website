import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slices/productData";
import filterProducts from "../Slices/filterProducts";
import cartProductsSlice from "../Slices/cartProducts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  filterProducts: filterProducts,
  cartProducts: cartProductsSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
