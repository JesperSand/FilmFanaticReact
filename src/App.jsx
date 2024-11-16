import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';  // Import the Search page
import ProfilePage from './components/ProfilePage'; // Import the Profile page
import DetailsPage from './components/DetailsPage';
import FullCastPage from './components/FullCastPage';
import ActorDetailPage from './components/ActorDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/movie/:id/cast" element={<FullCastPage />} />
        <Route path="/actor/:actorId" element={<ActorDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
