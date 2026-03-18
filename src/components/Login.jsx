import React from "react";
import CreateAccount from "./CreateAccount";

const Login = ({ setShow }) => {
  return (
    <div className="container max-w-md m-auto h-auto flex justify-center items-center gap-3 bg-white/10 shadow-2xl rounded-2xl">
      <form method="post" className="h-full w-full flex flex-col  gap-5 p-10">
        <h2 className="text-5xl bold text-center">Welcome back</h2>
        <p className="text-sm text-center">sing in to your account</p>
        <div className="email-wrapper flex flex-col text-sm gap-3">
          <label htmlFor="email">Email</label>
          <input
            className="p-2 border border-gray-500 rounded-xl"
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="password-wrapper flex flex-col text-sm gap-3">
          <label htmlFor="password">Password</label>
          <input
            className="p-2 border border-gray-500 rounded-xl"
            type="password"
            name="password"
            id="password"
            placeholder="Example@1234"
            required
          />
        </div>
        <button className="bg-black text-white text-lg p-2 rounded-xl">
          Sing in
        </button>
        <p className="text-sm text-center">
          Don't have an account?
          <span
            className="font-bold cursor-pointer"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
