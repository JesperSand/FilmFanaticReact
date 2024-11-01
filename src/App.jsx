// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Adjust the import path as necessary

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Define the route for the HomePage */}
          {/* You can add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Export the App component
