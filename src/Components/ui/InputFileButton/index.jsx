import React from 'react';

import AddIcon from '@/assets/icons/add.svg';

export const InputFileButton = ({ id, name, placeholder }) => {
  return (
    <div className={'file-input__container'}>
      <label htmlFor={id} className={'file-input__container-label'}>
        <span className={'file-input__container-label-inner'}>
          <span className={'file-input__container-label-icon'}>
            <img src={AddIcon} alt="Add" />
          </span>
          <span className={'file-input__container-label-text'}>Add Plan</span>
        </span>
        <input id={id} type={'file'} name={name} placeholder={placeholder} />
      </label>
    </div>
  );
};
