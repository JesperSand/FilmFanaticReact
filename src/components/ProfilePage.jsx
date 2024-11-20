import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard'; // Import MovieCard
import HomeBar from './HomeBar';
import './styles/ProfilePage.css';

const ProfilePage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [memberSince, setMemberSince] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [swipedStates, setSwipedStates] = useState({}); // Store swipe states of individual cards
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUserEmail(user.email);

      const creationTime = user.metadata.creationTime;
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date(creationTime).toLocaleDateString('en-GB', options);
      setMemberSince(formattedDate);

      const fetchMovieList = async () => {
        try {
          const db = getFirestore();
          const userRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userRef);

          if (userDocSnap.exists()) {
            setMovieList(userDocSnap.data().movieList || []);
          } else {
            setMovieList([]);
          }
        } catch (err) {
          setError('Error fetching movie list.');
        } finally {
          setLoading(false);
        }
      };

      fetchMovieList();
    }
  }, []);

  const handleRemoveMovie = async (movieId) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);

        // Remove the movie from the list in Firestore
        const updatedList = movieList.filter((movie) => movie.id !== movieId);
        await updateDoc(userRef, { movieList: updatedList });

        // Update state to reflect changes
        setMovieList(updatedList);
      } catch (err) {
        setError('Failed to remove the movie. Please try again.');
      }
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate('/');
    } catch {
      setError('Failed to log out. Please try again.');
    }
  };

  // Reset swipe states when clicking outside of movie list
  useEffect(() => {
    const handleClickOutside = (event) => {
      const movieListElement = document.querySelector('.movie-list');
      if (movieListElement && !movieListElement.contains(event.target)) {
        // Reset swipe states for all movie cards
        setSwipedStates({});
      }
    };

    // Listen for clicks on the document
    document.addEventListener('pointerdown', handleClickOutside);

    // Cleanup listener
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);

  // Update swipe state for a movie
  const handleSwipe = (movieId) => {
    setSwipedStates((prevStates) => ({
      ...prevStates,
      [movieId]: true,
    }));
  };

  return (
    <div className="profile-page">
      <HomeBar />
      <div className="profile-content">
        <div className="profile-details">
          <h2>{userEmail}</h2>
          <p className="member-since">Member since: {memberSince}</p>
          <div className="profile-buttons">
            <button className="profile-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>

        <div className="movie-list-section">
          <h3>Your Movie List</h3>
          {loading ? (
            <p>Loading your movie list...</p>
          ) : error ? (
            <p>{error}</p>
          ) : movieList.length === 0 ? (
            <p>No movies added yet.</p>
          ) : (
            <div className="movie-list">
              {movieList.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onRemove={handleRemoveMovie}
                  onSwipe={handleSwipe} // Pass swipe handler to each card
                  swiped={swipedStates[movie.id]} // Pass swipe state for each movie card
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
