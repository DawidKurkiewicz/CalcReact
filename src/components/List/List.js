import React, { useContext } from "react";
import styles from "./List.module.css";
import { ChatContext } from "modules";
import {User} from "components";


export const List = () => {
  const { container } = styles;
  const { users } = useContext(ChatContext);
  const usersList = users.map((user) => (
    <User userID={user.id} key={user.id} name={user.name} conversation={user.conversation} />
  ));

  return <div className={container}>{usersList}</div>;
};