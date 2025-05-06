import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRoute, setActiveRoute] = useState('');
  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="navbar">
      {['/home', '/favorites', '/offers', '/profile', '/reservations','/settings'].map((path) => (
        <button
          key={path}
          className={`navbar-button ${activeRoute === path ? 'active-route' : ''}`}
          onClick={() => navigate(path)}
        >
          {path.split('/')[1].charAt(0).toUpperCase() + path.split('/')[1].slice(1)}
        </button>
      ))}


      <div className="navbar-search">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          className="search-button" 
          onClick={handleSearch}
          aria-label="Buscar"
        >
          🔍
        </button>
      </div>
    </div>
  );
};

export default Navbar;