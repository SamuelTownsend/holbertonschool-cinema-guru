import React from 'react';
import './navigation.css'; // Importing the CSS file

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    // Remove the accessToken item from localStorage
    localStorage.removeItem('accessToken');
    // Set isLoggedIn state to false
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <img src="https://picsum.photos/100/100" alt="User Avatar" />
      <p>Welcome, {userUsername}</p>
      <span onClick={logout}>
        <i className="icon">ICON</i> Logout
      </span>
    </nav>
  );
};

export default Header;
