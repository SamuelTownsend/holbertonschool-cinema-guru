import React from 'react';
import './general.css';

const SearchBar = ({ title, setTitle }) => {
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <input
      type="text"
      value={title}
      onChange={handleInput}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
