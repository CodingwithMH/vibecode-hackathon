import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  cart:cartReducer
})
const store=configureStore({
    reducer: rootReducer
})
export default store