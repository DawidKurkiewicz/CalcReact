import { Link } from 'react-router-dom';
import { useMainContext } from "modules"
import style from "./Second.module.css";

export const Second = () => {
  const { results, removeResult } = useMainContext()
  return (
    <div className={style.container}>
      <Link to="/Calc">Calc</Link>
     { results.map ((result) => (
       <div className={style.listItem}>
         <p className = {style.text}>{result}</p>
         <button className={style.button} onClick={() => removeResult(result)}>delete</button>
         </div>
     ))}
     </div>
  )
};
