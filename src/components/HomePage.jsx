import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/HomePage.css'; // Import the CSS file for styling

const BASE_URL = "https://api.themoviedb.org/3"; // Base URL for the TMDB API
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Access the API key from the environment variables

const HomePage = () => {
  const [movies, setMovies] = useState([]); // State to hold the movies
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0); // State for the current movie index
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State to hold any errors

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY, // Pass the API key in the request
            language: 'en-US',
            page: 1,
          },
        });
        setMovies(response.data.results); // Set the state with the fetched movie data
        setLoading(false); // Update loading state
      } catch (err) {
        console.error(err); // Log any errors to the console
        setError("Failed to load movies"); // Set error message
        setLoading(false); // Update loading state
      }
    };

    fetchMovies(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this runs once

  useEffect(() => {
    let intervalId;

    // Function to randomize the current movie index
    const randomizeMovie = () => {
      if (movies.length > 0) {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * movies.length);
        setCurrentMovieIndex(randomIndex); // Set the new random movie index
      }
    };

    if (movies.length > 0) {
      randomizeMovie(); // Randomize movie initially
      intervalId = setInterval(randomizeMovie, 10000); // Set interval to randomize every 10 seconds
    }

    // Cleanup function to clear the interval
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [movies]); // Run this effect whenever movies are fetched

  if (loading) return <p>Loading movies...</p>; // Render loading text while fetching
  if (error) return <p>{error}</p>; // Render error message if there's an error

  return (
    <div className="container">
      <div className="card">
        {movies.length > 0 && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movies[currentMovieIndex].poster_path}`} // Display the current movie poster
            alt={movies[currentMovieIndex].title}
            className="image"
          />
        )}
      </div>
    </div>
  );
};

export default HomePage; // Export the HomePage component for use in other parts of the app
