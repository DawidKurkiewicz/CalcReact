import style from "./Button.module.css";

export const Button = ({ children, handleClick }) => (
  <div
    className={style.button}
    onClick={() => handleClick(children)}
  >
    {children}
  </div>
)
