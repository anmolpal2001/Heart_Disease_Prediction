import React, { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const [formDisable, setFormDisable] = useState(true);
  const [formData, setFormData] = useState(true);
const user=useSelector((state)=>state.auth.currentUser.sendData)
  const formEditHandler = (e) => {
    setFormDisable((prev) => !prev);
  };

  const formHandler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const submitHandler = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/v1/auth/profile", {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${currentUser.token}`,
        },
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="pt-2 bg-blueGray-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-8">
          <div className="px-6 bg-gradient-to-t from-[#f7cb6a] via-[#fabb75] to-[#fcab7e]">
            <div className="text-center mt-8">
              <div className="flex justify-center items-center">
              <img className=" rounded-full h-32 w-32"src='https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
              </div>
              <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2 mt-2">
            {user.firstName} {user.lastName}
              </h3>
            </div>
          
            {/* <div className="mt-10  border-t border-blueGray-200 text-center"></div> */}
          </div>

          <div className="h-72  flex justify-center items-center ">
            <div className="bg-white rounded-lg w-3/4 my-5 mx-10">
              <div className="flex flex-row justify-between m-3">
                <div className="flex justify-center items-center">
                  <label>User Mail ID</label>
                </div>
                <div className="w-2/4">
                  <input
                    type="email"
                    defaultValue={user.email}
                   disabled
                    id="email"
              
                    className={`m-1 p-1 w-full bg-white flex-auto focus:outline-0 `}
                  ></input>
                </div>
              </div>
              <div className="mt-1  border-t border-blueGray-200 text-center"></div>

              <div className="flex flex-row justify-between m-3">
                <div className="flex justify-center items-center">
                  <label>Date of Birth</label>
                </div>
                <div className="w-2/4">
                  <input
                    type="date"
                    defaultValue=""
                    disabled
                    id="dob"
                  
                  
                  
                    className={`m-1 p-1 bg-white w-full focus:outline-0 `}
                    
                  ></input>
                </div>
              </div>
              <div className="mt-1  border-t border-blueGray-200 text-center"></div>

              <div className="flex flex-row justify-between m-3">
                <div className="flex justify-center items-center">
                  <label>Gender</label>
                </div>
                <div className="w-1/2">
                <input
                    type="text"
                    defaultValue={user.gender}
                    disabled
                    id="gender"
                  
                
                    className={`m-1 p-1 bg-white w-full focus:outline-0 `}
                  
                  ></input>
                </div>
              </div>

              <div className="mt-1  border-t border-blueGray-200 text-center"></div>

              <div className="flex flex-row justify-between m-3 ">
                <div className="flex justify-center items-center">
                  <label>Change Password</label>
                </div>
                <div className="w-1/2">
                  <input
                    type="password"
                    defaultValue={user.password}
                    disabled={formDisable}
                    id="password"
                    placeholder="Password"
                    onChange={formHandler}
                    className={`m-1 p-1 w-full bg-white flex-auto focus:outline-0 ${
                      !formDisable && "border-slate-600 border-b-2"
                    }`}
                  ></input>
                </div>
              </div>
            </div>
          </div>
<div className="flex items-center  justify-evenly  mx-3 ">
  
<button type="button"onClick={submitHandler} className="w-1/3 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 my-2 mb-2 ">Submit</button>
        
<button type="button"onClick={formEditHandler}className="w-1/3 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 my-2 mb-2 ">Edit</button>       
              
          
            </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
