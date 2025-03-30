import React from 'react';
import "./buttons.scss"

const Button = ({text, callback, size = "small", button_type = "primary", type= "button", disabled = false}) => {
    return (
        <button
            type={type}
            className={`button button-${button_type} button__${size}`}
            onClick={()=>callback()}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;