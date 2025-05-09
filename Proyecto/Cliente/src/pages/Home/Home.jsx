import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import marImage from '../../assets/marImage.jpg';
import montanaImage from '../../assets/montanaImage.jpg';
import puebloImage from '../../assets/puebloImage.jpg';
import ciudadImage from '../../assets/ciudadImage.jpg';
import comidaImage from '../../assets/comidaImage.jpg';
import hotelesImage from '../../assets/hotelesImage.jpg';

const Home = ({ email }) => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('language') || 'Español';
  });

  useEffect(() => {
    // Sincronizar el idioma desde localStorage
    const language = localStorage.getItem('language') || 'Español';
    setSelectedLanguage(language);
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="page-title">X'inbal.com</h1>
      </header>
      <button className="filter-button" onClick={() => navigate('/filter')}>
        {selectedLanguage === 'Español' ? 'Filtros' : 'Filters'}
      </button>
      <div className="home-content">
        <h1>{selectedLanguage === 'Español' ? 'Bienvenido' : 'Welcome'}</h1>
        <p>
          {selectedLanguage === 'Español'
            ? `Hola, ${email || 'invitado'}. ¡Bienvenido a la página principal!`
            : `Hello, ${email || 'guest'}. Welcome to the main page!`}
        </p>
      </div>
      <div className="sections-grid">
        {[
          { title: selectedLanguage === 'Español' ? 'Mar' : 'Sea', image: marImage, path: '/mar' },
          { title: selectedLanguage === 'Español' ? 'Montaña' : 'Mountain', image: montanaImage, path: '/montana' },
          { title: selectedLanguage === 'Español' ? 'Pueblo' : 'Town', image: puebloImage, path: '/pueblo' },
          { title: selectedLanguage === 'Español' ? 'Ciudad' : 'City', image: ciudadImage, path: '/ciudad' },
          { title: selectedLanguage === 'Español' ? 'Comidas' : 'Food', image: comidaImage, path: '/comidas' },
          { title: selectedLanguage === 'Español' ? 'Hoteles' : 'Hotels', image: hotelesImage, path: '/hoteles' },
        ].map((section, index) => (
          <div
            key={index}
            className="section-card"
            onClick={() => navigate(section.path)}
            style={{ cursor: 'pointer' }}
          >
            <img src={section.image} alt={section.title} className="section-image" />
            <div className="section-title">{section.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;