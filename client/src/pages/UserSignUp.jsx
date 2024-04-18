import React from 'react'
import { useState } from 'react'
function UserSignUp() {
    const [data,setData]=useState({
        email:'',
        password:'',
        firstName:'',
        lastName:''
    })
    const changeHandler=(e)=>{
        setData((prev)=>{
         return {...prev,[e.target.id]:e.target.value}   
        })
    }
    const submitHandler=(e)=>{
        e.preventDefault()
console.log(data.email +" "+ data.firstName+" "+data.lastName+" "+data.password)
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='email'>email</label>
        <input onChange={changeHandler} id='email' type='email' name='email'value={data.email}></input>
        <label htmlFor='firstName'>firstName</label>
        <input onChange={changeHandler}  id='firstName' type='text' name='firstName'value={data.firstName}></input>
        <label htmlFor='lastName'>lastName</label>
        <input onChange={changeHandler}  id='lastName' type='text' name='lastName'value={data.lastName}></input>
        <label htmlFor='password'>password</label>
        <input  onChange={changeHandler} id='password' type='password' name='password'value={data.password}></input>
    <input type='submit'></input>
      </form>
    </div>
  )
}

export default UserSignUp
