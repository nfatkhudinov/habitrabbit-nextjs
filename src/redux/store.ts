import { configureStore } from '@reduxjs/toolkit'
import habitReducer from "@/redux/reducers";
export default configureStore({
    reducer: habitReducer
})