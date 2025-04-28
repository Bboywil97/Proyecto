import React from 'react';
import './Ciudad.css';

const Ciudad = () => {
  return (
    <div className="ciudad-container">
      <h1>Explora la Ciudad</h1>
      <div className="sections-grid">
        {[
          { title: 'Centro Histórico', image: '/src/assets/ciudadImage.jpg', description: 'Un recorrido por la historia y la cultura local.' },
          { title: 'Parque Urbano', image: '/src/assets/ciudadImage.jpg', description: 'Un espacio verde para relajarse y disfrutar.' },
          { title: 'Zona Comercial', image: '/src/assets/ciudadImage.jpg', description: 'Tiendas y restaurantes para todos los gustos.' }
        ].map((ciudad, index) => (
          <div key={index} className="section-card">
            <img src={ciudad.image} alt={ciudad.title} className="section-image" />
            <div className="section-details">
              <h2>{ciudad.title}</h2>
              <p>{ciudad.description}</p>
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

export default Ciudad;