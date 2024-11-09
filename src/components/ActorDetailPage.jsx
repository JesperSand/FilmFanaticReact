import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/ActorDetailPage.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function ActorDetailPage() {
  const { actorId } = useParams();
  const [actorDetails, setActorDetails] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const MAX_BIO_LENGTH = 300;

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const actorResponse = await axios.get(`${BASE_URL}/person/${actorId}`, {
          params: { api_key: API_KEY, language: 'en-US' },
        });
        setActorDetails(actorResponse.data);

        const moviesResponse = await axios.get(`${BASE_URL}/person/${actorId}/movie_credits`, {
          params: { api_key: API_KEY, language: 'en-US' },
        });
        setMovies(moviesResponse.data.cast);

        setLoading(false);
      } catch (error) {
        setError("Failed to load actor details");
        setLoading(false);
      }
    };

    fetchActorDetails();
  }, [actorId]);

  const toggleBio = () => setIsBioExpanded(!isBioExpanded);

  if (loading) return <p>Loading actor details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="actor-detail">
      <div className="actor-content">
        <div className="actor-header">
          <img
            src={`https://image.tmdb.org/t/p/w200${actorDetails.profile_path}`}
            alt={actorDetails.name}
            className="actor-photo"
          />
          <div className="actor-info">
            <h1>{actorDetails.name}</h1>
            <p className="actor-bio">
              {isBioExpanded || !actorDetails.biography || actorDetails.biography.length <= MAX_BIO_LENGTH
                ? actorDetails.biography
                : `${actorDetails.biography.slice(0, MAX_BIO_LENGTH)}...`}
              {actorDetails.biography && actorDetails.biography.length > MAX_BIO_LENGTH && (
                <button onClick={toggleBio} className="read-more-button">
                  {isBioExpanded ? 'Show Less' : 'Read More'}
                </button>
              )}
            </p>
          </div>
        </div>

        {/* Known For Movies Section */}
        <div className="actor-films">
          <h2>Known For</h2>
          <div className="films-list">
            {movies.map((movie) => (
              <div key={movie.id} className="film-item">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="film-poster"
                />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActorDetailPage;
