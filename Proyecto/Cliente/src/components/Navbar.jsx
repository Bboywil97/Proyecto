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
  }, []);

  useEffect(() => {
    const syncLanguage = () => {
      const language = localStorage.getItem('language') || 'Español';
      console.log('Sincronizando idioma:', language);
      setSelectedLanguage(language);
    };

    // Sincronizar el idioma al cargar el componente
    syncLanguage();

    // Escuchar cambios en localStorage y el evento personalizado
    const handleStorageChange = (event) => {
      if (event.key === 'language') {
        console.log('Idioma cambiado en localStorage:', event.newValue);
        syncLanguage();
      }
    };

    const handleLanguageChangeEvent = () => {
      syncLanguage();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languageChange', handleLanguageChangeEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChange', handleLanguageChangeEvent);
    };
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
    <div className="navbar" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
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