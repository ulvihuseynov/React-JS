import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../utils/Status";

const initialState = {
  product: [],
  productStatus: Status.IDLE,
  productDetails: [],
  productDetailsStatus: Status.IDLE,
};

export const getSerachProducts = createAsyncThunk("getSearchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});





const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productStatus = Status.LOADING;
    });
  
   
  },
});

export default SearchSlice.reducer;
