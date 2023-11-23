import React from "react";
import {
  FaFile,
  FaFileImage,
  FaFileVideo,
  FaRegFilePdf,
  FaRegFileWord,
} from "react-icons/fa";
const Files = ({ type = "pdf", url,fileName }) => {
  type =
    url
      ?.split("")
      .slice(url?.length - 3)
      .join("") || "pdf";
  return (
    <div>
      <div>
        <div className="text-5xl  text-purple-500">
          {type === "file" && <FaFile />}
          {type === "png" && <FaFileImage />}
          {type === "jpg" && <FaFileImage />}
          {type === "pdf" && <FaRegFilePdf />}
          {type === "video" && <FaFileVideo />}
          {type === "word" && <FaRegFileWord />}
        </div>
        <p>{fileName}</p>
      </div>
    </div>
  );
};

export default Files;
