import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import './styles/FullCastPage.css';

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
      } catch (error) {
        setError("Failed to load cast details");
        setLoading(false);
      }
    };

    fetchCastDetails();
  }, [id]);

  if (loading) return <p>Loading cast details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="full-cast-page">
      {/* Full Cast Header */}
      <div className="full-cast-header">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="back-button-fullCast">
          <span className="back-icon">←</span>Back
        </button>
        <h1>Full Cast</h1>
      </div>

      {/* Full Cast List */}
      <div className="full-cast-list">
        {cast.map((actor) => (
          <Link to={`/actor/${actor.id}`} className="full-cast-actor-link" key={actor.id}>
            <div className="full-cast-actor">
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
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
    </div>
  );
};

export default FullCastPage;
