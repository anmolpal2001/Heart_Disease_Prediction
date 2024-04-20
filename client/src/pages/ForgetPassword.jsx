import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {success === true ? (
        <div className="flex justify-center items-center mt-20">
          <div className="flex flex-col w-full max-w-lg px-6 py-8 bg-white rounded-lg shadow dark:bg-gray-800 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-gray-800 sm:text-2xl">
              Forgot Password
            </div>
            <div className="mt-8 flex flex-col">
              <p className="mb-4 text-md leading-none tracking-tight text-[#2A8683]">
                Enter your email address below and we'll send you a link to
                reset your password.
              </p>
              <form onSubmit={submitHandler} className="w-full">
                <div className="flex flex-col mb-2">
                  <div className="my-3">
                    <label className="block mb-1 font-bold text-gray-700 ">
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                      placeholder="Enter your email here"
                      type="email"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    type="submit"
                    className={`py-2 px-4 bg-[#2A8683] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md  rounded-lg ${
                      !email && "cursor-not-allowed bg-gray-400"
                    }`}
                    disabled={!email}
                  >
                    Send Email
                  </button>
                </div>
              </form>
              {error && (
                <p className="text-red-500 text-center text-sm mt-2">{error}</p>
              )}
            </div>
            <div className="my-20">
              <Link to="/sign-in">
                <p className="text-[#2A8683] text-center text-sm mt-2">
                  Back to Login
                </p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="content pt-4">
          <div className="verify-email flex flex-col items-center justify-center sm:h-screen text-gray-600 m-auto px-2">
            <h1 className="text-3xl font-bold mb-4 text-center text-black">
              Please verify your email...
            </h1>
            <div className="email-icon mb-4">
              <MdMarkEmailRead />
            </div>
            <p className="mb-2 text-center">
              Please verify your email address. We've sent a confirmation email
              to:
            </p>
            <p className="mb-4 text-center font-bold text-black">
              account@refero.design
            </p>
            <p className="mb-4 text-center">
              Click the confirmation link in that email to begin using Dribbble.
            </p>
            <p className="mb-2 text-center">
              Didn't receive the email? Check your Spam folder, it may have been
              caught by a filter. If you still don't see it, you can{" "}
              <a href="#" className="text-pink-500 hover:underline">
                resend the confirmation email.
              </a>
            </p>
            <p className="mb-4 text-center">
              Wrong email address?{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Change it.
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
