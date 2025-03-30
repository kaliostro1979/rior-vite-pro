import React from 'react';
import "./Inputs.scss"

const InputSimple = ({ id, type, disabled, placeholder, name, label, errorMessage }) => {
    return (
        <div className={"input-container"}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={name} placeholder={placeholder} disabled={disabled}/>
            <small className={"errorMessage"}>{errorMessage}</small>
        </div>
    );
};

export default InputSimple;