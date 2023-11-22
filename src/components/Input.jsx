import { memo } from "react";

const Input = ({ label, type, register, id }) => {
  console.log("input");
  return (
    <div
    className="form-control"
    >
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={label}
        className={ type=='file'?"file-input file-input-bordered file-input-primary w-full max-w-xs": "input input-bordered"}
        required
        id={id}
        {...register(id)}
      />
    </div>
  );
};

export default memo(Input);
