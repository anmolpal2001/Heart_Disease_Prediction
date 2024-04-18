import React from 'react'
import { useState } from 'react'
function SignIn() {
    const [data,setData]=useState({
        email:'',
        password:''
    })
    const changeHandler=(e)=>{
setData((data)=>({
     ...data,[e.target.id]:e.target.value

}))
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        setData((prev)=>({
            ...prev,email:'',password:''
        }))

    }
  
    


  return (
    <div className='signin'>
     <form onSubmit={submitHandler}>
       <label htmlFor='email'>Email</label> 
       <input id='email' onChange={changeHandler} type='email' name='email' value={data.email}></input>
       <label htmlFor='password'>password</label>
       <input id='password'onChange={changeHandler} type='password' name='password' value={data.password}></input>
<input type='submit'></input>
     </form>
    </div>
  )
}

export default SignIn
