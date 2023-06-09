import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../Components/Hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUpError();
    signUpUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User created successfully");
        const userInformation = {
          displayName: data.name,
        };
        updateUser(userInformation)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignUpError(error.message);
        console.log(error);
      });
  };

  const saveUser = (userName, email) => {
    const user = { userName, email };
    fetch("https://doctor-portal-server-alpha-mauve.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center"> Sign uP</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              {...register("name", { required: "name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />{" "}
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecter or more",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must be add at least 1 capital letter, 1 small letter, 1 special character & numbers",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          {signUpError && (
            <p className="text-red-600 font-bold">{signUpError}</p>
          )}
          <input
            type="submit"
            className="text-white btn btn-accent w-full mt-5"
            value="Sign Up"
          />
        </form>
        <p>
          Already Have an account?{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </p>

        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
