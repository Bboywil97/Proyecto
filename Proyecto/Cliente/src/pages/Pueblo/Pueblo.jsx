import React from 'react';
import './Pueblo.css';

const Pueblo = () => {
  return (
    <div className="pueblo-container">
      <h1>Explora el Pueblo</h1>
      <div className="sections-grid">
        {[
          { title: 'Plaza Central', image: '/src/assets/puebloImage.jpg', description: 'El corazón del pueblo con eventos culturales.' },
          { title: 'Mercado Local', image: '/src/assets/puebloImage.jpg', description: 'Descubre productos frescos y artesanías únicas.' },
          { title: 'Iglesia Antigua', image: '/src/assets/puebloImage.jpg', description: 'Un lugar lleno de historia y arquitectura impresionante.' }
        ].map((pueblo, index) => (
          <div key={index} className="section-card">
            <img src={pueblo.image} alt={pueblo.title} className="section-image" />
            <div className="section-details">
              <h2>{pueblo.title}</h2>
              <p>{pueblo.description}</p>
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

export default Pueblo;