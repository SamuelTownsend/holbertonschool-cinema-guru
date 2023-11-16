import React from 'react';
import Tag from './Tag';
import './movies.css'; // Importing the CSS file

const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle
}) => {
  const availableGenres = [
    'action', 'drama', 'comedy', 'biography', 'romance', 'thriller',
    'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'
  ];

  return (
    <div className="filter-container">
      <div className="search-bar">
        <input className='input-box'
          type="text"
          placeholder="Search by title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="year-filter">
        <input className='input-box'
          type="number"
          placeholder="Min Year"
          value={minYear}
          onChange={(e) => setMinYear(parseInt(e.target.value))}
        />
        <input className='input-box'
          type="number"
          placeholder="Max Year"
          value={maxYear}
          onChange={(e) => setMaxYear(parseInt(e.target.value))}
        />
        <select className='input-box'
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="highestrated">Highest Rated</option>
        <option value="lowestrated">Lowest Rated</option>
      </select>
      </div>
      
      <div className="genres-list">
        {availableGenres.map((genre, index) => (
          <Tag
            key={index}
            genre={genre}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;