import { connect } from 'react-redux';
import s from "./Chat.module.css";
import { List } from "components/List";
import { MessageView } from "components/MessageView";
import { ChatProvider } from "modules";
import { Link } from 'react-router-dom';
import { setIsLoading } from 'modules/Chat/Chat.redux';

const ChatCompontent = ({ isLoading, setIsLoading }) => (
  <ChatProvider>
    <div className={s.linksContainer}>
      <Link to="/Calc">Calc</Link>
      <button onClick={() => setIsLoading()}>set chat is loading</button>
      <Link to="/Second">Results</Link>
    </div>
    <div className={s.list}>
      <MessageView />
      <List />
    </div>
  </ChatProvider>
)

const mapStateToProps = (state) => ({
  isLoading: state.chatReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: () => dispatch(setIsLoading())
})

export const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatCompontent)
