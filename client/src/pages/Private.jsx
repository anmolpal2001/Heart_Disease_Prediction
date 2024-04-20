import React from 'react'
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

function Private({children}) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
 
  return isAuthenticated ? children : <Navigate to="/sign-in" />;
}

export default Private;
