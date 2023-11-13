import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios'; // Import Axios
import './dashboard.css';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);
  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchWatchLaterMovies = async () => {
      axios.get('http://localhost:8000/api/titles/watchlater', {headers: {
        authorization: `Bearer ${accessToken}`
      }})


        .then(response => {
        
          setMovies(response.data); // Set the movies state to the data from the response
        })
        .catch(error => {
          console.error('Error fetching favorite movies:', error);
        });
    };

    fetchWatchLaterMovies(); // Call the function to fetch watch later movies on component mount
  }, [accessToken]);

  return (
    <div>
      <h1 className='container'>Movies you want to watch later</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default WatchLater;

