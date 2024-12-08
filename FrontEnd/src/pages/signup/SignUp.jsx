import React from "react";
import GenderCheckBox from "./genderCheckBox";

const Signup = () => {

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          SignUp
          <span className="text-yellow-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-md input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-md input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-md input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">Confirm Password!</span>
            </label>
            <input
              type="text"
              placeholder="Enter Confirm Password!"
              className="w-full input input-md input-info"
            />
          </div>
          <div>
            <label className="label p-2">
              {" "}
              <span className="label-text text-base">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full input input-md input-info"
            />
          </div>

            {/*Gender Checkbox  */}
            <GenderCheckBox/>



          <a href="#" className="hover:underline hover:text-slate-300 text-sm p-2">
            Already have Account?!
          </a>
            <div className="flex justify-center">

          <button className="btn btn-block btn-info">SignUp</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
