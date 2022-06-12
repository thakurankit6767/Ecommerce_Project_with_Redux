import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate,useLocation } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const authStatus = useSelector((store) => store.authReducer.auth);
  const location =useLocation();
//   const navigate = useNavigate();
  //   console.log(authStatus);
  
    if (!authStatus) {
     return children
    }
    return <Navigate to="/login" state={location} replace={true}/>

  
};

export default AuthWrapper;
