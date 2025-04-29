import React, { useState } from 'react';
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
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Buscando: ${search}`);
  };

  const handleFilterClick = () => {
    navigate('/filter');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <div className="home-container">
      <div className="top-bar"></div>
      <header className="home-header">
        <h1>X'inbal.com</h1>
      </header>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>
      <button className="filter-button" onClick={handleFilterClick}>Filtros</button>
      <button className="settings-button" onClick={handleSettingsClick}>Ajustes</button>
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
          </div>
        ))}
      </div>
      <div className="suggestions">
        <h2>Sugerencias</h2>
        <ul>
          <li onClick={() => navigate('/mar')}>Explora el Mar</li>
          <li onClick={() => navigate('/montana')}>Descubre la Montaña</li>
          <li onClick={() => navigate('/pueblo')}>Visita un Pueblo</li>
          <li onClick={() => navigate('/ciudad')}>Conoce la Ciudad</li>
          <li onClick={() => navigate('/comidas')}>Prueba las Comidas</li>
          <li onClick={() => navigate('/hoteles')}>Encuentra Hoteles</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;