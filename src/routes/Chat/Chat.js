// import React, { useContext, useState } from "react";
import styles from "./Chat.module.css";
import { List } from "components/List";
import { MessageView } from "components/MessageView";
import { ChatProvider } from "modules";
import { Link } from 'react-router-dom';

const { list, linksContainer } = styles;

export const Chat = () => {
  return (
    <ChatProvider>
      <div className={linksContainer}>
        <Link to="/Calc">Calc</Link>
        <Link to="/Second">Results</Link>
      </div>
      <div className={list}>
        <MessageView />
        <List />
      </div>
    </ChatProvider>

  );
}