import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
import axios from 'axios';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const {messages,setMessages,selectedConversations} = useConversation()
 
  const getMessages = async () => {
    setLoading(true)
    try {
        const {data} = await axios.get(`/api/messages/${selectedConversations?._id}`)
        if (data?.error) {
            throw new Error(data.error)
        }
        setMessages(data)
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }finally{
        setLoading(false)
    }
  }
  useEffect(() => {
    
 if (selectedConversations?._id) {
    getMessages()
 }
    
  }, [selectedConversations?._id,setMessages])
  
  return {messages,loading}
}

export default useGetMessages