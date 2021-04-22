import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Calc, Second } from 'routes';
import { MainProvider } from './Main.context';
import style from "./Main.module.css";

export const Main = () => (
  <MainProvider>
    <Router>
      <Route exact path="/">
        <Link className={style.link} to="/Calc">Calc</Link>
        <Link className={style.link} to="/Second">Second page</Link>
      </Route>
      <Route exact path="/Calc" component={Calc} />
      <Route exact path="/Second" component={Second} />
    </Router>
  </MainProvider>
);
