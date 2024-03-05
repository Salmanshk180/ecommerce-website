import { createSlice } from "@reduxjs/toolkit";
import p1 from "../../assets/product-1.svg";
import p2 from "../../assets/product-2.svg";
import p3 from "../../assets/product-3.svg";
import p4 from "../../assets/product-4.svg";
import p5 from "../../assets/product-5.svg";
export const initialState = [
  {
    initialState: [
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Women's cloathing",
      },
      {
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Women's cloathing",
      },
      {
        src: p3,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Women's cloathing",
      },
      {
        src: p4,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Kid's Cloathing",
      },
      {
        src: p5,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Kid's cloathing",
      },
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Footwear",
      },
      {
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Footwear",
      },
      {
        src: p3,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Watches",
      },
      {
        src: p4,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Watches",
      },
      {
        src: p5,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Watches",
      },
    ],
  },
  {
    initialState: [
      {
        src: p5,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Beauty",
      },
      {
        src: p4,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Beauty",
      },
      {
        src: p3,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Beauty",
      },
      {
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Handbags",
      },
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Handbags",
      },
      {
        src: p5,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Handbags",
      },
      {
        src: p4,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Jwellery",
      },
      {
        src: p3,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Jwellery",
      },
      {
        src: p2,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Jwellery",
      },
      {
        src: p1,
        title: "Graphic Design",
        description: "English Department",
        price: 6.48,
        original_price: 16.48,
        showColors: true,
        category: "Jwellery",
      },
    ],
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
