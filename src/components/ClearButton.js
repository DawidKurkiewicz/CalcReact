import style from './Handler.module.css';

const ClearButton = (props) => {
    console.log(props)
    return (
            <div className={style.button}
                onClick={() => props.handleClear()}
            >
                {props.children}

            </div>
    )
}

export default ClearButton;