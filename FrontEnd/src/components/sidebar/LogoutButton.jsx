import React from 'react'
import { BiLogOut } from "react-icons/bi";
function LogoutButton() {
  return (
    <div className="flex flex-col justify-center items-start mt-auto">
      <BiLogOut className='w-6 h-6 cursor-pointer m-2 ' />
    </div>
  );
}

export default LogoutButton


