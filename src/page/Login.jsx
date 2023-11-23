import { useCallback, useState } from "react";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
  const [variant, setVariant] = useState("LOGIN");
  const { userLogin, userRegister, message,setMessage} = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      phoneNumber: "",
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
    const user = {
      email: data.email,
      password: data.password,
    };
    if (variant === "LOGIN") {
      userLogin(user);
      if(user){
        navigate('/')
        setMessage("")
        toast.success('Login Successfully')
      }
    } else {
      userRegister(data);
      if(message){
        
        setVariant("REGISTER")
      }
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(handleForm)}>
        {message && <p className="text-center">{message}</p>}
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
              label={"User Name"}
              type={"text"}
              id="userName"
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
          {variant === "REGISTER" && (
            <Input
              label={"Phone Number"}
              type={"text"}
              id="phoneNumber"
              register={register}
            />
          )}

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
