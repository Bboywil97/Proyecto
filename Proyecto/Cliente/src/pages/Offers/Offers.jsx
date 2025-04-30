import React, { useState, } from 'react';
import './Offers.css';
import oferta1Image from '../../assets/ofertas/Oferta1comida.jpeg';
import oferta2Image from '../../assets/ofertas/Oferta2comida.jpg';
import oferta3Image from '../../assets/ofertas/Oferta3comida.jpg';
import oferta4Image from '../../assets/ofertas/Oferta4comida.jpg';
import oferta5Image from '../../assets/ofertas/Oferta5comida.jpg';
import oferta6Image from '../../assets/ofertas/Oferta6comida.jpg';
import oferta7Image from '../../assets/ofertas/Ofertacomida7.jpg';
import oferta8Image from '../../assets/ofertas/Ofertacomida8.jpg';
import oferta9Image from '../../assets/ofertas/Ofertacomida9.jpg';
import oferta10Image from '../../assets/ofertas/Oferta10comida.jpg';

const Offers = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const offers = [
    {
      id: 1,
      title: 'Oferta de Comida Gourmet',
      image: oferta1Image,
      normalPrice: '$1000',
      discountPrice: '$455',
      description: 'Disfruta de una experiencia culinaria única con platillos gourmet preparados por chefs reconocidos.',
      category: 'Comida',
      location: 'Restaurante Gourmet, Ciudad Central'
    },
    {
      id: 2,
      title: 'Oferta de Buffet Internacional',
      image: oferta2Image,
      normalPrice: '$700',
      discountPrice: '$500',
      description: 'Acceso a un buffet internacional con una gran variedad de platillos para todos los gustos.',
      category: 'Comida',
      location: 'Hotel Internacional, Zona Turística'
    },
    {
      id: 3,
      title: 'Oferta de comidas Exquisitos',
      image: oferta3Image,
      normalPrice: '$350',
      discountPrice: '$220',
      description: 'La Casa de los Chilaquiles” es uno de los mejores restaurantes.',
      category: 'Comida',
      location: 'El Rincon de Josefina La Casa de los Chilaquiles'
    },
    {
      id: 4,
      title: 'Oferta de Postres Deliciosos',
      image: oferta4Image,
      normalPrice: '$250',
      discountPrice: '$145',
      description: 'Refresca tu día con una selección de postres naturales.',
      category: 'Helados',
      location: 'Villa del mar '
    },
    {
      id: 5,
      title: 'Oferta de Bebidas Refrescantes',
      image: oferta5Image,
      normalPrice: '$100',
      discountPrice: '$70',
      description: 'Disfruta de una variedad de bebidas refrescantes para acompañar tus comidas.',
      category: 'Bebidas',
      location: 'playa del mar, Zona Turística'
    },
    {
      id: 6,
      title: 'Tour en Lancha - Cañón del Sumidero',
      image: oferta6Image,
      normalPrice: '$2800',
      discountPrice: '$1800',
      description: 'Explora el majestuoso Cañón del Sumidero con un emocionante tour en lancha.',
      category: 'Tours',
      location: 'Cañón del Sumidero, Chiapas'
    },
    {
      id: 7,
      title: 'Excursión a las Ruinas de Palenque',
      image: oferta7Image,
      normalPrice: '$900',
      discountPrice: '$650',
      description: 'Explora las fascinantes ruinas de Palenque con guías especializados.',
      category: 'Historia',
      location: 'Ruinas de Palenque, Chiapas'
    },
    {
      id: 8,
      title: 'Excursión a Cascadas de Agua Azul',
      image: oferta8Image,
      normalPrice: '$700',
      discountPrice: '$500',
      description: 'Explora las impresionantes cascadas de Agua Azul con guías expertos.',
      category: 'Naturaleza',
      location: 'Cascadas de Agua Azul, Chiapas'
    },
    {
      id: 9,
      title: 'Oferta de Cata de Vinos',
      image: oferta9Image,
      normalPrice: '$600',
      discountPrice: '$450',
      description: 'Disfruta de una cata de vinos exclusivos en un ambiente elegante.',
      category: 'Experiencias',
      location: 'Viñedo del Sol, Zona Turística'
    },
    {
      id: 10,
      title: 'Clases de Surf en la Playa',
      image: oferta10Image,
      normalPrice: '$400',
      discountPrice: '$300',
      description: 'Aprende a surfear con instructores profesionales en la playa.',
      category: 'Deportes',
      location: 'Playa del Sol, Chiapas'
    }
  ];

  const handleFavorite = (offer) => {
    const updatedFavorites = [...favorites, offer];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="offers-container">
      <h1>Ofertas</h1>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h2>{offer.title}</h2>
              <p className="normal-price">Precio Normal: {offer.normalPrice}</p>
              <p className="discount-price">Precio con Descuento: {offer.discountPrice}</p>
              <p>{offer.description}</p>
            </div>
            <button
              className="favorite-button"
              onClick={() => handleFavorite(offer)}
            >
              Favorito
            </button>
            <button
              className="reserve-button"
              onClick={() => console.log(`Reserva realizada para la oferta ${offer.id}`)}
            >
              Reservar
            </button>
            <button
              className="location-button"
              onClick={() => console.log(`Ver ubicación: ${offer.location}`)}
            >
              Ver Ubicación
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;