import { createSlice } from "@reduxjs/toolkit";

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
  quantity: number;
  subtotal: number;
}

interface cartProductState {
  cartProducts: Product[];
}

const initialState: cartProductState = {
  cartProducts: [],
};

const cartProductsSlice = createSlice({
  name: "cartProductsSlices",
  initialState,
  reducers: {
    addToCart(state, action) {
      const productToAdd = action.payload;
      const existingProduct = state.cartProducts.find(
        (product) => product.id === productToAdd.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.subtotal += existingProduct.price;
      } else {
        state.cartProducts.push({
          id: productToAdd.id,
          src: productToAdd.src,
          title: productToAdd.title,
          description: productToAdd.description,
          price: productToAdd.price,
          original_price: productToAdd.original_price,
          showColors: productToAdd.showColors,
          category: productToAdd.category,
          brand: productToAdd.brand,
          quantity: 1,
          subtotal: productToAdd.original_price,
        });
      }
    },
    changeQuantity(state, action) {
      const id = action.payload.id;
      const quantity = action.payload.quantity;
      const totalPrice = action.payload.totalPrice;
      state.cartProducts.forEach((product) => {
        if (product.id === id) {
          product.quantity = quantity;
          product.subtotal = totalPrice;
        }
      });
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== id
      );
    },
    onCheckout(state) {
       state.cartProducts =[];
    }
  },
});

export const { addToCart, changeQuantity, removeFromCart,onCheckout } =
  cartProductsSlice.actions;
export default cartProductsSlice.reducer;
