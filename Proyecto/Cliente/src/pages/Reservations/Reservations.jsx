import React, { useState, useEffect } from 'react';
import './Reservations.css';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(storedReservations);
  }, []);

  return (
    <div className="reservations-container">
      <h1>Mis Reservas</h1>
      {reservations.length === 0 ? (
        <p>No tienes reservas actualmente.</p>
      ) : (
        <div className="reservations-grid">
          {reservations.map((reservation, index) => (
            <div key={index} className="reservation-card">
              <img src={reservation.image} alt={reservation.title} className="reservation-image" />
              <div className="reservation-details">
                <h2>{reservation.title}</h2>
                <p>Precio: {reservation.discountPrice}</p>
                <p>Ubicación: {reservation.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reservations;