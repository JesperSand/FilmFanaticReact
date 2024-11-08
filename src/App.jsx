// App.js or main routing file

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage'; // Correct import
import FullCastPage from './components/FullCastPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailsPage />} /> {/* Movie detail page */}
        <Route path="/movie/:id/cast" element={<FullCastPage />} />
      </Routes>
    </Router>
  );
};

export default App;
