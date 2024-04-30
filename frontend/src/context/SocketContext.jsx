import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
const SocketContext = createContext();
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  const initlizeSocket = () => {
    if (authUser) {
      const socket = io("https://quickchat-ci0f.onrender.com", {
        query: {
          userId: authUser?._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (online) => {
        console.log(online);
        setOnlineUsers(online);
      });
      return () => socket?.close();
    } else {
      socket?.close();
      setSocket(null);
    }
  };
  useEffect(() => {
    initlizeSocket();
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers, setOnlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
