import style from './ClearButton.module.css';

export const ClearButton = ({ handleClear, children }) => (
    <div className={style.button}
        onClick={() => handleClear()}
    >
        {children}
    </div>
)
