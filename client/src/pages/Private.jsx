import React from 'react'

import { Outlet } from "react-router";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

function Private() {
  const data = useSelector((data) => data.auth.isAuthenticated);
 
  return data ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default Private;
