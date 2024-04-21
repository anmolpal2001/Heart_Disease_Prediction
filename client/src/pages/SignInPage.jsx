import React from 'react'
import Signin from '../components/Signin'
import {useSelector} from 'react-redux'
const SignInPage = () => {
  const isAuth=useSelector((state)=> state.auth.isAuthenticated)
  return (
    <div>
     {isAuth ? (<Navigate to="/"/>):(<Signin />)}
    </div>
  )
}

export default SignInPage