import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import './styles/MovieCard.css'; // Import the CSS file

const MovieCard = ({ movie, onRemove, onSwipe, swiped }) => {
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null); // Reference to the card element

  // Detect mobile screen size on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your definition of "mobile"
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Always call the hook, but conditionally apply its handlers for non-mobile screens
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

  // If not mobile, we don't want the swipeable interaction, so we stop further processing
  const swipeHandlers = isMobile ? handlers : {};

  const handleRemove = (event) => {
    // Prevent reset swipe when clicking the "Remove" button
    event.stopPropagation(); // Prevent click outside logic from firing
    onRemove(movie.id);
  };

  // Apply the transform on the body when the card is swiped
  useEffect(() => {
    if (swiped) {
      // Apply a transform to the body when the card is swiped
      document.body.style.transform = 'translateX(0%)'; // Smooth transition effect
      document.body.style.transition = 'transform 0.3s ease'; // Apply transition for smooth effect
    } else {
      // Reset the transform when the card is not swiped
      document.body.style.transform = 'none';
    }

    // Cleanup the transform when component unmounts or state changes
    return () => {
      document.body.style.transform = 'none'; // Reset transform on cleanup
    };
  }, [swiped]); // Trigger the effect when swiped state changes

  return (
    <div
      ref={cardRef} // Attach the ref to the card div
      {...swipeHandlers}
      className={`swipeable-card ${swiped ? 'swiped' : ''}`} // Add 'swiped' class based on swipe state
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

      {/* Show the "Remove" button only if the card is swiped */}
      {swiped && (
        <div className="remove-button show">
          <button onClick={handleRemove} className="remove-button-text">Remove</button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
