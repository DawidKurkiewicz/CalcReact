import style from './Handler.module.css';

const Result = (props) => {
    return (
            <div className={style.button}>
                {props.inputValue}
            </div>
    )
}

export default Result;