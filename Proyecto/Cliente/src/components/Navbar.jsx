import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token de autenticación (si existe)
    localStorage.removeItem('token'); // Asegúrate de que el token esté almacenado en localStorage
    alert('Has cerrado sesión');
    navigate('/login'); // Redirigir al login
  };

  return (
    <div className="navbar">
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
    </div>
  );
};

export default Navbar;