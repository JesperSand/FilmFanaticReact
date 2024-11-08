import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/DetailsPage.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const DetailsPage = () => {
  const { id } = useParams();
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

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  const releaseYear = movieDetails.release_date ? new Date(movieDetails.release_date).getFullYear() : 'N/A';
  const ageRating = movieDetails.adult ? '18+' : 'PG-13';
  const runtime = movieDetails.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedRuntime = runtime ? `${hours}h ${minutes}m` : 'N/A';

  return (
    <div
      className="details-background"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
      }}
    >
      <div className="details-content">
        <div className="overlay">
          <div className="poster-title-section">
            <div className="poster-rating-section">
              <img
                className="additional-poster"
                src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
              <div className="movie-rating-centered">
                <strong>{movieDetails.vote_average.toFixed(1)} / 10</strong>
              </div>
            </div>
            <div className="text-section">
              <h1 className="movie-title">{movieDetails.title}</h1>
              <p className="movie-info">
                {releaseYear} · {ageRating} · {formattedRuntime}
              </p>
              <p className="movie-description">{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
