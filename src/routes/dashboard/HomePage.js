import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import axios from 'axios';

import './dashboard.css';

const HomePage = () => {
  const accessToken = localStorage.getItem('token');
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  console.log('Movies:', movies);
 

  useEffect(() => {
    console.log(accessToken)
    const loadMovies = (page) => {
      axios.get('http://localhost:8000/api/titles/advancedsearch', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
        params: {
          minYear,
          maxYear,
          genres,
          sort,
          title,
          page,
        },
      })
        .then(response => {
          // Use response.data directly, no need for response.json()
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
    };
  
    loadMovies(page);
  }, [accessToken, minYear, maxYear, genres, sort, title, page]);
  

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className='movie-container'>
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
       {Array.isArray(movies.titles) && movies.titles.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Button onClick={handleLoadMore}>Load More..</Button>
    </div>
  );
};


export default HomePage;
