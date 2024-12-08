import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messageContainer/MessageContainer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="font-extrabold text-sky-400"><span>Chat</span><span className="text-yellow-600"> App</span></h1>
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-xl bg-opacity-0">
          <SideBar />
          <MessageContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
