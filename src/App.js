import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setIsLoggedIn(true);
        setUserUsername(data.username); // Assuming the username comes from the response
      })
      .catch(error => {
        // Handle error, perhaps redirect or show a message to the user
        console.error("Error while authenticating:", error);
      });
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard userUsername={userUsername} /> : <Authentication />}
    </div>
  );
};

export default App;
