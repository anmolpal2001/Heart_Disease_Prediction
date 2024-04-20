import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
function ResetPassword() {
    const {id,token}=useParams()
    console.log(id+" "+token)
    const[error,setError]=useState({
        hasError:false,
        content:''
    })

    const [data,setData]=useState({
        newPassword:'',
        confirmNewPassword:''
    })
 
  
const onChangeHandler=(event)=>{
    setError((prev)=>{return {...prev,hasError:false}})
    setData((prev)=>{
        return{...prev,[event.target.id]:event.target.value}
    })
}
const submitHandler=async(event)=>{
event.preventDefault()
    try{
const res=await fetch(`http://localhost:4000/api/v1/auth/change-password/${id}/${token}`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:data
})
const response=await data.json()
if(!response.success){
setError({
   hasError:true,
   content:response.message
})
}
    }
    catch(err){
console.log(err)

    }
console.log(data.newPassword)
}
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
         Reset Password
        </div>
        <div className="mt-8">
          <form onSubmit={submitHandler}>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                onChange={onChangeHandler}
                  type="password"
                  value={data.newPassword}
                  id="newPassword"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="New Password"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  id="confirmNewPassword"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Confirm Password"
                  value={data.confirmNewPassword}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div>
                {error.hasError&&<p>{error.content}</p>}
            </div>
            {/* <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a
                  href="#"
                  className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div> */}
            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4  bg-[#2A8683]  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
               Submit
              </button>
            </div>
          </form>
        </div>
        {/* <div className="flex items-center justify-center mt-6">
          <Link
            to='/sign-up'
       
            className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span className="ml-2">You don&#x27;t have an account? <span className="text-blue-400">Sign Up</span></span>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default ResetPassword
