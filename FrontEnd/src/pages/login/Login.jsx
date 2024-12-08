import React from "react";
//rface
const Login = () => {
  return (
    <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Login
          <span className="text-yellow-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full h-10 p-2 input input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full h-10 p-2 input input-info"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:text-blue-500 hover:cursor-pointer"
          >
            Don't have any account!
          </a>

          <div className="justify-center items-center flex m-2 ">
            <button className="btn btn-block btn-md btn-info">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


/* STARTER CODE FOR THIS PAGE:
const Login = () => {
  return (
    <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Login
          <span className="text-yellow-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full h-10 p-2 input input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full h-10 p-2 input input-info"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:text-blue-500 hover:cursor-pointer"
          >
            Don't have any account!
          </a>

          <div className="justify-center items-center flex m-2 ">
            <button className="btn btn-block btn-md btn-info">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
*/ 