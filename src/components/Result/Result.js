import style from './Result.module.css';

export const Result = ({ inputValue}) => (
    <div className={style.button}>
        {inputValue}
    </div>
)
