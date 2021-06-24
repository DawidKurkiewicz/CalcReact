import s from "./Chat.module.css";
import { List } from "components/List";
import { MessageView } from "components/MessageView";
import { ChatProvider } from "modules";
import { Link } from 'react-router-dom';

export const Chat = () => (
  <ChatProvider>
    <div className={s.linksContainer}>
      <Link to="/Calc">Calc</Link>
      <Link to="/Second">Results</Link>
    </div>
    <div className={s.list}>
      <MessageView />
      <List />
    </div>
  </ChatProvider>
)