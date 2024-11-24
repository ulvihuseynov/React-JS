import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import { counterSlice } from "../slice/CounterSlice";
import axios from "axios"
const initialState={
    countries:[]
}
export const getData=createAsyncThunk('country',async()=>{
    
        const {data}=await (axios.get('https://restcountries.com/v3.1/all'))
        return data
})

const CountrySlice=createSlice({
    name:'country',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
builder.addCase(getData.fulfilled,(state,actions)=>{
    state.countries=actions.payload
})
    }
})

// export const {}=CountrySlice.actions

export default CountrySlice.reducer