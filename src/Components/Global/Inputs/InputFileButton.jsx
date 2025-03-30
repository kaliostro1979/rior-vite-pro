import React from 'react';
import PlusIcon from "../Icons/PlusIcon";

const InputFileButton = ({id, name, placeholder}) => {
    return (
        <div className={"file-input__container"}>
            <label htmlFor={id} className={"file-input__container-label"}>
                <span className={"file-input__container-label-inner"}>
                    <span className={"file-input__container-label-icon"}>
                        <PlusIcon/>
                    </span>
                    <span className={"file-input__container-label-text"}>Add Plan</span>
                </span>
                <input id={id} type={"file"} name={name} placeholder={placeholder}/>
            </label>
        </div>
    );
};

export default InputFileButton;