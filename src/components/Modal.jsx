import React from "react";
import defaultImage from "../assets/defaultImage.avif";
const Modal = ({ name, img }) => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-slate-200">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="py-5">
            <img src={img || defaultImage}  alt="" srcSet="" />
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
