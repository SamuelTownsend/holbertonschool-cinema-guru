import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import './dashboard.css';

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = () => {
      fetch('http://localhost:8000/api/titles/favorite')
        .then(response => response.json())
        .then(data => {
          setMovies(data); // Set the movies state to the data from the response
        })
        .catch(error => {
          console.error('Error fetching favorite movies:', error);
        });
    };

    fetchFavoriteMovies(); // Call the function to fetch favorite movies on component mount
  }, []);

  return (
    <div>
      <h1>Movies you like</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Favorites;
