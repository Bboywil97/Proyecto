import React, { useState, useEffect } from 'react';
import './Reservations.css';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('language') || 'Español';
  });

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(storedReservations);

    // Sincronizar el idioma desde localStorage
    const language = localStorage.getItem('language') || 'Español';
    setSelectedLanguage(language);
  }, []);

  const handleDelete = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  return (
    <div className="reservations-container">
      <h1>{selectedLanguage === 'Español' ? 'Mis Reservas' : 'My Reservations'}</h1>
      {reservations.length === 0 ? (
        <p>{selectedLanguage === 'Español' ? 'No tienes reservas actualmente.' : 'You have no reservations currently.'}</p>
      ) : (
        <div className="reservations-grid">
          {reservations.map((reservation, index) => (
            <div key={index} className="reservation-card">
              <img src={reservation.image} alt={reservation.title} className="reservation-image" />
              <div className="reservation-details">
                <h2>{reservation.title}</h2>
                <p>{selectedLanguage === 'Español' ? 'Precio' : 'Price'}: {reservation.discountPrice}</p>
                <p>{selectedLanguage === 'Español' ? 'Ubicación' : 'Location'}: {reservation.location}</p>
              </div>
              <button
                className="delete-reservation-button"
                onClick={() => handleDelete(index)}
              >
                {selectedLanguage === 'Español' ? 'Eliminar' : 'Delete'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reservations;