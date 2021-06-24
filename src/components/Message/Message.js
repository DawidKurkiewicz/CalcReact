import s from "./Message.module.css";


export const Message = ({ content, time, status }) => (
      <div className={[status === 'received' ? s.received : s.send, s.message].join(' ')}>
        <p >{content}</p>
        <p className={s.timeStampStyle}>{time}</p>
      </div>
    );