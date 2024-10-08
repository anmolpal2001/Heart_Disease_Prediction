import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/auth/authSlice";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/v1/auth/signin", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
      });
      const response = await res.json();
      console.log(response);
      if (response.success) {
        setLoading(false);
        toast.success(`${response.message}`);
        dispatch(loginSuccess(response));
        navigate("/");
        setData(() => {
          return {
            email: "",
            password: "",
          };
        });
      } else {
        toast.error(response.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err);
      setLoading(false);
    }
  };
  const onChangeHandler = (event) => {
    setData((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };
  return (
    <>
      {currentUser ? (
        <Navigate to="/" />
      ) : (
        <div className="flex justify-center items-center mt-20">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-bold text-gray-600 sm:text-2xl dark:text-white">
              Login To Your Account
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
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                      </svg>
                    </span>
                    <input
                      onChange={onChangeHandler}
                      type="text"
                      value={data.email}
                      id="email"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your email"
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
                      id="password"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your password"
                      value={data.password}
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div className="flex items-center mb-6 -mt-4">
                  <div className="flex ml-auto text-base">
                    <Link
                      to="/forgot-password"
                      className="inline-flex  font-light text-[#386BC0] sm:text-sm dark:text-gray-100 dark:hover:text-white"
                    >
                      Forgot Your Password?
                    </Link>
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-[#2A8683]  text-white w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  hover:bg-[#2a8683ee] "
                  >
                    {loading ? (
                      <CircularProgress size={30} style={{color:"white"}} />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center mt-6 ">
              <Link
                to="/sign-up"
                className="inline-flex items-center text-xs font-light text-center text-gray-600 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
              >
                <span className="ml-2 text-gray-600 font-light text-base">
                  You don&#x27;t have an account?{" "}
                  <span className=" text-[#386BC0] font-light">
                    Sign Up
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;
