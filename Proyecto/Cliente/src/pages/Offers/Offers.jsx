import React from 'react';
import './Offers.css';

const Offers = () => {
  const offers = [
    { title: 'Hotel en la playa', normalPrice: '$200', discountPrice: '$150', image: '/src/assets/hotelesImage.jpg' },
    { title: 'Cena para dos', normalPrice: '$50', discountPrice: '$30', image: '/src/assets/comidaImage.jpg' },
    { title: 'Tour por la ciudad', normalPrice: '$100', discountPrice: '$70', image: '/src/assets/ciudadImage.jpg' },
    { title: 'Escapada a la montaña', normalPrice: '$150', discountPrice: '$100', image: '/src/assets/montanaImage.jpg' },
  ];

  return (
    <div className="offers-container">
      <h1>Ofertas</h1>
      <p>Explora las mejores ofertas disponibles.</p>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h2>{offer.title}</h2>
              <p className="normal-price">Precio normal: {offer.normalPrice}</p>
              <p className="discount-price">Precio de oferta: {offer.discountPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;