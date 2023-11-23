import React, {useEffect, useState } from 'react';

import Folder from '../components/Folder';
import useAxios from '../Hook/useAxios';
import UseAuth from '../Hook/UseAuth';
import toast from 'react-hot-toast';

const DeshboardHome = () => {
    const baseUrl=useAxios();
     const {user}=UseAuth()
    const [users,setUsers]=useState([]);
    console.log(user.email);

    const loadUser=async()=>{
        const res= await baseUrl.get(`/api/Auth/getAllUser/${user.email}`)
        console.log(res);
        setUsers(res.data);
    }
    useEffect(()=>{
        loadUser()
    },[])
   

    const deleteFolder=async(email)=>{
        console.log(email);
       const res=await baseUrl.delete(`/api/File/all/${email}`)
       console.log(res);
       if(res.status==200){
            toast.success("Delete File Successfully")
       }
    }

    return (
        <div className='grid md:grid-cols-2 '>
            {
               users.map(user=><Folder key={user.id} user={user} deleteFolder={deleteFolder}/>)
            }
        </div>
    );
};

export default DeshboardHome;