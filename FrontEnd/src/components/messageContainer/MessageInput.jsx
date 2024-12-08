import React from "react";
import { IoIosSend } from "react-icons/io";
function MessageInput() {
  return (
    <form className="px-4 my-3 ">
      <div className="w-full flex justify-between items-center gap-2 ">
        <input
          type="text"
          className="w-full border text-sm text-white block rounded p-2.5 bg-gray-800 input input-bordered "
          placeholder="Send a Message !"
        />
        <div className="bg-sky-600 p-2 rounded-full hover:cursor-pointer hover:bg-sky-900">
          <IoIosSend className="w-6 h-6 hover:scale-125 transition-all rounded-2xl hover:cursor-pointer" />
          {/* <IoIosSend /> */}
        </div>
      </div>
    </form>
  );
}

export default MessageInput;



/*
function MessageInput() {
  return (
    <form className="px-4 my-3 ">
      <div className="w-full flex justify-between items-center gap-2 ">
        <input
          type="text"
          className="w-full border text-sm text-white block rounded p-2.5 bg-gray-800 input input-bordered "
          placeholder="Send a Message !"
        />
        <div>
          <IoMdSend className="w-5 h-5 " />
        </div>
      </div>
    </form>
  );
}

export default MessageInput;
*/
