
import { useState } from "react";
import toast from "react-hot-toast";
// import axiosInstance from "../utils/axios";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
    const { authUser, setAuthUser } = useAuthContext()
    const [loading, setLoading] = useState(false);

    const signup = async ({
        fullName,
        userName,
        password,
        confirmPassword,
        gender,
    }) => {
        const success = handleInputErrors(
            fullName,
            userName,
            password,
            confirmPassword,
            gender
        );
        if (!success) return;
        setLoading(true);
        try {
            const { data } = await axios.post("/api/auth/signup", {
                fullName: fullName,
                userName: userName,
                password: password,
                confirmPassword: confirmPassword,
                gender: gender,
            });

            if (data?.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data)
        } catch (error) {
            console.error(error);

            toast.error(error?.response?.data?.error);
        } finally {
            setLoading(false);
        }
    };

    return {
        signup,
        loading,
    };
};

export default useSignUp;
function handleInputErrors(fullName, username, password, confirmPassword, gender) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}