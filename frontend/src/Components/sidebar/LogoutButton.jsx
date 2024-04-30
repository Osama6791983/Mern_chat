import React from "react";
import { BiLogOut } from "react-icons/bi";
import userLogout from "../../Hooks/userLogout";
const LogoutButton = () => {
    const {loading,logout} = userLogout()
  return (
    <div className="mt-auto p-4">
     
      {
        !loading?(<> <BiLogOut onClick={()=>{logout()}} className="w-6 h-6 text-white cursor-pointer" /></>):(<><span className="loading loading-spinner"></span></>)
      }
    </div>
  );
};

export default LogoutButton;
