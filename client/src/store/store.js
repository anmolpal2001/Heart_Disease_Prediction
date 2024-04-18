import { configureStore } from "@reduxjs/toolkit";
import {  authStoreReducer } from "./auth";
const store=configureStore({
    reducer:{
        auth:authStoreReducer
    }
})
export default store