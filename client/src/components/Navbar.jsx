import React from 'react'
import { useNavigate}from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setIsAuth,setIsLogin,setSignUp} from '../store/auth'
import './Navbar.css'
function Navbar() {
  const dispatch=useDispatch()
  const loginPage=useSelector((state)=>state.auth.isLoginPage)
  const signupPage=useSelector((state)=>state.auth.isSignUpPage)
  const isAuth=useSelector((state)=>state.auth.isAuth)
    const navigate=useNavigate()
const onSignUpHandler=()=>{
  dispatch(setSignUp())
    navigate('sign-up')
}
const onLoginHandler=()=>{
  dispatch(setIsLogin())
  navigate('sign-in')
}
  return (
    <div className='navbar'>
   <div className='logo'>
    <img src='https://as2.ftcdn.net/v2/jpg/01/22/04/45/1000_F_122044550_CjRVM90rIus8RcB2B3jVe5DX0myf6DF8.jpg'></img>
   </div>
   

{signupPage&&<button className='getReportBtn' onClick={onSignUpHandler}>SignUp</button>}
{loginPage&&<button className='getReportBtn' onClick={onLoginHandler}>Login</button>}
{isAuth&&<button className='getReportBtn' onClick={onSignUpHandler}>Logout</button>}
    </div>
  )
}

export default Navbar
