import React, { useContext, useState } from "react";
import { ChatContext } from "modules";
import s from "./MessageView.module.css";
import { BiSend } from "react-icons/bi";
import { Message} from "components";

export const MessageView = () => {
  const [inputValue, setInputValue] = useState("");
  const { users, userMessagesID } = useContext(ChatContext);
  const filterResult = users.filter(el => {
    return el.id === userMessagesID
  })
  let personName;
  console.log(filterResult.length)
  personName = filterResult[0]?.name
  console.log(personName)
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
    <div className={s.wrapper}>
      {filterResult.length === 0 ? <h1 className={s.header}>Please choose person</h1> : <h1 className={s.header}>{personName}</h1>}
      <div className={s.container}>
      {filterResult.length > 0 &&filterResult[0].conversation.map(el =>
            <Message
              content={el.content}
                time={el.timestamp}
                status={el.status}
                key={Math.random()}
            />
            )}
      </div>
      {filterResult.length === 0 ? null : <div className={s.inputWrapper}>
        <input
          onChange={inputValueHandler}
          value={inputValue}
          type="text"
          className={s.input} />
        <button onClick={() => addInputValueToUserArray()}><BiSend /></button></div>}
    </div>
  )
};
