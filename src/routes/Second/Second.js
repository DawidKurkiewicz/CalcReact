import { Link } from 'react-router-dom';
// import { useMainContext } from "modules"
import style from "./Second.module.css";
import {removeResult } from 'modules/Calc/Calc.redux';
import { connect } from 'react-redux';

 const SecondComponent = ({results,removeResult}) => {
  // const { results, removeResult } = useMainContext()
  return (
    <div className={style.container}>
      <Link to="/Calc">Calc</Link>
      <Link to="/Chat">Chat</Link>

      {results.map((result) => (
        <div key={Math.random()}className={style.listItem}>
          <p className={style.text}>{result}</p>
          <button className={style.button} onClick={() => removeResult(result)}>delete</button>
        </div>
      ))}
    </div>
  )
};
const mapStateToProps = (state) => ({
  results: state.calcReducer.results
})

const mapDispatchToProps = (dispatch) => ({
  removeResult: (result) => dispatch(removeResult(result))

})

export const Second = connect(mapStateToProps, mapDispatchToProps)(SecondComponent)
