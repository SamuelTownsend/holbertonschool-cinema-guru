import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import './movies.css';
import axios from 'axios'; // Import Axios

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const accessToken = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/titles/favorite', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const favoriteMovies = response.data;
        const foundFavorite = favoriteMovies.some((favorite) => favorite.id === movie.id);
        setIsFavorite(foundFavorite);
      } catch (error) {
        console.error('Error fetching user favorites:', error);
      }
    };

    const fetchUserWatchLater = async () => {
      try {
        const accessToken = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/titles/watchlater', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const watchLaterMovies = response.data;
        const foundWatchLater = watchLaterMovies.some((watchLater) => watchLater.id === movie.id);
        setIsWatchLater(foundWatchLater);
      } catch (error) {
        console.error('Error fetching user watch later list:', error);
      }
    };

    fetchUserFavorites();
    fetchUserWatchLater();
  }, [movie]);

  const handleClick = async (type) => {
    const endpoint = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;
    const accessToken = localStorage.getItem('token');
    const method = type === 'favorite' ? (isFavorite ? 'DELETE' : 'POST') : (isWatchLater ? 'DELETE' : 'POST');

    try {
      await axios({
        method,
        url: endpoint,
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(response => {console.log(response)})

      if (type === 'favorite') {
        setIsFavorite(!isFavorite);
      } else if (type === 'watchlater') {
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Error ${method === 'DELETE' ? 'removing' : 'adding to'} ${type}:`, error);
    }
  };

  return (
    <li className='movie-card-container'>
      <div className='movie-content'>
      <div className="icon-container">
          <FontAwesomeIcon
            icon={faHeart}
            className={isFavorite ? 'active' : ''}
            onClick={() => handleClick('favorite')}
          />
          <FontAwesomeIcon
            icon={faClock}
            className={isWatchLater ? 'active' : ''}
            onClick={() => handleClick('watchlater')}
          />
          
        </div>
        
        <h3>{movie.title}</h3>
        
        <div className='black-box-container'>
          <p>{movie.synopsis}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
                </div>
                
      </div>
    </li>
  );
};

export default MovieCard;

