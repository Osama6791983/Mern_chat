import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckBox";
import useSignUp from "../../Hooks/useSignUp";


const Signup = () => {
  const { signup, loading } = useSignUp();
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
  };
  const handleCheckBoxChange = (e) => {
    setInput({
      ...input,
      gender: e.target.value,
    });
  };
 
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> QuickChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white"
              value={input.fullName}
              onChange={(e) => {
                setInput({ ...input, fullName: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white"
              value={input.userName}
              onChange={(e) => {
                setInput({ ...input, userName: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white"
              value={input.password}
              onChange={(e) => {
                setInput({ ...input, password: e.target.value });
              }}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white"
              value={input.confirmPassword}
              onChange={(e) => {
                setInput({ ...input, confirmPassword: e.target.value });
              }}
            />
          </div>

          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={input.gender}
          />

          <a
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
            href="#"
          >
            Already have an account?
          </a>

          <div>
            <button disabled={loading} type="submit" className="btn btn-block btn-sm mt-2input input-bordered h-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white">
              {
                loading ? (<span className="loading loading-spinner"></span>):"Sign Up"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
