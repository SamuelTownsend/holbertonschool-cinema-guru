import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import './movies.css'; // Importing the CSS file

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchUserFavorites = () => {
      fetch('http://localhost:8000/api/titles/favorite')
        .then(response => response.json())
        .then(data => {
          const favoriteMovies = data;
          const foundFavorite = favoriteMovies.some(favorite => favorite.id === movie.id);
          setIsFavorite(foundFavorite);
        })
        .catch(error => {
          console.error('Error fetching user favorites:', error);
        });
    };

    const fetchUserWatchLater = () => {
      fetch('http://localhost:8000/api/titles/watchlater')
        .then(response => response.json())
        .then(data => {
          const watchLaterMovies = data;
          const foundWatchLater = watchLaterMovies.some(watchLater => watchLater.id === movie.id);
          setIsWatchLater(foundWatchLater);
        })
        .catch(error => {
          console.error('Error fetching user watch later list:', error);
        });
    };

    fetchUserFavorites();
    fetchUserWatchLater();
  }, [movie]);

  const handleClick = (type) => {
    const endpoint = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;

    const method = type === 'favorite' ? (isFavorite ? 'DELETE' : 'POST') : (isWatchLater ? 'DELETE' : 'POST');

    fetch(endpoint, { method })
      .then(response => {
        if (type === 'favorite') {
          setIsFavorite(!isFavorite);
        } else if (type === 'watchlater') {
          setIsWatchLater(!isWatchLater);
        }
      })
      .catch(error => {
        console.error(`Error ${method === 'DELETE' ? 'removing' : 'adding to'} ${type}:`, error);
      });
  };

  return (
    <li>
      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
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
    </li>
  );
};

export default MovieCard;
