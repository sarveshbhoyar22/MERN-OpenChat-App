import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full text-base-200">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Tailwind CSS chat bubble component"
          />
        </div>
      </div>
      <div className="chat-bubble">You were the Chosen One!</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12.45am</div>
    </div>
  );
}

export default Message