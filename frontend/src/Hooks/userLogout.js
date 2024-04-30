import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const userLogout = () => {
 const [loading, setLoading] = useState(false)
 const {setAuthUser} = useAuthContext()
 const logout = async()=>{
    setLoading(true);
    try {
        const {data} = await axios.post("/api/auth/logout");
        setLoading(false)
        if(data?.error){
            throw new Error(data.error)
        }
        localStorage.removeItem("chat-user");
        setAuthUser(null)
    } catch (error) {
        toast.error(error.message)
    }finally{
       setLoading(false)
    }
 }
 return {loading,logout}
}

export default userLogout