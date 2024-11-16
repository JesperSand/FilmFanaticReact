import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import ProfilePage from './components/ProfilePage';
import DetailsPage from './components/DetailsPage';
import FullCastPage from './components/FullCastPage';
import ActorDetailPage from './components/ActorDetailPage';
import LoginPage from './components/LoginPage'; // Import LoginPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Add Login route */}
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/movie/:id/cast" element={<FullCastPage />} />
        <Route path="/actor/:actorId" element={<ActorDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
