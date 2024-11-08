import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './styles/DetailsPage.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const DetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false); // Track if description is expanded
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 720); // Track if screen is wide

  const MAX_DESCRIPTION_LENGTH = 150; // Maximum length for truncated description

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: { api_key: API_KEY, language: 'en-US' },
        });
        setMovieDetails(movieResponse.data);

        const castResponse = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
          params: { api_key: API_KEY },
        });
        setCast(castResponse.data.cast);

        const similarMoviesResponse = await axios.get(`${BASE_URL}/movie/${id}/similar`, {
          params: { api_key: API_KEY, language: 'en-US' },
        });
        setSimilarMovies(similarMoviesResponse.data.results);

        setLoading(false);
      } catch (error) {
        setError("Failed to load movie details");
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // Monitor screen width changes
  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth > 720);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  const releaseYear = movieDetails.release_date ? new Date(movieDetails.release_date).getFullYear() : 'N/A';
  const ageRating = movieDetails.adult ? '18+' : 'PG-13';
  const runtime = movieDetails.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedRuntime = runtime ? `${hours}h ${minutes}m` : 'N/A';

  // Function to toggle description between truncated and full
  const toggleDescription = () => setIsExpanded(!isExpanded);

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
              <p className="movie-description">
                {/* Conditionally render the full or truncated description */}
                {isExpanded || movieDetails.overview.length <= MAX_DESCRIPTION_LENGTH
                  ? movieDetails.overview
                  : `${movieDetails.overview.slice(0, MAX_DESCRIPTION_LENGTH)}... `}
                {/* Show "Read More" or "Show Less" button based on isExpanded */}
                {movieDetails.overview.length > MAX_DESCRIPTION_LENGTH && (
                  <button onClick={toggleDescription} className="read-more-button">
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </button>
                )}
              </p>
            </div>
          </div>

          {/* Cast Section */}
          <div className="cast-section">
            <h2>Cast</h2>
            <Link to={`/movie/${id}/cast`} className="show-all-button">
              Show All
            </Link>
            <div className="cast-list">
              {cast.slice(0, 6).map((actor) => (
                <div key={actor.id} className="cast-member">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="cast-member-photo"
                  />
                  <p className="cast-member-name">{actor.name}</p>
                </div>
              ))}
            </div>

            {/* Red Buttons Section */}
            <div className="button-section">
              <button className="red-button">Watch Trailer</button>
              <button className="red-button">Add to List</button>
            </div>
          </div>

          {/* Similar Movies Section */}
          <div className="similar-movies-section">
            <h2>Similar Movies</h2>
            <div className="similar-movies-list">
              {/* Adjust the number of similar movies shown based on screen size */}
              {similarMovies.slice(0, isWideScreen ? 5 : 4).map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id} className="similar-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="similar-movie-poster"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
