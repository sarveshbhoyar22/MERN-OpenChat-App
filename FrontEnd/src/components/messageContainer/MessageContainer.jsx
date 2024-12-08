import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { IoIosChatboxes } from "react-icons/io";
function MessageContainer() {
    const noChatSelected = true;
    // const noChatSelected = false;
  return (
    <div className="flex flex-col md:min-w-[560px] ">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-800 w-full h-12 px-10 py-3">
            <span className="text-slate-300 font-bold  ">Full Name</span>
          </div>

          {/* Messages */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer


const NoChatSelected = () => {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className=" absolute flex flex-col font-bold text-xl items-center justify-center">
          <p>Welcome User 😄</p>
          <p>Select a Chat to Start Messaging</p>
          <IoIosChatboxes className='text-3xl md:text-6xl text-center' />
        </div>
      </div>
    );
}