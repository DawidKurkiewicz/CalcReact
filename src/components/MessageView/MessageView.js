import React, { useContext, useState } from "react";
import { ChatContext } from "modules";
import styles from "./MessageView.module.css";
import { BiSend } from "react-icons/bi";
import { Message} from "components";

export const MessageView = () => {
  const [inputValue, setInputValue] = useState("");

  const { container, header, wrapper, inputWrapper, input } = styles;
  const { users, userMessagesID } = useContext(ChatContext);
  const filterResult = users.filter(el => {
    return el.id === userMessagesID
  })
  let mess;
  let personName;
  if (filterResult.length > 0) {
    personName = filterResult[0].name
    mess = filterResult[0].conversation.map(el => {
      return <Message content={el.content} time={el.timestamp} status={el.status} key={Math.random()} />
    })
  }
  const getDate = () => {

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    let minutes = today.getMinutes()
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    const time = today.getHours() + "." + minutes

    const day = dd + '.' + mm + '.' + yyyy + '(' + time + ')'
    return day
  }
  const addInputValueToUserArray = () => {
    if (!inputValue) return;
    console.log(inputValue)
    filterResult[0].conversation.push({
      status: 'send',
      timestamp: getDate(),
      content: inputValue
    })
    console.log(filterResult)
    setInputValue('')
  }
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={wrapper}>
      {filterResult.length === 0 ? <h1 className={header}>Please choose person</h1> : <h1 className={header}>{personName}</h1>}
      <div className={container}>
        {filterResult.length === 0 ? null : mess}
      </div>
      {filterResult.length === 0 ? null : <div className={inputWrapper}>
        <input
          onChange={inputValueHandler}
          value={inputValue}
          type="text"
          className={input} />
        <button onClick={() => addInputValueToUserArray()}><BiSend /></button></div>}
    </div>
  )
};
