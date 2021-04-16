import style from "./Button.module.css";

const Button = ({ children, handleClick }) => {
  return (
    <div
      className={style.button}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  )
}

export default Button;
