import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Login from './Login'; // Importing the Login component
import Register from './Register'; // Importing the Register component
import Button from '../../components/general/Button';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [_switchBoolean, setSwitchBoolean] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setSwitchBoolean(true);
  };

  const handleSignUp = () => {
    setSwitchBoolean(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (_switchBoolean) {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/login', {
          username: username,
          password: password,
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        setUserUsername(username);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Login failed:', error);
        // Handle login error, show a message, etc.
      }
    } else {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/register', {
          username: username,
          password: password,
        });
        const token = response.data.token;
        localStorage.setItem('token', token);
        setUserUsername(username);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle registration error, show a message, etc.
      }
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div classname="buttons-box">
          {/* Existing buttons for Sign In and Sign Up */}
          <div className='red-box' ><Button label="Sign In" onClick={handleSignIn} />
          
          </div>
          <div className='red-box'><Button label="Sign Up" onClick={handleSignUp} /></div>
        </div>
        {_switchBoolean ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </form>
    </div>
  );
};

export default Authentication;

