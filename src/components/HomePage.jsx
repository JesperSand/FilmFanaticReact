import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './styles/HomePage.css';
import HomeBar from './HomeBar'; // Import HomeBar component

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');
  const [user, setUser] = useState(null);  // Added user state

  useEffect(() => {
    // Authentication listener to check if the user is logged in
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: { api_key: API_KEY, language: 'en-US', page: 1 },
        });
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies");
        setLoading(false);
      }
    };

    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
          params: { api_key: API_KEY, language: 'en-US' },
        });
        setTrendingMovies(response.data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to load trending movies");
      }
    };

    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: { api_key: API_KEY, language: 'en-US', page: 2 },
        });
        setPopularMovies(response.data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to load popular movies");
      }
    };

    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
          params: { api_key: API_KEY, language: 'en-US', page: 1 },
        });
        setTopRatedMovies(response.data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to load top-rated movies");
      }
    };

    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
          params: { api_key: API_KEY, language: 'en-US', page: 1 },
        });
        setUpcomingMovies(response.data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to load upcoming movies");
      }
    };

    fetchMovies();
    fetchTrendingMovies();
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchUpcomingMovies();
  }, []);

  useEffect(() => {
    let intervalId;
    const randomizeMovie = () => {
      if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setCurrentMovieIndex(randomIndex);
      }
    };
    if (movies.length > 0) {
      randomizeMovie();
      intervalId = setInterval(randomizeMovie, 10000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [movies]);

  const addToList = async (movieDetails) => {
    if (!user) {
      console.log('User is not authenticated');
      return;
    }

    const db = getFirestore();
    const userRef = doc(db, 'users', user.uid);
    const userDocSnap = await getDoc(userRef);

    if (!userDocSnap.exists()) {
      try {
        // Create the document if it doesn't exist
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          movieList: [], // Initialize movie list as an empty array
        });
        console.log('User document created');
      } catch (error) {
        console.error('Error creating user document: ', error);
        return;
      }
    }

    try {
      // Proceed to add the movie to the user's list
      await updateDoc(userRef, {
        movieList: arrayUnion({
          id: movieDetails.id,
          title: movieDetails.title,
          poster_path: movieDetails.poster_path,
          release_date: movieDetails.release_date,
          imdb_rating: movieDetails.vote_average,
          overview: movieDetails.overview,
        }),
      });
      console.log('Movie added to list');
    } catch (error) {
      console.error('Error adding movie to list: ', error);
    }
  };

  const fetchTrailer = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
        params: { api_key: API_KEY, language: 'en-US' },
      });
      const trailer = response.data.results.find((video) => video.type === 'Trailer');
      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailerModal(true);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load trailer");
    }
  };

  const toggleTrailerModal = () => {
    setShowTrailerModal(!showTrailerModal);
    setTrailerKey('');  // Clear the trailer key when closing the modal
  };

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="card">
        {movies.length > 0 && (
          <>
            <Link to={`/movie/${movies[currentMovieIndex].id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movies[currentMovieIndex].poster_path}`}
                alt={movies[currentMovieIndex].title}
                className="image"
              />
            </Link>
            <div className="overlay-buttons">
              <button
                className="poster-button"
                onClick={() => fetchTrailer(movies[currentMovieIndex].id)}
              >
                Watch Trailer
              </button>
              <button
                className="poster-button"
                onClick={() => addToList(movies[currentMovieIndex])}
              >
                Add to List
              </button>
            </div>
          </>
        )}
      </div>

      {/* Trailer Modal */}
      {showTrailerModal && (
        <div className="trailer-modal" onClick={toggleTrailerModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleTrailerModal}>X</button>
            {trailerKey && (
              <iframe
                width="100%"
                height="400px"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}

      {/* Trending Movies Section */}
      <h2 className="trending-heading">Trending Movies</h2>
      <div className="trending-container">
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="trending-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="trending-image"
              />
            </Link>
          </div>
        ))}
        
      </div>
              {/* Popular Movies Section */}
      <h2 className="trending-heading">Popular Movies</h2>
      <div className="trending-container">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="trending-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="trending-image"
              />
            </Link>
          </div>
        ))}
      </div>
      {/* Top Rated Movies Section */}
      <h2 className="trending-heading">Top Rated Movies</h2>
      <div className="trending-container">
        {topRatedMovies.map((movie) => (
          <div key={movie.id} className="trending-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="trending-image"
              />
            </Link>
          </div>
        ))}
      </div>
      {/* Upcoming Movies Section */}
      <h2 className="trending-heading">Upcoming Movies</h2>
      <div className="trending-container">
        {upcomingMovies.map((movie) => (
          <div key={movie.id} className="trending-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="trending-image"
              />
            </Link>
          </div>
        ))}
      </div>
      {/* Add HomeBar at the bottom */}
      <HomeBar />
    </div>
  );
};

export default HomePage;
