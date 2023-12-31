import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../../components/navigation/SideBar'; // Importing the SideBar component
import HomePage from './HomePage' // Importing the HomePage component (needs to be created)
import Favorites from './Favorites'; // Importing the Favorites component (needs to be created)
import WatchLater from './WatchLater'; // Importing the WatchLater component (needs to be created)
import Header from '../../components/navigation/Header';
import './dashboard.css'

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  // ... (your existing Dashboard logic)

  return (
    <BrowserRouter>
      

      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />

      <div className='SideBar' ><SideBar /></div>
        
      <div className="dashboard-container">
      
        <Routes>
          <Route exact  path="/home" element={<HomePage />} />
          <Route exact  path="/favorites" element={<Favorites />} />
          <Route exact  path="/watchlater" element={<WatchLater />} />
          <Route exact  path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;

