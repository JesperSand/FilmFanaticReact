import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Homebar.css';

const Homebar = () => {
    const location = useLocation(); // Get the current path

    return (
        <div className="homebar">
            <Link to="/" className={`homebar-icon ${location.pathname === '/' ? 'active' : ''}`}>
                <span>🏠</span>
                Home
            </Link>
            <Link to="/search" className={`homebar-icon ${location.pathname === '/search' ? 'active' : ''}`}>
                <span>🔍</span>
                Search
            </Link>
            <Link to="/profile" className={`homebar-icon ${location.pathname === '/profile' ? 'active' : ''}`}>
                <span>👤</span>
                Profile
            </Link>
        </div>
    );
};

export default Homebar;
