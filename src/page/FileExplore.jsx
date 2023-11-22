import React from "react";
import AddFile from "../components/AddFile";
import FileCard from "../components/FileCard";

const FileExplore = () => {
  const arr=[1,2,3,4,5,6]
  return (
    <div className="grid md:grid-cols-4 md:gap-3 my-14">
      <div className="col-span-1">
       <AddFile/>
      </div>
      <div className="col-span-3 grid md:grid-cols-3 gap-3 ">
        {
          arr.map(a=><FileCard/>)
        }
      </div>
    </div>
  );
};

export default FileExplore;
