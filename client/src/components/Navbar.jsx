import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/heartt.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import UserNavigationPanel from "./UserNavigation";
import toast from "react-hot-toast";
import {outputClear} from "../redux/output/outputSlice";
const Navbar = () => {
  const [userNavPanel, setUserNavPanel] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const handleUserNavPanel = () => {
    setUserNavPanel((currVal) => !currVal);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setUserNavPanel(false);
    }, 200);
  };
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/logout");
      const data = await response.json();
      if (data.success) {
        toast.success(data.message)
        dispatch(logout());
        dispatch(outputClear());
        navigate("/");
        // console.log(data);
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error)
      console.log(error);
    }
  };
  return (
    <header className="sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} className="w-full h-12 mr-2" alt="Logo" />
              <h1 className="text-3xl font-bold text-[#2A8683]">HeartCare</h1>
            </Link>
          </div>
          {currentUser ? (
            <div className="flex items-center">
              <div className="flex items-center ms-3 relative">
                <div
                  className="relative"
                  onClick={handleUserNavPanel}
                  onBlur={handleBlur}
                >
                  <button className="w-10 h-10 border-2 rounded-full border-[#2A8683]">
                    <img
                      src={currentUser && currentUser.sendData.profilePic}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </button>
                  {userNavPanel && (
                    <UserNavigationPanel handleLogout={handleLogout} />
                  )}
                </div>
              </div>
            </div>
          ) : location.pathname === "/" && (
            <div className="flex items-center lg:order-2">
              <Link
                to="sign-in"
                className="text-white bg-[#2A8683]  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
<<<<<<< HEAD
              Login
=======
                Login
>>>>>>> c78cff57970c0dad717858f66615dedf5947ffe8
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
