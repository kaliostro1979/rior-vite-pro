import React from 'react';

import './styles.scss';

export const CustomButton = ({
  text,
  callback,
  size = 'small',
  button_type = 'primary',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`button button-${button_type} button__${size}`}
      onClick={() => (callback ? callback() : null)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
