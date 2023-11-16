import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import axios from 'axios';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('token');

    if (accessToken) {
      axios.post('http:localhost:8000/api/auth', {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch user details');
          }
        })

        
        .then(data => {
          setIsLoggedIn(true);
          setUserUsername(data.username);
        })
        .catch(error => {
          // Handle errors here
          console.error(error);
        });
    }
  }, []);
  

  return isLoggedIn ? (
    // The Dashboard component (To be implemented later)
   
      <Dashboard userUsername={userUsername}
            setIsLoggedIn={setIsLoggedIn}/>
   
  ) : (
    // The Authentication component (To be implemented later)
    
      <Authentication setIsLoggedIn={setIsLoggedIn}
            setUserUsername={setUserUsername} />
   
  );
};

export default App;

