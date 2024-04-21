import React from 'react'
import Signup from '../components/Signup'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const SignUpPage = () => {
  const isAuth=useSelector((state)=> state.auth.isAuthenticated)
  return (
    <div>
      {isAuth ? (<Navigate to="/"/>):(<Signup />)}
    </div>
  )
}

export default SignUpPage