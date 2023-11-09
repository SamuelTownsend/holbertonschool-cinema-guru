import React from 'react';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="select-wrapper">
      <label>{label}</label>
      <select className={className} value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
