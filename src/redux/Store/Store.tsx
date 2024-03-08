import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slices/productData";
import filterProducts from "../Slices/filterProducts";
import cartProductsSlice from "../Slices/cartProducts";
import { persistStore, persistReducer, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import users from "../Slices/users";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  filterProducts: filterProducts,
  cartProducts: cartProductsSlice,
  users:users,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
