import React from "react";
import {
  FaFile,
  FaFileImage,
  FaFileVideo,
  FaRegFilePdf,
  FaRegFileWord,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";

import Modal from "./Modal";
const FileCard = ({ fileName = "file Name", type = "file" ,file, DeleteFile}) => {
 
  const {fileUrl}=file
 
  type=fileUrl.split("").slice(fileUrl.length-3).join("");

  return (
    <div className="card w-60 bg-white">
      <div className="card-body flex  items-center">
        <div className="text-5xl  text-purple-500">
          {type === "file" && <FaFile />}
          {type === "png" && <FaFileImage />}
          {type === "jpg" && <FaFileImage />}
          {type === "pdf" && <FaRegFilePdf />}
          {type === "video" && <FaFileVideo />}
          {type === "word" && <FaRegFileWord />}
        </div>
        <h2 className="card-title text-md">{file.fileName}</h2>
        <div className="card-actions  justify-end">
          <button className="text-2xl" onClick={()=> DeleteFile(file.id)}>
            <MdDelete />
          </button>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="text-2xl"
          >
            <GrView />
          </button>
        </div>
      </div>
      <Modal name={fileName} />
    </div>
  );
};

export default FileCard;
