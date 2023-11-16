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
    if (!username.trim() || !password.trim()) {
      // Display an error message, prevent further execution
      console.error('Username and password are required');
      return;
    }
    if (_switchBoolean) {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/login', {
          
          username: username,
          password: password,
        }
        
        );
        const token = response.data.accessToken;
        localStorage.setItem('token', token);
        console.log(`${response.data.accessToken}`)
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
        }
        
        );
        const token = response.data.accessToken;

       

        localStorage.setItem('token', token);
        console.log(`${response.data.accessToken}`)
        setUserUsername(username);
        
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle registration error, show a message, etc.
      }
    }
  };

  return (
    <div className='Authentication'>
      <form className='SignInUpForm' onSubmit={handleSubmit}>
        <div className="SignInUpDiv">
          {/* Existing buttons for Sign In and Sign Up */}
          <Button className={!_switchBoolean ? "active" : "inactive"} label="Sign In" onClick={handleSignIn} />
          
          
          <Button className={!_switchBoolean ? "active" : "inactive"} label="Sign Up" onClick={handleSignUp} />
        </div>
        <div className='LoginRegisterForm'>
          {_switchBoolean ? (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              onSubmit={handleSignIn}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              onSubmit={handleSignUp}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Authentication;

