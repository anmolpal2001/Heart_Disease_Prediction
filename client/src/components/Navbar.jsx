import React from 'react'
import { useNavigate}from 'react-router-dom'
import './Navbar.css'
function Navbar(props) {
    const navigate=useNavigate()
const onSignUpHandler=()=>{
    navigate('sign-up')
}
  return (
    <div className='navbar'>
   <div className='logo'>
    <img src='https://as2.ftcdn.net/v2/jpg/01/22/04/45/1000_F_122044550_CjRVM90rIus8RcB2B3jVe5DX0myf6DF8.jpg'></img>
   </div>
   

<button className='getReportBtn' onClick={onSignUpHandler}>SignUp</button>

    </div>
  )
}

export default Navbar
