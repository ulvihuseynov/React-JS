import { createSlice } from '@reduxjs/toolkit'

const initialState={
    value:54
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
artir:(state)=>{
state.value+=3
},
azalt:(state)=>{
    state.value-=1
}
    }
})

export const {artir,azalt } = counterSlice.actions
export default counterSlice.reducer