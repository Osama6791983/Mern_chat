import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";


const Message = ({message}) => {
  const {authUser} = useAuthContext();
const {selectedConversations} =   useConversation();

const fromMe = message?.senderId=== authUser._id
const chatClassName = fromMe ? "chat-end" : "chat-start";
const profilePicture = fromMe ? authUser.profilePic : selectedConversations?.profilePic;
const bubbleBg = fromMe ? "bg-blue-500":""
const username = fromMe ? authUser.userName : selectedConversations?.userName
const formattedTime = extractTime(message?.createdAt);
const shakeClass = message.shouldShake ? "shake":"";
  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={profilePicture}
            />
          </div>
        </div>
        <div className="chat-header flex gap-5 text-white">
          {username}
         
        </div>
        <div className={`chat-bubble ${bubbleBg} ${shakeClass}`}>{message?.message}</div>
        <div className="chat-footer opacity-50 text-white"> <time className="text-xs opacity-50 text-white">{formattedTime}</time></div>
        
      </div>
     
    </>
  );
};

export default Message;
