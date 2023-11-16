import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';
import './dashboard.css';

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchFavoriteMovies = () => {
      axios.get('http://localhost:8000/api/titles/favorite', {headers: {
        authorization: `Bearer ${accessToken}`
      }})


        .then(response => {
        
          setMovies(response.data); // Set the movies state to the data from the response
        })
        .catch(error => {
          console.error('Error fetching favorite movies:', error);
        });
    };

    fetchFavoriteMovies(); // Call the function to fetch favorite movies on component mount
  }, [accessToken]);

  return (
    <>
    <div>
      <h1 className='container'>Movies you like</h1>
      </div>

      <div className='watchLater-Favorites'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      </>
    
  );
};

export default Favorites;
