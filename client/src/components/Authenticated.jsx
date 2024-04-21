import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Authenticated = ({children}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? <Navigate to="/" /> : children 
}

export default Authenticated