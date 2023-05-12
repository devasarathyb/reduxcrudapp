import { configureStore } from "@reduxjs/toolkit";
import userReducer from './components/Userslice';

export const store = configureStore({
    reducer:{
        users:userReducer
    }
})