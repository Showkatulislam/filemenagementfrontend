import { useCallback, useState } from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

const Login = () => {
  const [variant, setVariant] = useState("LOGIN");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const toggle = useCallback(() => {
    if (variant == "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(handleForm)}>
          <h1
            className="
            text-4xl
            text-center
            font-bold
            "
          >
        {variant === "LOGIN" ? "Login Please" : "Register"}
          </h1>
          {variant === "REGISTER" && (
            <Input
              label={"UserName"}
              type={"text"}
              id="username"
              register={register}
            />
          )}
          <Input
            label={"Email"}
            type={"email"}
            id="email"
            register={register}
          />

          <Input
            label={"Password"}
            type={"password"}
            id="password"
            register={register}
          />
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              {variant === "REGISTER" ? "Register" : "Login"}
            </button>
          </div>
          <button onClick={toggle}>
            {variant === "REGISTER"
              ? "Already have account?"
              : "Please create a account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
