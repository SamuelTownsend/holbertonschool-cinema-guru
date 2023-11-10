import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchWatchLaterMovies = () => {
      fetch('http://localhost:8000/api/titles/watchlater')
        .then(response => response.json())
        .then(data => {
          setMovies(data); // Set the movies state to the data from the response
        })
        .catch(error => {
          console.error('Error fetching watch later movies:', error);
        });
    };

    fetchWatchLaterMovies(); // Call the function to fetch watch later movies on component mount
  }, []);

  return (
    <div>
      <h1>Movies you want to watch later</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default WatchLater;
