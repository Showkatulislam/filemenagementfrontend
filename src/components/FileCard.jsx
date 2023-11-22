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
import defaultImage from "../assets/defaultImage.avif";
const FileCard = ({ fileName = "file Name", type = "file" }) => {
  return (
    <div className="card w-60 bg-white">
      <div className="card-body flex  items-center">
        <div
          role="button"
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="text-5xl  text-purple-500"
        >
          {type === "file" && <FaFile />}
          {type === "png" && <FaFileImage />}
          {type === "jpg" && <FaFileImage />}
          {type === "pdf" && <FaRegFilePdf />}
          {type === "video" && <FaFileVideo />}
          {type === "word" && <FaRegFileWord />}
        </div>
        <h2 className="card-title text-md">{fileName}</h2>
        <div className="card-actions  justify-end">
          <button className="text-2xl">
            <MdDelete />
          </button>
          <button className="text-2xl">
            <GrView />
          </button>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-slate-200">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{fileName}</h3>
            <div className="py-5">
                <img src={defaultImage} alt="" srcset="" />
            </div>
        </div>
      </dialog>
    </div>
  );
};

export default FileCard;
