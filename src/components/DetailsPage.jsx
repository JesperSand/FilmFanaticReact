import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/DetailsPage.css'; // Import the CSS file

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const DetailsPage = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: { api_key: API_KEY, language: 'en-US' },
        });
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load movie details");
        setLoading(false);
      }
    };

    fetchMovieDetails(); // Fetch movie details when the component mounts
  }, [id]); // Re-run if the ID changes

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className="details-background"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.poster_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="details-content">
        <div className="overlay">
          {/* Flex container for the poster and title */}
          <div className="poster-title-section">
            <img
              className="additional-poster"
              src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`} // Use a smaller size for the poster
              alt={movieDetails.title}
            />
            <h1 className="movie-title">{movieDetails.title}</h1>
          </div>

          {/* Additional information */}
          <p className="movie-description">{movieDetails.overview}</p>
          <div className="movie-release-date">
            <strong>Release Date: </strong>{movieDetails.release_date}
          </div>
          <div className="movie-rating">
            <strong>Rating: </strong>{movieDetails.vote_average} / 10
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
