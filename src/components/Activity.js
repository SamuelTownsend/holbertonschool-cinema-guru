import React from 'react';
import './components.css'; // Importing the CSS file

const Activity = ({ activityText }) => {
  return (
    <li>
      <p>{activityText}</p>
      {/* You can add other elements related to activity if needed */}
    </li>
  );
};

export default Activity;
