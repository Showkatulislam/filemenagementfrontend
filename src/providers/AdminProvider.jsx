import React from 'react';
import UseAuth from '../Hook/UseAuth';
import Loading from "../components/Loading";
import { Navigate, useLocation } from 'react-router-dom';

const AdminProvider = ({children}) => {
    const {user,loading}=UseAuth();

    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if (user && user.admin==true) {
        return children;
    }
    if(user){
        return <Navigate to='/' replace></Navigate>
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminProvider;