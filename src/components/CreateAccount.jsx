import React from "react";

const CreateAccount = ({ setShow }) => {
  return (
    <div className="container max-w-lg m-auto h-auto flex justify-center items-center gap-3 bg-white/10 shadow-2xl rounded-2xl">
      <form method="post" className="h-full w-full flex flex-col  gap-5 p-12">
        <h2 className="text-5xl bold text-center">Create account</h2>
        <p className="text-sm text-center">join us today</p>
        <div className="email-wrapper flex flex-col text-sm gap-3">
          <label htmlFor="name">Full Name</label>
          <input
            className="p-2 border border-gray-500 rounded-xl"
            type="name"
            name="name"
            id="name"
            placeholder="John Doe"
            required
          />
        </div>
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
          Sing up
        </button>
        <p className="text-sm text-center">
          Already have an account?
          <span
            className="font-bold cursor-pointer"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default CreateAccount;
