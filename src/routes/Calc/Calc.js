import React, { useState } from 'react';
import Button from "../../components/Button";
import Result from "../../components/Result";
import ClearButton from "../../components/ClearButton";
import style from "./Calc.module.css";

export const Calc = () => {
  const [input, setInput] = useState('');
  const regex = new RegExp(/[\W_]/);

  const addValue = val => {
    if (input === "0" || val === "0" && input === "") {
      setInput("0.")
    } else {
      setInput(input + val);
    }
  }

  const clearInput = () => {
    setInput("");
  }

  const count = val => {
    console.log(input)
    if (input.toString() !== "" && input.toString().slice(-1).match(regex) == null) {
      setInput(input + val);
    } else if (input !== "") {
      setInput(input.toString().slice(0, -1) + val);
    }
  }

  const evaluate = () => {
    if (input !== "" && input.toString().slice(-1).match(regex) == null) {
      setInput(eval(input))
    } else if (input !== "") {
      setInput(eval(input.toString().slice(0, -1)))
    }
  }

  const addDot = () => {
    if (input === "" || input === "0" && input.toString().slice(-1).match(regex) == null) {
      setInput("0.")
    } else if (input.toString().slice(-1).match(regex)) {
      setInput(input)
    }
    else {
      setInput(input + ".")
    }
  }

  return (
    <div className={style.calcContainer}>
      <div className={style.row}>
        <Result input={input} />
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
