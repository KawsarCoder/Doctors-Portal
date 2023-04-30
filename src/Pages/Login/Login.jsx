import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, formState:{errors}, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    console.log(errors); 
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center"> Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* <Header /> */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="text"
              {...register("email",{required:"Email is required"})}
              className="input input-bordered w-full max-w-xs"
            />
                  {errors.email && <p className="text-red-600">{errors.email?.message}</p>}

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              {...register("password",
                {
                  required: "Password is required",
                  minLength: {value:6, message:"Password must be 6 characters or longer"}
                })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input
            type="submit"
            className="text-white btn btn-accent w-full"
            value="login"
          />
        </form>
        <p>
          New to Doctor's Portal?{" "}
          <Link className="text-secondary" to="/signup">
            Please sign up
          </Link>
        </p>

        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
