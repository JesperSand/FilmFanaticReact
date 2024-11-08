import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/FullCastPage.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const FullCastPage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      <h1>Full Cast</h1>
      <div className="full-cast-list">
        {cast.map((actor) => (
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
    </div>
  );
};

export default FullCastPage;
