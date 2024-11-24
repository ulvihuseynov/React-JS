import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    product:[]
}
export const getAlldata = createAsyncThunk('productData',
    async()=>{
        const res=(await fetch('https://fakestoreapi.com/products'))
        return await res.json()
    }
)

export const ProductSlice=createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
builder.addCase(getAlldata.fulfilled, (state,action)=>{
    state.product=action.payload
})
    }
})
const {} = ProductSlice.actions
export default ProductSlice.reducer
