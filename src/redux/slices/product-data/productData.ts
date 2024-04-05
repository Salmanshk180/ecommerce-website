import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  product_1_img,
  product_2_img,
  product_3_img,
  product_4_img,
  product_5_img,
} from "../../../assets/images";
import axios from "axios";
import { response } from "express";
export const initialState = [
  {
    id: "p1",
    src: product_1_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 6.48,
    price: 16.48,
    showColors: true,
    category: "Women's clothing",
    brand: "Zara",
  },
  {
    id: "p2",
    src: product_2_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 19.48,
    price: 16.48,
    showColors: true,
    category: "Women's clothing",
    brand: "Zara",
  },
  {
    id: "p3",
    src: product_3_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 18.48,
    price: 16.48,
    showColors: true,
    category: "Women's clothing",
    brand: "Levi's",
  },
  {
    id: "p4",
    src: product_4_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 24.48,
    price: 16.48,
    showColors: true,
    category: "Kid's Clothing",
    brand: "Levi's",
  },
  {
    id: "p5",
    src: product_5_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 39.48,
    price: 16.48,
    showColors: true,
    category: "Kid's clothing",
    brand: "Adidas",
  },
  {
    id: "p6",
    src: product_1_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 41.48,
    price: 16.48,
    showColors: true,
    category: "Footwear",
    brand: "Adidas",
  },
  {
    id: "p7",
    src: product_2_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 12.48,
    price: 16.48,
    showColors: true,
    category: "Footwear",
    brand: "Adidas",
  },
  {
    id: "p8",
    src: product_3_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 19.48,
    price: 16.48,
    showColors: true,
    category: "Watches",
    brand: "Peter England",
  },
  {
    id: "p9",
    src: product_4_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 59.48,
    price: 16.48,
    showColors: true,
    category: "Watches",
    brand: "Peter England",
  },
  {
    id: "p10",
    src: product_5_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 62.48,
    price: 16.48,
    showColors: true,
    category: "Watches",
    brand: "Allen Solly",
  },

  {
    id: "p11",
    src: product_5_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 78.48,
    price: 16.48,
    showColors: true,
    category: "Beauty",
    brand: "Allen Solly",
  },
  {
    id: "p12",
    src: product_4_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 61.48,
    price: 16.48,
    showColors: true,
    category: "Beauty",
    brand: "Fab India",
  },
  {
    id: "p13",
    src: product_3_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 91.48,
    price: 16.48,
    showColors: true,
    category: "Beauty",
    brand: "Fab India",
  },
  {
    id: "p14",
    src: product_2_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 106.48,
    price: 16.48,
    showColors: true,
    category: "Handbags",
    brand: "Peter England",
  },
  {
    id: "p15",
    src: product_1_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 99.48,
    price: 16.48,
    showColors: true,
    category: "Handbags",
    brand: "Peter England",
  },
  {
    id: "p16",
    src: product_5_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 102.48,
    price: 16.48,
    showColors: true,
    category: "Handbags",
    brand: "Levi's",
  },
  {
    id: "p17",
    src: product_4_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 115.48,
    price: 16.48,
    showColors: true,
    category: "Jwellery",
    brand: "Levi's",
  },
  {
    id: "p18",
    src: product_3_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 130.48,
    price: 16.48,
    showColors: true,
    category: "Jwellery",
    brand: "Adidas",
  },
  {
    id: "p19",
    src: product_2_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 190.48,
    price: 16.48,
    showColors: true,
    category: "Jwellery",
    brand: "Adidas",
  },
  {
    id: "p20",
    src: product_1_img,
    title: "Graphic Design",
    description: "English Department",
    original_price: 159.48,
    price: 16.48,
    showColors: true,
    category: "Jwellery",
    brand: "Adidas",
  },
];

export interface Product {
  id: string;
}

interface I {
  isLoading: boolean;
  products: Product[];
  error: string | null | Object;
}

export const initialState2: I = {
  isLoading: false,
  products: [],
  error: null,
};
interface Query {
  brands: string[] | null;
  category: string | null;
}
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (query: Query) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/product-variant?brand=${query.brands}&category=${query.category}`
      );
      return response.data;
    } catch (error: any) {
      return error.response.error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState2,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, acion) => {
        state.isLoading = false;
        state.products = acion.payload.data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
