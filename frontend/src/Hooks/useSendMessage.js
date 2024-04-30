import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import axios from 'axios';
import { toast } from 'react-hot-toast';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { selectedConversations, messages, setMessages } = useConversation();
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const { data } = await axios.post(`/api/messages/send/${selectedConversations?._id}`, {
                message,
            })
            if (data?.error) {
                throw new Error(data?.error)
            }
            setMessages([...messages, data?.newMessage])
            setLoading(false);
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }finally{
            setLoading(false);
        }
    }
return {sendMessage,loading}

}

export default useSendMessage