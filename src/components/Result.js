import style from './Handler.module.css';

const Result = (props) => {
    return (
            <div className={style.button}>
                {props.input}
            </div>
    )
}

export default Result;