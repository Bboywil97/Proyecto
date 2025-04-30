import React, { useState, useEffect } from 'react';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorites-container">
      <h1>Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Aquí puedes ver tus elementos favoritos.</p>
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              <h2>{favorite.title}</h2>
              <img src={favorite.image} alt={favorite.title} style={{ width: '100px' }} />
              <p>Precio Normal: {favorite.normalPrice}</p>
              <p>Precio con Descuento: {favorite.discountPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;