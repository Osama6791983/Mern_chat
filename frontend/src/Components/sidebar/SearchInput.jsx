import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversation from "../../Hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";

const SearchInput = () => {
  const { conversations } = useGetConversation();

  const { setSelectedConversations, selectedConversations } = useConversation();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search must be at least 3 characters long ");
    }
    const conversation = conversations.find((c) => {
      return c.fullName.toLowerCase().includes(search.toLowerCase());
    });

    if (conversation) {
      setSelectedConversations(conversation);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search here..."
        className="w-full input rounded-full focus:outline-none focus:border-2 h-10 border-2  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle   rounded-full focus:outline-none border-none hover:text-black  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white"
      >
        <IoSearchSharp className="w-8 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
