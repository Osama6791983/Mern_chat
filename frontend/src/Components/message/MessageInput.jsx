import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../Hooks/useSendMessage";
const MessageInput = () => {
  const {sendMessage,loading} = useSendMessage()
  const [message, setMessage] = useState("")
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message)
    setMessage("")
  };
  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5   focus:outline-none   bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        
        {
        !loading?(<><button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 "
        >
          <BsSend className="w-5 h-5 text-white " />
        </button></>):(<><span className="loading loading-spinner absolute inset-y-0 end-0 flex items-center p-2"></span></>)
      }
      </div>
    </form>
  );
};

export default MessageInput;
