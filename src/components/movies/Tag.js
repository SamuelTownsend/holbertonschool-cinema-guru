import React, { useState } from 'react';
import './movies.css'; // Importing the CSS file

const Tag = ({ genre, filter, genres, setGenres }) => {
  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      const updatedGenres = genres.filter((g) => g !== genre);
      setGenres(updatedGenres);
      setSelected(false);
    } else {
      const updatedGenres = [...genres, genre];
      setGenres(updatedGenres);
      setSelected(true);
    }
  };

  return (
    <li
      onClick={handleTag}
      className={selected ? 'tag-selected' : 'tag'}
    >
      {genre}
    </li>
  );
};

export default Tag;
