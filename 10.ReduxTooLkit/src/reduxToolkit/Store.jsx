import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'
import userReducer from './UserSlice'
export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    user:userReducer
  },
})