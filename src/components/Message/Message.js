import styles from "./Message.module.css";


export const Message = ({ content, time, status }) => {
    const { send, received, timeStampStyle, message } = styles;
    return (
      <div className={[status === 'received' ? received : send, message].join(' ')}>
        <p >{content}</p>
        <p className={timeStampStyle}>{time}</p>
      </div>
    );
  };