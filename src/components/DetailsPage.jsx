import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './styles/DetailsPage.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetailsPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  const releaseYear = movieDetails.release_date ? new Date(movieDetails.release_date).getFullYear() : 'N/A';
  const runtime = movieDetails.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedRuntime = runtime ? `${hours}h ${minutes}m` : 'N/A';

  return (
    <div className="details-page">
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
                  {releaseYear} · {formattedRuntime}
                </p>
              </div>
            </div>

            {/* Cast Section */}
            <div className="cast-section">
              <div className="cast-header">
                <h2>Cast</h2>
              </div>
              <div className="cast-list">
                {cast.slice(0, 6).map((actor) => (
                  <div key={actor.id} className="cast-member">
                    <Link to={`/actor/${actor.id}`} className="cast-member-link">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={actor.name}
                        className="cast-member-photo"
                      />
                      <p className="cast-member-name">{actor.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Movies Section */}
            <div className="similar-movies-section">
              <h2>Similar Movies</h2>
              <div className="similar-movies-list">
                {similarMovies.slice(0, 5).map((movie) => (
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
    </div>
  );
}

export default MovieDetailsPage;
