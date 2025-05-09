import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [selectedFontSize, setSelectedFontSize] = useState('Seleccionar');
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Obtener el idioma inicial desde localStorage o establecerlo en español por defecto
    return localStorage.getItem('language') || 'Español';
  });

  useEffect(() => {
    document.body.className = darkModeEnabled ? 'dark-mode' : 'light-mode';
    localStorage.setItem('darkMode', darkModeEnabled);
  }, [darkModeEnabled]);

  useEffect(() => {
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('language', selectedLanguage);
    // Emitir un evento personalizado para notificar el cambio de idioma
    const languageChangeEvent = new Event('languageChange');
    window.dispatchEvent(languageChangeEvent);

    // Actualizar el idioma globalmente
    document.documentElement.lang = selectedLanguage === 'Español' ? 'es' : 'en';
  }, [selectedLanguage]);

  const handleFontSizeSelect = (size) => {
    setSelectedFontSize(size);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>{selectedLanguage === 'Español' ? 'Ajustes' : 'Settings'}</h1>
        <p className="welcome-text">
          {selectedLanguage === 'Español' ? 'Hola, usuario@ejemplo.com' : 'Hello, user@example.com'}
        </p>
      </header>
      <div className="settings-options">
        <div className="settings-item">
          <span>{selectedLanguage === 'Español' ? 'Notificaciones' : 'Notifications'}</span>
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
          <span>{selectedLanguage === 'Español' ? 'Modo claro' : 'Light Mode'}</span>
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
          <span>{selectedLanguage === 'Español' ? 'Idioma' : 'Language'}</span>
          <div className="dropdown">
            <button className="dropdown-button">{selectedLanguage}</button>
            <div className="dropdown-content">
              {['Español', 'Inglés'].map((language, index) => (
                <button key={index} className="dropdown-item" onClick={() => handleLanguageSelect(language)}>
                  {language}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="settings-item">
          <span>{selectedLanguage === 'Español' ? 'Tamaño de fuente' : 'Font Size'}</span>
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
      <button className="apply-settings-button">
        {selectedLanguage === 'Español' ? 'Aplicar configuración' : 'Apply Settings'}
      </button>
    </div>
  );
};

export default Settings;