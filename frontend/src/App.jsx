import React from "react";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signup/Signup";
import Home from "./Pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";
const App = () => {
  const {authUser} = useAuthContext()
  
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route path="/login" element={authUser? <Navigate to={"/"}/>:<Login/>} />
        <Route path="/signup" element={authUser? <Navigate to={"/"}/>:<SignUp/>} />
        <Route path="/" element={authUser? <Home/>:<Navigate to={"/login"}/> }/>
        
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
