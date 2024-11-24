import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState={
    users:[],
    loading:false
}
export const getAllUsers=createAsyncThunk('users',async()=>{
const res=await axios.get("https://jsonplaceholder.typicode.com/users");
console.log(res.data)
return res.data
})
export const userSlice=createSlice({
name:'users',
initialState,
reducers:{

},
extraReducers:(builder)=>{
builder.addCase(getAllUsers.fulfilled,(state,action)=>{
    state.users=action.payload
})
}
})
export const {}=userSlice.actions
export default userSlice.reducer