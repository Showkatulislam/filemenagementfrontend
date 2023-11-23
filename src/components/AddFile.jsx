import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import defaultImage from "../assets/defaultImage.avif";
import UseAuth from "../Hook/UseAuth";
const AddFile = ({addFile}) => {
  const { register, handleSubmit } = useForm();
  const {user}=UseAuth()

  const handleForm=e=>{
    const formData = new FormData();
    formData.append('FileName', e.file_name);
    formData.append('UserId',user.id);
    formData.append('Email', user.email);
    formData.append('formFile',e.file[0]);
    addFile(formData)
  }
  return (
    <div className="card shrink-0 w-full p-3 shadow-2xl bg-base-100 border">
      <img src={defaultImage} />
      <form onSubmit={handleSubmit(handleForm)}>
        <Input
          label="File Name"
          id="file_name"
          type="text"
          register={register}
        />
        <Input label="File" id="file" type="file" register={register} />
        <button
          className="input input-bordered w-full mt-4 bg-indigo-700"
          type="submit"
        >
          Add File
        </button>
      </form>
    </div>
  );
};

export default AddFile;
