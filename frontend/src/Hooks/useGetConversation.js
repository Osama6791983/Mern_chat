import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversation = () => {
    const [conversations, setConversation] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      const getConversation = async()=>{
        setLoading(true);
        try {
            const {data} = await axios.post("/api/user")

            if (data?.error) {
                throw new Error(data.error);
            }
            setConversation(data)
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
      }

      getConversation()
    }, [])
    
 return {conversations,loading}
}

export default useGetConversation