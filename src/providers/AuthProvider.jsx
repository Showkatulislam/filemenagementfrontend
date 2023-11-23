import React, { createContext, useContext, useEffect, useState } from "react";
import useAxios from "../Hook/useAxios";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const [user,setUser]=useState();
  const [message,setMessage]=useState("");
  const [loading,setLoading]=useState(true);

  const AxiosBase=useAxios();

  const userRegister=async(data)=>{
     const res=await AxiosBase.post('/api/Auth/Register',data)
    setMessage(res.data.message);
  }

  const userLogin=async(data)=>{
    const res=await AxiosBase.post('/api/Auth/Login',data)
    await localStorage.setItem("user",JSON.stringify(res.data))
    setUser(res.data);
    setLoading(false)
    console.log((user));
  }

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")))
    setLoading(false)
  },[])

  const logOut=()=>{
    localStorage.removeItem("user")
    setUser(null)
  }


  const authinfo={
    user,
    userLogin,
    userRegister,
    message,
    setMessage,
    logOut,
    loading
  }
  return( <AuthContext.Provider value={authinfo}>
    {children}
  </AuthContext.Provider>);
};

export default AuthProvider;
