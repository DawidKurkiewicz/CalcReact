//1
// import React, { useState } from 'react'
import React from 'react';

import { Button, Result, ClearButton } from "components";
import style from "./Calc.module.css";
// import { useMainContext } from 'modules';
import { Link } from 'react-router-dom';

//2
// import { addResult, setIsLoading} from 'modules/Calc/Calc.redux';
import {setIsLoading,addRValue, clearRInput, countR, evaluateR, addDotR} from 'modules/Calc/Calc.redux';

import { connect } from 'react-redux';

//3
//   const CalcComponent = ({addResult,setIsLoading}) => { 
// const [inputValue, setInputValue] = useState('');
//   const regex = new RegExp(/[\W_]/);

//   // const { addResult } = useMainContext();

//   const addValue = val => {
//     console.log(val)
//     if (inputValue === "0" || (val === "0" && inputValue === "")) {
//       setInputValue("0.")
//     } else {
//       setInputValue(inputValue + val);
//     }
//   }

//   const clearInput = () => {
//     setInputValue("");
//   }

//   const count = val => {
//     if (inputValue.toString() !== "" && inputValue.toString().slice(-1).match(regex) == null) {
//       setInputValue(inputValue + val);
//     } else if (inputValue !== "") {
//       setInputValue(inputValue.toString().slice(0, -1) + val);
//     }
//   }

//   const evaluate = () => {
//     if (inputValue !== "" && inputValue.toString().slice(-1).match(regex) == null) {
//       // eslint-disable-next-line
//      const result = eval(inputValue)
//       addResult(result)
//       setInputValue(result)
//     } else if (inputValue !== "") {
//       // eslint-disable-next-line
//       const result = eval(inputValue.toString().slice(0, -1))
//       addResult(result)
//       setInputValue(result)
//     }
//   }

//   const addDot = () => {
//     if (inputValue === "" || (inputValue === "0" && inputValue.toString().slice(-1).match(regex) == null)) {
//       setInputValue("0.")
//     } else if (inputValue.toString().slice(-1).match(regex)) {
//       setInputValue(inputValue)
//     }
//     else {
//       setInputValue(inputValue + ".")
//     }
//   }
//   return (
//     <div className={style.calcContainer}>
//             <Link to="/Second">Results</Link>
//             <button onClick={() => setIsLoading()}>set calc is loading</button>
//             <Link to="/Chat">Chat</Link>

//       <div className={style.row}>
//         <Result inputValue={inputValue} />
//         <ClearButton handleClear={clearInput}>Clear</ClearButton>
//       </div>
//       <div className={style.numberContainer}>
//         <div className={style.row}>

//           <Button handleClick={addValue}>7</Button>
//           <Button handleClick={addValue}>8</Button>
//           <Button handleClick={addValue}>9</Button>
//           <Button handleClick={count}>/</Button>
//         </div>
//         <div className={style.row}>
//           <Button handleClick={addValue}>4</Button>
//           <Button handleClick={addValue}>5</Button>
//           <Button handleClick={addValue}>6</Button>
//           <Button handleClick={count}>*</Button>
//         </div>
//         <div className={style.row}>
//           <Button handleClick={addValue}>1</Button>
//           <Button handleClick={addValue}>2</Button>
//           <Button handleClick={addValue}>3</Button>
//           <Button handleClick={count}>+</Button>
//         </div>
//         <div className={style.row}>
//           <Button handleClick={addDot}>.</Button>
//           <Button handleClick={addValue}>0</Button>
//           <Button handleClick={evaluate}>=</Button>
//           <Button handleClick={count}>-</Button>
//         </div>
//       </div>
//     </div>
//   );
const CalcComponent = ({inputValue,setIsLoading ,addRValue, clearRInput, countR, evaluateR, addDotR }) => {
  return (
    <div className={style.calcContainer}>
            <Link to="/Second">Results</Link>
            <button onClick={() => setIsLoading()}>set calc is loading</button>
            <Link to="/Chat">Chat</Link>

      <div className={style.row}>
        <Result inputValue={inputValue} />
        <ClearButton handleClear={clearRInput}>Clear</ClearButton>
      </div>
      <div className={style.numberContainer}>
        <div className={style.row}>

          <Button handleClick={addRValue}>7</Button>
          <Button handleClick={addRValue}>8</Button>
          <Button handleClick={addRValue}>9</Button>
          <Button handleClick={countR}>/</Button>
        </div>
        <div className={style.row}>
          <Button handleClick={addRValue}>4</Button>
          <Button handleClick={addRValue}>5</Button>
          <Button handleClick={addRValue}>6</Button>
          <Button handleClick={countR}>*</Button>
        </div>
        <div className={style.row}>
          <Button handleClick={addRValue}>1</Button>
          <Button handleClick={addRValue}>2</Button>
          <Button handleClick={addRValue}>3</Button>
          <Button handleClick={countR}>+</Button>
        </div>
        <div className={style.row}>
          <Button handleClick={addDotR}>.</Button>
          <Button handleClick={addRValue}>0</Button>
          <Button handleClick={evaluateR}>=</Button>
          <Button handleClick={countR}>-</Button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.calcReducer.isLoading,
  results: state.calcReducer.results,
  //4
  inputValue: state.calcReducer.inputValue
})

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: () => dispatch(setIsLoading()),
  //5
  // addResult: (result) => dispatch(addResult(result)),
  addRValue: (val) => dispatch(addRValue(val)),
  clearRInput: () => dispatch(clearRInput()),
  countR:(val)=>dispatch(countR(val)),
  evaluateR:()=> dispatch(evaluateR()),
  addDotR:()=> dispatch(addDotR())

})

export const Calc = connect(mapStateToProps, mapDispatchToProps)(CalcComponent)
