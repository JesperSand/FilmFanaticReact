import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import './styles/MovieCard.css'; // Import the CSS file

const MovieCard = ({ movie, onRemove, onMarkAsSeen, onSwipe, swiped }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSeen, setIsSeen] = useState(movie.seen || false); // Track if the movie is seen
  const cardRef = useRef(null); // Reference to the card element

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your definition of "mobile"
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      onSwipe(movie.id); // Trigger swipe state when swiped
    },
    onSwipedRight: () => {
      onSwipe(movie.id); // Trigger swipe state when swiped
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // If not mobile, we don't want the swipeable interaction
  const swipeHandlers = isMobile ? handlers : {};

  const handleRemove = (event) => {
    event.stopPropagation(); // Prevent click outside logic from firing
    onRemove(movie.id);
  };

  const handleMarkAsSeen = (event) => {
    event.stopPropagation(); // Prevent click outside logic from firing
    const newSeenState = !isSeen;
    setIsSeen(newSeenState); // Toggle the seen state locally
    onMarkAsSeen(movie.id, newSeenState); // Pass the new state to the parent component (ProfilePage)
  };

  return (
    <div
      ref={cardRef} // Attach the ref to the card div
      {...swipeHandlers}
      className={`swipeable-card ${swiped ? 'swiped' : ''} ${isSeen ? 'seen' : ''}`} // Add 'seen' class for movies that are marked as seen
    >
      <Link to={`/movie/${movie.id}`} className="movie-card-link">
        <div className="movie-item">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h4>{movie.title}</h4>
            <p className="release-date">{new Date(movie.release_date).getFullYear()}</p>
            <p className="rating">
              {movie.imdb_rating ? `${movie.imdb_rating.toFixed(1)}/10` : 'N/A'}
            </p>
            <p className="description">
              {movie.overview && movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview}
            </p>
          </div>
        </div>
      </Link>

      {/* Show the swipe buttons only if the card is swiped */}
      {swiped && (
        <div className="swipe-buttons show">
          <button onClick={handleRemove} className="swipe-button remove-button">
            Remove
          </button>
          <button onClick={handleMarkAsSeen} className="swipe-button mark-seen-button">
            {isSeen ? 'Unmark as Seen' : 'Mark as Seen'} {/* Toggle button text */}
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
