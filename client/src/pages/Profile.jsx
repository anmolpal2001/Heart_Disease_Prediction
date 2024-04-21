import React, { useState } from "react";

function Profile() {
  const [formDisable, setFormDisable] = useState(true);
  const [formData, setFormData] = useState(true);

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
      const res = await fetch("http://localhost:4000/api/v1/user/", {
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
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Name
              </h3>
            </div>
            <div className="flex justify-end">
              <button onClick={formEditHandler}>Edit</button>
            </div>
            <div className="mt-10  border-t border-blueGray-200 text-center"></div>
          </div>

          <div className="bg-[#f7f7f7] flex justify-center items-center ">
            <div className="bg-white rounded-lg w-3/4 m-10">
              <div className="flex flex-row justify-between m-3">
                <div className="flex justify-center items-center">
                  <label>User Mail ID</label>
                </div>
                <div className="w-2/4">
                  <input
                    type="email"
                    defaultValue="gmail.com"
                    disabled={formDisable}
                    id="email"
                    placeholder="Phone"
                    // onChange={formHandler}
                    className={`m-1 p-1 w-full bg-white flex-auto focus:outline-0 ${
                      !formDisable && "border-slate-600 border-b-2"
                    }`}
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
                    type="text"
                    defaultValue=""
                    disabled={formDisable}
                    id="dob"
                    placeholder="DD/MM/YYYY"
                    maxLength="10"
                    onChange={formHandler}
                    className={`m-1 p-1 bg-white w-full focus:outline-0 ${
                      !formDisable && "border-slate-600 border-b-2"
                    }`}
                    pattern="\d{2}/\d{2}/\d{4}"
                  ></input>
                </div>
              </div>
              <div className="mt-1  border-t border-blueGray-200 text-center"></div>

              <div className="flex flex-row justify-between m-3">
                <div className="flex justify-center items-center">
                  <label>Gender</label>
                </div>
                <div className="w-1/2">
                  <select
                    id="gender"
                    disabled={formDisable}
                    onChange={formHandler}
                    className="m-1 p-1 w-full bg-white  focus:outline-0"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-700"
                    >
                      Select Gender
                    </option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                </div>
              </div>

              <div className="mt-1  border-t border-blueGray-200 text-center"></div>

              <div className="flex flex-row justify-between m-3 ">
                <div className="flex justify-center items-center">
                  <label>Change Password</label>
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    defaultValue="gmail.com"
                    disabled={formDisable}
                    id="pass"
                    placeholder="Phone"
                    onChange={formHandler}
                    className={`m-1 p-1 w-full bg-white flex-auto focus:outline-0 ${
                      !formDisable && "border-slate-600 border-b-2"
                    }`}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <button onClick={submitHandler} className="p-2 ">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
