import React, { useState, useEffect } from 'react';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('language') || 'Español';
  });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    // Sincronizar el idioma desde localStorage
    const language = localStorage.getItem('language') || 'Español';
    setSelectedLanguage(language);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h1>{selectedLanguage === 'Español' ? 'Favoritos' : 'Favorites'}</h1>
      {favorites.length === 0 ? (
        <p>{selectedLanguage === 'Español' ? 'No tienes elementos en tu lista de favoritos.' : 'You have no items in your favorites list.'}</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite-card">
              <img src={favorite.image} alt={favorite.title} className="favorite-image" />
              <div className="favorite-details">
                <h2>{favorite.title}</h2>
                <p>
                  {selectedLanguage === 'Español' ? 'Precio Normal' : 'Normal Price'}: {favorite.normalPrice}
                </p>
                <p>
                  {selectedLanguage === 'Español' ? 'Precio con Descuento' : 'Discount Price'}: {favorite.discountPrice}
                </p>
                <button
                  className="remove-favorite-button"
                  onClick={() => removeFavorite(favorite.id)}
                >
                  {selectedLanguage === 'Español' ? 'Eliminar de Favoritos' : 'Remove from Favorites'}
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
