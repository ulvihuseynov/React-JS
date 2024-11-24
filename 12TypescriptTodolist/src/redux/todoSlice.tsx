import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { todoInitialState, TodoType } from '../types/types'

const initialState :todoInitialState={
todos:[]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers: {
        createTodo:(state :todoInitialState,action:PayloadAction<TodoType>)=>{
state.todos=[...state.todos,action.payload]
        },
        removeTodoById:(state:todoInitialState,action:PayloadAction<number>)=>{
state.todos=[...state.todos.filter((todo:TodoType)=>todo.id!==action.payload)]
console.log(state.todos)
        },
        updateTodo:(state:todoInitialState,action:PayloadAction<TodoType>)=>{
state.todos=[...state.todos.map((todo:TodoType)=>todo.id!==action.payload.id ? todo : action.payload)]
        }
    },
})



export const { createTodo,removeTodoById,updateTodo} = todoSlice.actions

export default todoSlice.reducer