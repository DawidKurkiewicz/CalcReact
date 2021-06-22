import React, { useContext } from "react";
import styles from "./List.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { ChatContext } from "modules";

const User = ({ name, userID, conversation }) => {
  const { user } = styles;
  const { showUserMessages } = useContext(ChatContext);

  return (
    <div onClick={() => showUserMessages(userID)} className={user} id={userID}>
      <BsFillPersonFill />
      <h4>{name}</h4>
    </div>
  );
};

export const List = () => {
  const { container } = styles;
  const { users } = useContext(ChatContext);
  const usersList = users.map((user) => (
    <User userID={user.id} key={user.id} name={user.name} conversation={user.conversation} />
  ));

  return <div className={container}>{usersList}</div>;
};