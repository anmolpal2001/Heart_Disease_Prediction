import React from 'react'
import Signin from '../components/Signin'
import {useSelector} from 'react-redux'
import {Navigate}from 'react-router-dom'
const SignInPage = () => {
  const isAuth=useSelector((state)=> state.auth.isAuthenticated)
  return (
    <div>
     {/* {isAuth ? (<Navigate to="/form"/>):(<Signin />)} */}
     <Signin/>
   
    </div>
  )
}

export default SignInPage