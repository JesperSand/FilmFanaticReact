import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import HomeBar from './HomeBar'; // Import HomeBar component
import './styles/SearchPage.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Using your API key from environment variables
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200'; // TMDb image base URL for poster thumbnails

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState(null);

  // Fetch trending movies for initial load
  const fetchTrendingMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch trending movies');
      }

      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch movies from API based on search query
  const fetchMovies = async (searchQuery) => {
    if (!searchQuery.trim()) {
      fetchTrendingMovies(); // Reset to trending movies if the query is cleared
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const data = await response.json();
      setResults(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change with debounce
  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Clear existing debounce timer
    if (debounceTimer) clearTimeout(debounceTimer);

    // Set a new debounce timer
    const timer = setTimeout(() => {
      fetchMovies(inputValue);
    }, 500); // Adjust delay as needed (500ms here)
    setDebounceTimer(timer);
  };

  // Fetch trending movies on initial load
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div className="search-page">
      <HomeBar /> {/* Render the HomeBar */}
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
          className="search-input"
        />
        <div className="results-container">
          {loading && <p>Loading...</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && results.length > 0 && (
            results.map((result) => (
              <Link
                key={result.id}
                to={`/movie/${result.id}`} // Navigate to movie details page
              >
                <img
                  src={
                    result.poster_path
                      ? `${IMAGE_BASE_URL}${result.poster_path}`
                      : '/placeholder.png' // Replace with your placeholder image path
                  }
                  alt={result.title || 'No Title'}
                  className="result-poster"
                />
              </Link>
            ))
          )}
          {!loading && query && results.length === 0 && !error && (
            <p>No results found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
