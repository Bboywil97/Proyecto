import React from 'react';
import './Montana.css';

const Montana = () => {
  return (
    <div className="montana-container">
      <h1>Explora la Montaña</h1>
      <div className="sections-grid">
        {[
          { title: 'Sendero 1', image: '/src/assets/montanaImage.jpg', description: 'Un sendero rodeado de naturaleza y tranquilidad.' },
          { title: 'Sendero 2', image: '/src/assets/montanaImage.jpg', description: 'Perfecto para caminatas y vistas panorámicas.' },
          { title: 'Sendero 3', image: '/src/assets/montanaImage.jpg', description: 'Una experiencia única en las alturas.' }
        ].map((montana, index) => (
          <div key={index} className="section-card">
            <img src={montana.image} alt={montana.title} className="section-image" />
            <div className="section-details">
              <h2>{montana.title}</h2>
              <p>{montana.description}</p>
              <div className="section-actions">
                <button className="action-button">Ver ubicación</button>
                <button className="action-button">Reservar</button>
                <button className="action-button">Añadir a favoritos</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Montana;