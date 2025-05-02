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

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="page-title">X'inbal.com</h1>
      </header>
      <button className="filter-button" onClick={handleFilterClick}>Filtros</button>
      <div className="home-content">
        <h1>Bienvenido</h1>
        <p>Hola, {email || 'invitado'}. ¡Bienvenido a la página principal!</p>
      </div>
      <div className="sections-grid">
        {[
          { title: 'Mar', image: marImage, path: '/mar' },
          { title: 'Montaña', image: montanaImage, path: '/montana' },
          { title: 'Pueblo', image: puebloImage, path: '/pueblo' },
          { title: 'Ciudad', image: ciudadImage, path: '/ciudad' },
          { title: 'Comidas', image: comidaImage, path: '/comidas' },
          { title: 'Hoteles', image: hotelesImage, path: '/hoteles' }
        ].map((section, index) => (
          <div
            key={index}
            className="section-card"
            onClick={() => navigate(section.path)}
            style={{ cursor: 'pointer' }}
          >
            <img src={section.image} alt={section.title} className="section-image" />
            <div className="section-title">{section.title}</div>
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