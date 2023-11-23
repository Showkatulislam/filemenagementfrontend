import React, { useEffect, useState } from 'react';
import useAxios from '../Hook/useAxios';
import { useParams } from 'react-router-dom';

import Files from './Files';

const AllFile = () => {
    const [files,setFiles]=useState([]);
    const baseUrl=useAxios();
    const {id}=useParams()
    const loadfile=async()=>{
        const res=await baseUrl.get(`/api/File/${parseInt(id)}`)
        console.log(res);
        setFiles(res.data)
    }
    useEffect(()=>{
        loadfile()
    },[])
    const type="pdf"
    return (
        <div>
           {files.length==0 && <p className='text-center text-5xl font-bold'>No File Now</p>}
           {
            files.map(file=> <Files key={file.id} url={file.fileUrl} fileName={file.fileName
            } />)
           }
        </div>
    );
};

export default AllFile;