import React, { useEffect, useState } from "react";
import AddFile from "../components/AddFile";
import FileCard from "../components/FileCard";
import axios from "axios";
import useAxios from "../Hook/useAxios";
import toast from "react-hot-toast";
import UseAuth from "../Hook/UseAuth";

const FileExplore = () => {
  const [files,setFiles]=useState([])
  const {user}=UseAuth()
  const ApiBaseUrl=useAxios()
  const addFile=async(data)=>{
   const res=await ApiBaseUrl.post('/api/File',data);
   if(res.statusText=="OK"){
    toast.success("File Add SuccessFully")
   }
  }

  const getAllFile=async()=>{
    const res=await ApiBaseUrl.get(`/api/File/${user.id}`)
    setFiles(res.data)
  }

  useEffect(()=>{
    getAllFile()
  },[])
  console.log(files);
  return (
    <div className="grid md:grid-cols-4 md:gap-3 my-14">
      <div className="col-span-1">
       <AddFile addFile={addFile}/>
      </div>
      <div className="col-span-3 grid items-center justify-center md:grid-cols-3 gap-3 ">
        {
          files.map(a=><FileCard file={a} key={a.id}/>)
        }
      </div>
    </div>
  );
};

export default FileExplore;
