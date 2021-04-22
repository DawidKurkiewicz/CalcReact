import { Link } from 'react-router-dom';
import { useMainContext } from "modules"

export const Second = () => {
  const { results, removeRe } = useMainContext()
  return (
    <>
      <Link to="/Calc">Calc</Link>
     { results.map ((result) => (

       <div>{result}</div>
     ))}
     </>
  )
};
