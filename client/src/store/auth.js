import {createSlice}from '@reduxjs/toolkit'
const initialState={
    isAuth:false,
    isLoginPage:false,
    isSignUpPage:true
}
const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
 setIsAuth(state){
    state.isAuth=true
    state.isLoginPage=false
state.isSignUpPage=false
 },
 setIsLogin(state){
state.isLoginPage=false
state.isSignUpPage=true
state.isAuth=false
 },
 setSignUp(state){
state.isSignUpPage=false
state.isLoginPage=true
state.isAuth=false
 }
    }
})
export const {setIsAuth,setIsLogin,setSignUp}=authSlice.actions
export const authStoreReducer=authSlice.reducer