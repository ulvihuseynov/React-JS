import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/CounterSlice'
import countryReducer from '../country/CountrySlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    country: countryReducer,

  },
})