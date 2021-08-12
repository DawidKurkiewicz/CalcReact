import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Calc, Second, Chat } from 'routes';
// import { MainProvider } from './Main.context';
import style from "./Main.module.css";
import { getStore } from './Main.redux';


export const Main = () => (
  <Provider store={getStore()}>
    <Router>
      <Route exact path="/">
        <Link className={style.link} to="/Calc">Calc</Link>
        <Link className={style.link} to="/Second">Second page</Link>
        <Link className={style.link} to="/Chat">Chat</Link>

      </Route>
      <Route exact path="/Calc" component={Calc} />
      <Route exact path="/Second" component={Second} />
      <Route exact path="/Chat" component={Chat} />

    </Router>
  </Provider>
);
