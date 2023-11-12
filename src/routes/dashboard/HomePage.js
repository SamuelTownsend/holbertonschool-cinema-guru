import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import Tag from '../../components/movies/Tag';
import './dashboard.css';

const HomePage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  console.log('Movies:', movies);
 

  useEffect(() => {
    const loadMovies = (page) => {
      fetch('http://localhost:8000/api/titles/advancedsearch', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json',
    // Omit the following headers for a GET request unless you are sending data in the request body
    // 'Content-Type': 'application/json',
    // 'Content-Length': xy,
  },
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });

    };
    loadMovies(page);
  }, [ accessToken, minYear, maxYear, genres, sort, title, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        genres={genres}
        setGenres={setGenres}
        sort={sort}
        setSort={setSort}
        title={title}
        setTitle={setTitle}
      />
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Button onClick={handleLoadMore}>Load More..</Button>
    </div>
  );
};

export default HomePage;
