import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('language') || 'Español';
  });

  useEffect(() => {
    // Aplicar el modo oscuro o claro al cargar la página
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    document.body.className = darkModeEnabled ? 'dark-mode' : 'light-mode';

    // Sincronizar el idioma desde localStorage
    const language = localStorage.getItem('language') || 'Español';
    setSelectedLanguage(language);
  }, []);

  useEffect(() => {
    // Escuchar cambios en localStorage para el idioma
    const handleStorageChange = (event) => {
      if (event.key === 'language') {
        const language = event.newValue || 'Español';
        setSelectedLanguage(language);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token de autenticación
    alert(selectedLanguage === 'Español' ? 'Has cerrado sesión' : 'You have logged out');
    navigate('/login'); // Redirigir al login
  };

  return (
    <div className="navbar" style={{ marginBottom: '20px' }}>
      <button className="navbar-button" onClick={() => navigate('/home')}>
        {selectedLanguage === 'Español' ? 'Inicio' : 'Home'}
      </button>
      <button className="navbar-button" onClick={() => navigate('/favorites')}>
        {selectedLanguage === 'Español' ? 'Favoritos' : 'Favorites'}
      </button>
      <button className="navbar-button" onClick={() => navigate('/offers')}>
        {selectedLanguage === 'Español' ? 'Ofertas' : 'Offers'}
      </button>
      <button className="navbar-button" onClick={() => navigate('/profile')}>
        {selectedLanguage === 'Español' ? 'Perfil' : 'Profile'}
      </button>
      <button className="navbar-button" onClick={() => navigate('/reservations')}>
        {selectedLanguage === 'Español' ? 'Reservaciones' : 'Reservations'}
      </button>
      <button className="navbar-button" onClick={() => navigate('/settings')}>
        {selectedLanguage === 'Español' ? 'Ajustes' : 'Settings'}
      </button>
      <button className="navbar-button logout-button" onClick={handleLogout}>
        {selectedLanguage === 'Español' ? 'Cerrar Sesión' : 'Log Out'}
      </button>
    </div>
  );
};

export default Navbar;