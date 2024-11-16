import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
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

  useEffect(() => {
    // Scroll to the top when the page is loaded
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
              <button className="poster-button">Watch Trailer</button>
              <button className="poster-button">Add to List</button>
            </div>
          </>
        )}
      </div>

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
