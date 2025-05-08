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

  const handleLogout = () => {
    // Eliminar el token de autenticación (si existe)
    localStorage.removeItem('token'); // Asegúrate de que el token esté almacenado en localStorage
    alert('Has cerrado sesión');
    navigate('/login'); // Redirigir al login
  };

  return (
    <div className="navbar">
<<<<<<< HEAD
      <button className="navbar-button" onClick={() => navigate('/home')}>Inicio</button>
      <button className="navbar-button" onClick={() => navigate('/favorites')}>Favoritos</button>
      <button className="navbar-button" onClick={() => navigate('/offers')}>Ofertas</button>
      <button className="navbar-button" onClick={() => navigate('/profile')}>Perfil</button>
      <button className="navbar-button" onClick={() => navigate('/reservations')}>Reservaciones</button>
      <button className="navbar-button settings-button" onClick={() => navigate('/settings')}>
        <i className="fas fa-cog"></i> {/* Ícono de tuerca */}
      </button>
      <button className="navbar-button logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
=======
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
>>>>>>> 70400b6d21fe8f05abcb2be0b83a7f0d6480a6e1
    </div>
  );
};

export default Navbar;