import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        type={type}
        className={className}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
      {icon && <FontAwesomeIcon icon={icon} />}
    </div>
  );
};

export default Input;
