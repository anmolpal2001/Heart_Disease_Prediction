import {createSlice}from '@reduxjs/toolkit'
const initialState={
    isAuth:false
}
const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
 setIsAuth(state){
    state.isAuth=!state.isAuth
 }
    }
})
export const {setIsAuth}=authSlice.actions
export const authStoreReducer=authSlice.reducer