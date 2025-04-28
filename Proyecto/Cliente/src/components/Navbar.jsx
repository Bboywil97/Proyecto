import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button className="navbar-button" onClick={() => navigate('/home')}>Inicio</button>
      <button className="navbar-button" onClick={() => navigate('/favorites')}>Favoritos</button>
      <button className="navbar-button" onClick={() => navigate('/offers')}>Ofertas</button>
      <button className="navbar-button" onClick={() => navigate('/profile')}>Perfil</button>
      <button className="navbar-button" onClick={() => navigate('/reservations')}>Reservaciones</button>
    </div>
  );
};

export default Navbar;
