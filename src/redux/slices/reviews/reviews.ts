import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Review {
  id: string;
  description: string | null;
  star: number | null;
  created_at?:Date;
  user: {
    id: string;
    first_name: string;
    last_name: string;
  } | null;
  product_variant: {
    id: string;
  } | null;
}

interface InitialState {
  isLoading: boolean;
  error: string | null;
  reviews: Review[];
  averageRating: number;
  numberOfReviews: number;
}

const initialState: InitialState = {
  isLoading: false,
  error: null,
  reviews: [],
  averageRating: 0,
  numberOfReviews: 0,
};

interface ReviewData {
  description: string;
  star: number;
  product_variant_id: string;
  user_id: string;
}

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (reviewData: ReviewData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/review",
        reviewData
      );
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

export const getReview = createAsyncThunk(
  "reviews/getReview",
  async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:8000/review/${id}`);
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.push(action.payload.data);
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data.reviews;
        state.averageRating = action.payload.data.averageRating;
        state.numberOfReviews = action.payload.data.numberOfReviews;
      })
      .addCase(getReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default reviewsSlice.reducer;
