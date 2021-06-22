import React, { createContext, useState } from "react";
import {arr} from "./Chat.const.js";
export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState(arr);
  const [userMessagesID, showUserMessages] = useState(null);

  return (
    <ChatContext.Provider
      value={{
        users,
        setUsers,
        userMessagesID,
        showUserMessages
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
