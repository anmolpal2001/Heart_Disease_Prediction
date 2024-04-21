import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/auth/forgot-password",
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
        console.log(data.linkForChangePassword);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!success ? (
        <div className="flex justify-center items-center mt-16">
          <div className="flex flex-col w-full max-w-lg px-6 py-8 bg-white rounded-lg md:px-8 lg:px-10">
            <div className="self-center font-bold mb-2 text-xl text-[#2A8683] sm:text-2xl">
              Forgot Password
            </div>
            <div className="mt-8 flex flex-col">
              <p className="mb-4 text-md leading-none tracking-tight text-gray-600">
                Enter your email address below and we'll send you a link to
                reset your password.
              </p>
              <form className="w-full">
                <div className="flex flex-col mt-8">
                  <div className="mb-10">
                    <label className="block mb-1 font-bold text-gray-700 ">
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                      placeholder="Enter your email here"
                      type="email"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    type="button"
                    onClick={submitHandler}
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
        <div className="flex justify-center items-center mt-16 mx-auto">
          <div className="flex flex-col justify-center items-center w-full max-w-lg px-6 py-8 bg-white rounded-lg md:px-8 lg:px-10">
            <h1 className="text-3xl font-bold mb-4 text-center text-[#2A8683]">
              Email Sent Successfully
            </h1>
            <div className=" mb-4">
              <MdMarkEmailRead size={60} color="#2A8683"/>
            </div>
            <p className="mb-2 text-center">
              An email with instructions to reset your password has been sent
              to:
            </p>
            <p className="mb-4 text-center font-bold text-blue-700">{email}</p>
            <p className="mb-4 text-center">
              Click the link in that email to reset your password.
            </p>
            <p className="mb-2 text-center">
              Didn't receive the email? Check your Spam folder, it may have been
              caught by a filter. If you still don't see it, you can{" "}
              <a href="#" className="text-[#2A8683] hover:underline">
                resend the reset password email.
              </a>
            </p>
            <p className="mb-4 text-center">
              Wrong email address?{" "}
              <a href="#" className="text-[#2A8683] hover:underline">
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
