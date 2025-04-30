import React, { useState, useEffect } from 'react';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h1>Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes elementos en tu lista de favoritos.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite-card">
              <img src={favorite.image} alt={favorite.title} className="favorite-image" />
              <div className="favorite-details">
                <h2>{favorite.title}</h2>
                <p>Precio Normal: {favorite.normalPrice}</p>
                <p>Precio con Descuento: {favorite.discountPrice}</p>
                <button
                  className="remove-favorite-button"
                  onClick={() => removeFavorite(favorite.id)}
                >
                  Eliminar de Favoritos
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
