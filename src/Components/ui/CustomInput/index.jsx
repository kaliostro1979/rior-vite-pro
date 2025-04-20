import React from 'react';

import './styles.scss';

export const CustomInput = ({
        id,
        type,
        disabled,
        placeholder,
        name,
        label,
        errorMessage,
        value,
        onChange,
        readonly,
        customClass
    }) => {
    return (
        <div className={`input-container ${customClass}`}>
            <label htmlFor={id} className={"text-gray-label text-sm leading-none"}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                readOnly={readonly}
                onChange={onChange}
            />
            <small className={'errorMessage'}>{errorMessage}</small>
        </div>
    );
};
