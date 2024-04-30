import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const login = async (userName, password) => {
        const success = handleInputErrors(

            userName,
            password,

        );
        if (!success) return;
        setLoading(true)

        try {
            const { data } = await axios.post("/api/auth/login", { userName, password });
           
            if (data?.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    }
    return { login, loading }
}

export default useLogin

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }
    return true;
}