import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth'; // Import signOut
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
import { Link } from 'react-router-dom'; // Import Link for navigation
import HomeBar from './HomeBar'; // Import HomeBar component
import './styles/ProfilePage.css';

const ProfilePage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [memberSince, setMemberSince] = useState('');
  const [movieList, setMovieList] = useState([]); // To store the movie list
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to redirect to login page

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUserEmail(user.email); // Get the user's email

      const creationTime = user.metadata.creationTime; // Get the account creation time

      // Format the creationTime to "14 March 1994"
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const formattedDate = new Date(creationTime).toLocaleDateString('en-GB', options); // 'en-GB' for day/month/year format
      setMemberSince(formattedDate);

      // Fetch the user's movie list from Firestore
      const fetchMovieList = async () => {
        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid); // Access the user's document
        const userDocSnap = await getDoc(userRef);

        if (userDocSnap.exists()) {
          setMovieList(userDocSnap.data().movieList); // Retrieve the movie list from Firestore
        } else {
          setMovieList([]); // If no document, set an empty list
        }
        setLoading(false);
      };

      fetchMovieList();
    }
  }, []); // Run only once when the component mounts

  // Handle user logout
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth); // Log the user out
      navigate('/'); // Redirect to login page after successful logout
    } catch (error) {
      setError('Failed to log out. Please try again later.');
    }
  };

  // Handle settings (redirect to settings page or handle it here)
  const handleSettings = () => {
    // For now, we can just log a message or navigate to a settings page
    // navigate('/settings'); // Uncomment if you have a settings page
    alert('Settings button clicked!');
  };

  return (
    <div className="profile-page">
      <HomeBar />  {/* Render the HomeBar here */}
      <div className="profile-content">
        <div className="profile-details">
          <h2>{userEmail}</h2> {/* Display the email instead of name */}
          <p className="member-since">Member since: {memberSince}</p>

          {/* Add Log Out and Settings buttons inside profile-details */}
          <div className="profile-buttons">
            <button className="profile-button" onClick={handleLogout}>
              Log Out
            </button>
            <button className="profile-button" onClick={handleSettings}>
              Settings
            </button>
          </div>
        </div>

        {/* Movie List Section */}
        <div className="movie-list-section">
          <h3>Your Movie List</h3>
          {loading ? (
            <p>Loading your movie list...</p>
          ) : error ? (
            <p>Error loading movie list: {error}</p>
          ) : movieList.length === 0 ? (
            <p>No movies added yet.</p>
          ) : (
            <div className="movie-list">
              {movieList.map((movie, index) => (
                <Link to={`/movie/${movie.id}`} key={index} className="movie-card-link"> {/* Link for the whole card */}
                  <div className="movie-item">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-poster"
                    />
                    <div className="movie-info">
                      <h4>{movie.title}</h4>
                      <p>{movie.release_date}</p>
                      <p>{movie.imdb_rating ? `${movie.imdb_rating.toFixed(1)}/10` : 'N/A'}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
