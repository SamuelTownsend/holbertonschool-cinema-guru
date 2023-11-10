import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFolder, faStar } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';
import axios from 'axios';
import Activity from '../Activity';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.get('http://localhost:8000/api/activity', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
        .then((response) => {
          setActivities(response.data);
        })
        .catch((error) => {
          console.error('Error fetching activities:', error);
        });
    }
  }, []);

  return (
    <div
      className={`Sidebar${small ? "_small" : ""}`}
      onMouseEnter={() => {
        setSmall(false);
        setShowActivities(true);
      }}
      onMouseLeave={() => {
        setSmall(true);
        setShowActivities(false);
      }}
    >
      <div className='Pages'>
        <div
          className={`Home${selected === 'home' ? '_active' : ''}`}
          onClick={() => {
            setPage('home');
            navigate('/');
          }}
        >
          <div className='pageBlock'>
            <div className='pageIcon'>
              <FontAwesomeIcon icon={faFolder} />
            </div>
            {!small ?
              <div className='pageDesc'>
                Home
              </div> : ''}
          </div>
        </div>
        <div
          className={`Favorites${selected === 'favorites' ? '_active' : ''}`}
          onClick={() => {
            setPage('favorites');
            navigate('/favorites');
          }}
        >
          <div className='pageBlock'>
            <div className='pageIcon'>
              <FontAwesomeIcon icon={faStar} />
            </div>
            {!small ?
              <div className='pageDesc'>
                Favorites
              </div> : ''}
          </div>
        </div>
        <div
          className={`WatchLater${selected === 'watchLater' ? '_active' : ''}`}
          onClick={() => {
            setPage('watchLater');
            navigate('/watchlater');
          }}
        >
          <div className='pageBlock'>
            <div className='pageIcon'>
              <FontAwesomeIcon icon={faClock} />
            </div>
            {!small ?
              <div className='pageDesc'>
                Watch Later
              </div> : ''}
          </div>
        </div>
      </div>
      {!small ?
        <div className='activitiesBlock'>
          <p className='latestHeader'>
            Latest Activities
          </p>
          <div className='activityList'>
            <ul className='activityItems'>
              {activities.map((activity, index) => (
                <Activity key={index} activityText={activity} />
              ))}
            </ul>
          </div>
        </div> : ''}
    </div>
  );
};

export default SideBar;
