import React from 'react';
import './Mar.css';

const Mar = () => {
  return (
    <div className="mar-container">
      <h1>Explora el Mar</h1>
      <div className="sections-grid">
        {[
          { title: 'Playa 1', image: '/src/assets/marImage.jpg', description: 'Una playa tranquila con aguas cristalinas.' },
          { title: 'Playa 2', image: '/src/assets/marImage.jpg', description: 'Perfecta para deportes acuáticos y diversión.' },
          { title: 'Playa 3', image: '/src/assets/marImage.jpg', description: 'Un lugar ideal para relajarse y disfrutar del sol.' }
        ].map((playa, index) => (
          <div key={index} className="section-card">
            <img src={playa.image} alt={playa.title} className="section-image" />
            <div className="section-details">
              <h2>{playa.title}</h2>
              <p>{playa.description}</p>
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

export default Mar;