import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../Hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojies";
import ChatSkeleton from "../skeleton/ChatSkeleton";
const Conversations = () => {
  const { conversations, loading } = useGetConversation();
  
  return (
    <div className="overflow-auto">
      {conversations.map((conversation, index) => {
        return (
          <Conversation
            key={conversation?._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            LastIdx={index === conversations?.length - 1}
            loading={loading}
          />
        );
      })}
      {loading && <ChatSkeleton />}
    </div>
  );
};

export default Conversations;
