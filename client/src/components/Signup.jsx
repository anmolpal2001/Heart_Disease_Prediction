import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formStep, setFormStep] = useState(1); // Track form step

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  });

  const submitFormHandler = async (event) => {
    event.preventDefault();
    console.log(data);
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      if (response.success) {
        setLoading(false);
        toast.success(response.message);
        navigate("/sign-in");
        setData({
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
          dob: "",
          gender: "",
        });
      } else {
        toast.error(response.message);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  const changeHandler = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormChange = (event) => {
    event.preventDefault();
    const requiredFields = ["email", "password", "confirmPassword"];
    for (let i = 0; i < requiredFields.length; i++) {
      const key = requiredFields[i];
      if (!data[key]) {
        toast.error(`Please fill ${key}`);
        return;
      }
    }
    if (!data.email || !data.password || !data.confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setFormStep(2); // Change form step to 2
  };

  const handleBack = () => {
    setFormStep(1); // Go back to Form Step 1
  };

  // const isFormStep1Valid =
  //   data.email && data.password && data.confirmPassword;

  return (
    <div>
      <div className="flex justify-center items-center mt-14">
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-6 text-xl font-bold text-gray-600 sm:text-2xl dark:text-white">
            {formStep === 1
              ? "Create your new account"
              : "Additional Information"}
          </div>
          <div className="mt-8">
            <form
              onSubmit={formStep === 1 ? handleFormChange : submitFormHandler}
            >
              {formStep === 1 && (
                <>
                  <div className="flex flex-col mb-2">
                    <div className="flex relative">
                      <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiSolidUser />
                      </span>
                      <input
                        onChange={changeHandler}
                        type="email"
                        id="email"
                        className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your Email"
                        value={data.email}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className="flex relative">
                      <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiSolidUser />
                      </span>
                      <input
                        onChange={changeHandler}
                        type="password"
                        id="password"
                        className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your Password"
                        value={data.password}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className="flex relative">
                      <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiSolidUser />
                      </span>
                      <input
                        onChange={changeHandler}
                        type="password"
                        id="confirmPassword"
                        className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Confirm Password"
                        value={data.confirmPassword}
                      />
                    </div>
                  </div>
                </>
              )}
              {formStep === 2 && (
                <>
                  <div className="flex flex-col mb-2">
                    <div className="flex relative">
                      <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiSolidUser />
                      </span>
                      <input
                        onChange={changeHandler}
                        type="text"
                        id="firstName"
                        className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your FirstName"
                        value={data.firstName}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className="flex relative">
                      <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiSolidUser />
                      </span>
                      <input
                        onChange={changeHandler}
                        type="text"
                        id="lastName"
                        className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your LastName"
                        value={data.lastName}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className="flex relative">
                      <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiSolidUser />
                      </span>
                      <input
                        onChange={changeHandler}
                        type="date"
                        id="dob"
                        className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Your Date of Birth"
                        value={data.dob}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-6">
                    <div className="flex relative">
                      <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
                        <BiSolidUser />
                      </span>
                      <select
                        onChange={changeHandler}
                        id="gender"
                        className="rounded-r-lg flex-1 border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:ring-blue-600"
                        value={data.gender}
                      >
                        <option
                          value="none"
                          className="text-gray-700"
                          defaultValue
                        >
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
              <div className="flex w-full">
                {formStep === 1 && (
                  <button
                    type="submit"
                    // disabled={!isFormStep1Valid}
                    className="py-2 px-4 bg-[#2A8683] hover:bg-[#2a8683ee] text-white w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    Next
                  </button>
                )}
                {formStep === 2 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="py-2 px-4 bg-[#435c5a] hover:bg-[#2a8683ee] text-white w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mr-4"
                  >
                    Prev
                  </button>
                )}
                {formStep === 2 && (
                  <button
                    type="submit"
                    className="py-2 px-4 bg-[#2A8683] hover:bg-[#2a8683ee] text-white w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    {loading ? (
                      <CircularProgress size={20} style={{ color: "white" }} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          {formStep === 1 && (
            <div className="flex items-center justify-center mt-6">
              <Link
                to="/sign-in"
                className="inline-flex items-center text-xs font-light text-center text-gray-600 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
              >
                <span className="ml-2 text-gray-600 text-base">
                  Have an account?{" "}
                  <span className="text-[#386BC0]">Sign In</span>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
