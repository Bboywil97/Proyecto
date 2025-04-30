import React from 'react';
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

  const handleFilterClick = () => {
    navigate('/filter');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="page-title">X'inbal.com</h1>
      </header>
      <button className="filter-button" onClick={handleFilterClick}>Filtros</button>
      <button className="settings-button" onClick={handleSettingsClick}>Ajustes</button>
      <div className="home-content">
        <h1>Bienvenido</h1>
        <p>Hola, {email || 'invitado'}. ¡Bienvenido a la página principal!</p>
      </div>
      <div className="sections-grid">
        {[
          { title: 'Mar', image: marImage, path: '/mar', description: 'Explora las playas más hermosas.' },
          { title: 'Montaña', image: montanaImage, path: '/montana', description: 'Descubre paisajes montañosos únicos.' },
          { title: 'Pueblo', image: puebloImage, path: '/pueblo', description: 'Visita pueblos mágicos llenos de historia.' },
          { title: 'Ciudad', image: ciudadImage, path: '/ciudad', description: 'Conoce las ciudades más vibrantes.' },
          { title: 'Comidas', image: comidaImage, path: '/comidas', description: 'Prueba la gastronomía local.' },
          { title: 'Hoteles', image: hotelesImage, path: '/hoteles', description: 'Encuentra los mejores hoteles para tu estancia.' }
        ].map((section, index) => (
          <div
            key={index}
            className="section-card"
            onClick={() => navigate(section.path)}
            style={{ cursor: 'pointer' }}
          >
            <img src={section.image} alt={section.title} className="section-image" />
            <div className="section-title">{section.title}</div>
            <div className="section-description">{section.description}</div>
            <button className="section-button" onClick={(e) => {
              e.stopPropagation(); // Evitar que el clic en el botón navegue
              navigate(section.path);
            }}>
              Ver más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;