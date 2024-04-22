import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Profile() {
  const [formDisable, setFormDisable] = useState(true);
  const [formData, setFormData] = useState({
    password : ""
  });
  const currentUser = useSelector((state) => state.auth.currentUser)
  const formEditHandler = (e) => {
    setFormDisable((prev) => !prev);
  };

  const formHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:4000/api/v1/auth/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success){
        setFormDisable(true);
        formData.password = "";
        toast.success("Profile Updated Successfully");
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <section className="pt-2 bg-gray-50">
      <div className="w-full md:w-8/12 lg:w-5/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow my-6 rounded-2xl">
          <div className="px-6 rounded-2xl bg-gradient-to-t from-[#f7cb6a] via-[#fabb75] to-[#fcab7e]">
            <div className="text-center my-8">
              <div className="flex justify-center items-center">
                <img
                  className="h-40 w-40 object-cover rounded-full bg-white border-[#1ccfc9] border-8"
                  src={currentUser.sendData.profilePic}
                ></img>
              </div>
              <h3 className="text-xl font-semibold leading-normal text-[#2A8683] bg-white rounded-md py-2 my-3">
                {currentUser.sendData.firstName} {currentUser.sendData.lastName}
              </h3>
            </div>

            {/* <div className="mt-10  border-t border-blueGray-200 text-center"></div> */}
          </div>

          <div className="h-full flex justify-center items-center my-auto">
            <div className="bg-white rounded-lg w-full my-5 m-2">
              <div className="flex flex-row justify-between m-3">
                <div className="flex justify-center items-center">
                  <label className="block mb-1 font-medium text-gray-700">
                    User Mail ID
                  </label>
                </div>
                <div className="w-2/4 ">
                  <input
                    type="email"
                    defaultValue={currentUser.sendData.email}
                    disabled
                    id="email"
                    className={`m-1 p-1 w-full bg-white flex-auto rounded-lg px-3 ${
                      !formDisable &&
                      "border-slate-200 border-2 cursor-not-allowed"
                    }`}
                  ></input>
                </div>
              </div>
              {/* <div className="mt-1  border-t border-blueGray-200 text-center"></div> */}

              <div className="flex flex-row justify-between m-3">
                <div className="flex justify-center items-center">
                  <label className="block mb-1 font-medium text-gray-700">
                    Date of Birth
                  </label>
                </div>
                <div className="w-2/4">
                  <input
                    type="date"
                    defaultValue={currentUser.sendData.dob}
                    disabled
                    id="dob"
                    className={`m-1 p-1 w-full bg-white flex-auto rounded-lg px-3 ${
                      !formDisable &&
                      "border-slate-200 border-2 cursor-not-allowed"
                    }`}
                  ></input>
                </div>
              </div>

              <div className="flex flex-row justify-between m-3">
                <div className="flex justify-center items-center">
                  <label className="block mb-1 font-medium text-gray-700">
                    Gender
                  </label>
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    defaultValue={currentUser.sendData.gender}
                    disabled
                    id="gender"
                    className={`m-1 p-1 w-full bg-white flex-auto rounded-lg px-3 ${
                      !formDisable &&
                      "border-slate-200 border-2 cursor-not-allowed"
                    }`}
                  ></input>
                </div>
              </div>

              <div className="flex flex-row justify-between m-3 ">
                <div className="flex justify-center items-center">
                  <label className="block mb-1 font-medium text-gray-700">
                    Password
                  </label>
                </div>
                <div className="w-1/2">
                  <input
                    type="password"
                    disabled={formDisable}
                    id="password"
                    placeholder={formDisable ? "********" : "Enter Password"}
                    onChange={formHandler}
                    value={formData.password}
                    className={`m-1 mb-1 p-1 pb-0 w-full bg-white flex-auto rounded-lg px-3 ${
                      !formDisable && "hover:border-slate-300 border-2"
                    }`}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  justify-evenly  mx-3 mb-4 ">
            <button
              type="submit"
              onClick={submitHandler}
              className={`w-2/5 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 my-2 mb-2 ${formDisable ? "hidden" : ""}`}
            >
              Submit
            </button>

            <button
              type="button"
              onClick={formEditHandler}
              className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 my-2 mb-2 ${formDisable ? "w-3/5 bg-blue-700 hover:bg-blue-800" : "w-2/5 bg-gray-500"}`}
            >
              {formDisable ? "Edit" : "Cancel"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
