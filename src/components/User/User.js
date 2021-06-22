import React, { useContext } from "react";
import styles from "./User.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { ChatContext } from "modules";


export const User = ({ name, userID}) => {
    const { user } = styles;
    const { showUserMessages } = useContext(ChatContext);
    return (
      <div onClick={() => showUserMessages(userID)} className={user} id={userID}>
        <BsFillPersonFill />
        <h4>{name}</h4>
      </div>
    );
  };