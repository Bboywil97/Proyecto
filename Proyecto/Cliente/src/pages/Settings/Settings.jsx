import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(() => {
    // Obtener el modo inicial desde localStorage o establecerlo en verdadero (modo oscuro por defecto)
    return localStorage.getItem('darkMode') === 'true'; // Cambiar a 'true' para reflejar correctamente el modo oscuro
  });
  const [selectedFontSize, setSelectedFontSize] = useState('Seleccionar');
  const [selectedLanguage, setSelectedLanguage] = useState('Seleccionar');

  useEffect(() => {
    // Cambiar la clase del body según el modo
    document.body.className = darkModeEnabled ? 'dark-mode' : 'light-mode';
    // Guardar el estado en localStorage
    localStorage.setItem('darkMode', darkModeEnabled);
  }, [darkModeEnabled]);

  const handleFontSizeSelect = (size) => {
    setSelectedFontSize(size);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Ajustes</h1>
        <p className="welcome-text">Hola, usuario@ejemplo.com</p>
      </header>
      <div className="settings-options">
        <div className="settings-item">
          <span>Notificaciones</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="settings-item">
          <span>Modo claro</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={!darkModeEnabled}
              onChange={() => setDarkModeEnabled(!darkModeEnabled)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="settings-item">
          <span>Idioma</span>
          <div className="dropdown">
            <button className="dropdown-button">{selectedLanguage}</button>
            <div className="dropdown-content">
              {['Español', 'Inglés', 'Francés', 'Alemán'].map((language, index) => (
                <button key={index} className="dropdown-item" onClick={() => handleLanguageSelect(language)}>
                  {language}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="settings-item">
          <span>Tamaño de fuente</span>
          <div className="dropdown">
            <button className="dropdown-button">{selectedFontSize}</button>
            <div className="dropdown-content">
              {['Pequeño', 'Mediano', 'Grande'].map((size, index) => (
                <button key={index} className="dropdown-item" onClick={() => handleFontSizeSelect(size)}>
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="apply-settings-button">Aplicar configuración</button>
    </div>
  );
};

export default Settings;