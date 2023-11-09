import React, { useState, useEffect } from 'react';
import './App.css';
import localStorage from 'local-storage'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      fetch('/api/auth/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setIsLoggedIn(true);
        setUserUsername(data.username);
      })
      .catch(error => {
        // Handle errors here
      });
    }
  }, []);

  return isLoggedIn ? (
    // The Dashboard component (To be implemented later)
    <Dashboard />
  ) : (
    // The Authentication component (To be implemented later)
    <Authentication />
  );
};

export default App;

