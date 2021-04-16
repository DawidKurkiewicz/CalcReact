import React, { useState } from 'react';
import Button from "../../components/Button";
import Result from "../../components/Result";
import ClearButton from "../../components/ClearButton";
import style from "./Calc.module.css";

export const Calc = () => {
  const [inputValue, setInputValue] = useState('');
  const regex = new RegExp(/[\W_]/);

  const addValue = val => {
    if (inputValue === "0" || val === "0" && inputValue === "") {
      setInputValue("0.")
    } else {
      setInputValue(inputValue + val);
    }
  }

  const clearInput = () => {
    setInputValue("");
  }

  const count = val => {
    if (inputValue.toString() !== "" && inputValue.toString().slice(-1).match(regex) == null) {
      setInputValue(inputValue + val);
    } else if (inputValue !== "") {
      setInputValue(inputValue.toString().slice(0, -1) + val);
    }
  }

  const evaluate = () => {
    if (inputValue !== "" && inputValue.toString().slice(-1).match(regex) == null) {
      setInputValue(eval(inputValue))
    } else if (inputValue !== "") {
      setInputValue(eval(inputValue.toString().slice(0, -1)))
    }
  }

  const addDot = () => {
    if (inputValue === "" || inputValue === "0" && inputValue.toString().slice(-1).match(regex) == null) {
      setInputValue("0.")
    } else if (inputValue.toString().slice(-1).match(regex)) {
      setInputValue(inputValue)
    }
    else {
      setInputValue(inputValue + ".")
    }
  }

  return (
    <div className={style.calcContainer}>
      <div className={style.row}>
        <Result input={inputValue} />
        <ClearButton handleClear={clearInput}>Clear</ClearButton>
      </div>
      <div className={style.numberContainer}>
        <div className={style.row}>
          <Button handleClick={addValue}>7</Button>
          <Button handleClick={addValue}>8</Button>
          <Button handleClick={addValue}>9</Button>
          <Button handleClick={count}>/</Button>
        </div>
        <div className={style.row}>
          <Button handleClick={addValue}>4</Button>
          <Button handleClick={addValue}>5</Button>
          <Button handleClick={addValue}>6</Button>
          <Button handleClick={count}>*</Button>
        </div>
        <div className={style.row}>
          <Button handleClick={addValue}>1</Button>
          <Button handleClick={addValue}>2</Button>
          <Button handleClick={addValue}>3</Button>
          <Button handleClick={count}>+</Button>
        </div>
        <div className={style.row}>
          <Button handleClick={addDot}>.</Button>
          <Button handleClick={addValue}>0</Button>
          <Button handleClick={evaluate}>=</Button>
          <Button handleClick={count}>-</Button>
        </div>
      </div>
    </div>
  );
}
