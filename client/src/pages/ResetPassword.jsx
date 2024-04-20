import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function ResetPassword() {
  const { id, token } = useParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const onChangeHandler = (event) => {
    setFormData((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/auth/change-password/${id}/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
      {!success ? (
        <div className="flex justify-center items-center mt-20">
          <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center font-bold mb-2 text-xl text-[#2A8683] sm:text-2xl">
              Reset Your Password
            </div>
            <div className="mt-8">
              <form className="w-full">
                <div className="flex flex-col mt-8">
                  <div className="mb-5">
                    <label className="block mb-1 font-bold text-gray-700 ">
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                      placeholder="New Password"
                      type="password"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="mb-10">
                    <label className="block mb-1 font-bold text-gray-700 ">
                      Confirm Password
                    </label>
                    <input
                      id="confirmNewPassword"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                      placeholder="Confirm Password"
                      type="password"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    type="button"
                    onClick={submitHandler}
                    className={`py-2 px-4 bg-[#2A8683] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md  rounded-lg ${
                      !formData.confirmNewPassword &&
                      "cursor-not-allowed bg-gray-400"
                    }`}
                    disabled={!formData.confirmNewPassword}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
              {error && (
                <p className="text-red-500 text-center text-sm mt-2">{error}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-16 mx-auto">
          <div className="flex flex-col justify-center items-center w-full max-w-lg px-6 py-8 bg-white rounded-lg md:px-8 lg:px-10">
            <h1 className="text-3xl font-bold mb-4 text-center text-[#2A8683]">
              Password Reset Successful
            </h1>
            <div className=" mb-4">
              <RiLockPasswordFill size={60} color="#2A8683" />
            </div>
            <p className="mb-2 text-center">
              Your password has been reset successfully.
            </p>
            <Link to="/sign-in">
              <p className="text-[#2A8683] text-center text-sm mt-2">
                Go to Sign In Page
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ResetPassword;
