import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './styles/FullCastPage.css';
import HomeBar from './HomeBar'; // Import the HomeBar component

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const FullCastPage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the page is loaded
    window.scrollTo(0, 0);

    const fetchCastDetails = async () => {
      try {
        const castResponse = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
          params: { api_key: API_KEY },
        });
        setCast(castResponse.data.cast);
        setLoading(false);
      } catch (err) {
        setError("Failed to load cast details. Please try again.");
        setLoading(false);
      }
    };

    fetchCastDetails();
  }, [id]);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>; // Add spinner styling in CSS
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="full-cast-page">
      {/* Full Cast Header */}
      <div className="full-cast-header">
        <button onClick={() => navigate(-1)} className="back-button-fullCast">
          <span className="back-icon">←</span> Back
        </button>
        <h1 className="full-cast-title">Full Cast</h1>
      </div>

      {/* Full Cast List */}
      <div className="full-cast-list">
        {cast.map((actor) => (
          <Link to={`/actor/${actor.id}`} className="full-cast-actor-link" key={actor.id}>
            <div className="full-cast-actor">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : '/path/to/placeholder-image.jpg' // Provide a valid path to your placeholder image
                }
                alt={actor.name}
                className="full-cast-actor-photo"
              />
              <div className="full-cast-actor-info">
                <p className="full-cast-actor-name">{actor.name}</p>
                {actor.character && <p className="full-cast-actor-role">as {actor.character}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* HomeBar Component */}
      <HomeBar />
    </div>
  );
};

export default FullCastPage;
