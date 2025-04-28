import React from 'react';
import './Hoteles.css';

const Hoteles = () => {
  return (
    <div className="hoteles-container">
      <h1>Explora los Hoteles</h1>
      <div className="sections-grid">
        {[
          { title: 'Hotel 1', image: '/src/assets/hotelesImage.jpg', description: 'Un hotel con vistas al mar y todas las comodidades.' },
          { title: 'Hotel 2', image: '/src/assets/hotelesImage.jpg', description: 'Un lugar perfecto para relajarse en la montaña.' },
          { title: 'Hotel 3', image: '/src/assets/hotelesImage.jpg', description: 'Ubicado en el corazón de la ciudad, ideal para explorar.' }
        ].map((hotel, index) => (
          <div key={index} className="section-card">
            <img src={hotel.image} alt={hotel.title} className="section-image" />
            <div className="section-details">
              <h2>{hotel.title}</h2>
              <p>{hotel.description}</p>
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

export default Hoteles;