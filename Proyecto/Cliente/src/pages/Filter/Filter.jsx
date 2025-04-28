import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {
  const [breakfastIncluded, setBreakfastIncluded] = useState(false);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Seleccionar');
  const [selectedPrice, setSelectedPrice] = useState('Seleccionar');
  const [selectedRating, setSelectedRating] = useState('Seleccionar');
  const [selectedService, setSelectedService] = useState('Seleccionar');

  const handleApplyFilters = () => {
    alert('Filtros aplicados');
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceSelect = (price) => {
    setSelectedPrice(price);
  };

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="filter-container">
      <header className="filter-header">
        <h1>Filtros</h1>
      </header>
      <div className="filter-options">
        <div className="filter-item">
          <span>Precio</span>
          <div className="dropdown">
            <button className="dropdown-button">{selectedPrice}</button>
            <div className="dropdown-content">
              {["$0 - $50", "$50 - $100", "$100 - $200", "$200+"].map((price, index) => (
                <button key={index} className="dropdown-item" onClick={() => handlePriceSelect(price)}>
                  {price}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="filter-item">
          <span>Valoraciones</span>
          <div className="dropdown">
            <button className="dropdown-button">{selectedRating}</button>
            <div className="dropdown-content">
              {["1 estrella", "2 estrellas", "3 estrellas", "4 estrellas", "5 estrellas"].map((rating, index) => (
                <button key={index} className="dropdown-item" onClick={() => handleRatingSelect(rating)}>
                  {rating}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="filter-item">
          <span>Servicios</span>
          <div className="dropdown">
            <button className="dropdown-button">{selectedService}</button>
            <div className="dropdown-content">
              {["WiFi gratis", "Piscina", "Estacionamiento", "Gimnasio", "Mascotas permitidas"].map((service, index) => (
                <button key={index} className="dropdown-item" onClick={() => handleServiceSelect(service)}>
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="filter-item">
          <span>Categorías</span>
          <div className="dropdown">
            <button className="dropdown-button">{selectedCategory}</button>
            <div className="dropdown-content">
              {['Hoteles', 'Ciudad', 'Pueblos', 'Comida', 'Mar', 'Montaña'].map((category, index) => (
                <button key={index} className="dropdown-item" onClick={() => handleCategorySelect(category)}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="filter-item">
          <span>Desayuno incluido</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={breakfastIncluded}
              onChange={() => setBreakfastIncluded(!breakfastIncluded)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="filter-item">
          <span>Cancelación gratuita</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={freeCancellation}
              onChange={() => setFreeCancellation(!freeCancellation)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <button className="apply-button" onClick={handleApplyFilters}>Aplicar filtros</button>
    </div>
  );
};

export default Filter;