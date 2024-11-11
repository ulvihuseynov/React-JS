import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../utils/Status";

const initialState = {
  product: [],
  productStatus: Status.IDLE,
  productDetails: [],
  productDetailsStatus: Status.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk("getCategoryProducts", async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();
  return data;
});

export const getProductDetails = createAsyncThunk("getProductDetails", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productStatus = Status.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productStatus = Status.SUCCESS;
      state.product = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.productStatus = Status.FAIL;
    });
    builder.addCase(getProductDetails.pending, (state, action) => {
      state.productDetailsStatus = Status.LOADING;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetailsStatus = Status.SUCCESS;
      state.productDetails = action.payload;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.productDetailsStatus = Status.FAIL;
    });
    builder.addCase(getCategoryProducts.pending, (state, action) => {
      state.productStatus = Status.LOADING;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.productStatus = Status.SUCCESS;
      state.product = action.payload;
    });
    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.productStatus = Status.FAIL;
    });
  },
});

export default ProductSlice.reducer;
