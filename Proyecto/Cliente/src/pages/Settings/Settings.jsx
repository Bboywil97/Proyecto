import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [selectedFontSize, setSelectedFontSize] = useState('Seleccionar');
  const [selectedLanguage, setSelectedLanguage] = useState('Seleccionar');

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
          <span>Modo oscuro</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkModeEnabled}
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