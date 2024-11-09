import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import FullCastPage from './components/FullCastPage';
import ActorDetailPage from './components/ActorDetailPage';  // Import the new Actor Detail Page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/movie/:id/cast" element={<FullCastPage />} />
        <Route path="/actor/:actorId" element={<ActorDetailPage />} /> {/* Add the route for Actor Detail Page */}
      </Routes>
    </Router>
  );
};

export default App;
