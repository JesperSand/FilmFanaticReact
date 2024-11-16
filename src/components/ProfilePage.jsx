import React from 'react';
import HomeBar from './HomeBar'; // Import HomeBar component

const ProfilePage = () => {
  return (
    <div>
      <HomeBar />  {/* Render the Homebar here */}
      <h1>User Profile</h1>
      <p>Welcome to your profile page!</p>
      <div>
        <h2>Profile Details</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        {/* Add more profile details here */}
      </div>
    </div>
  );
};

export default ProfilePage;
