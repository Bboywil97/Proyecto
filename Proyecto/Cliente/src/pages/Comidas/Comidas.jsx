import React from 'react';
import './Comidas.css';

const Comidas = () => {
  return (
    <div className="comidas-container">
      <h1>Explora las Comidas</h1>
      <div className="sections-grid">
        {[
          { title: 'Restaurante 1', image: '/src/assets/comidaImage.jpg', description: 'Deliciosos platillos locales con ingredientes frescos.' },
          { title: 'Restaurante 2', image: '/src/assets/comidaImage.jpg', description: 'Un lugar acogedor con un menú internacional.' },
          { title: 'Restaurante 3', image: '/src/assets/comidaImage.jpg', description: 'Especialidades gourmet en un ambiente elegante.' }
        ].map((comida, index) => (
          <div key={index} className="section-card">
            <img src={comida.image} alt={comida.title} className="section-image" />
            <div className="section-details">
              <h2>{comida.title}</h2>
              <p>{comida.description}</p>
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

export default Comidas;