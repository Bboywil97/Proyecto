import React, { useState, useEffect } from 'react';
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
import oferta11Image from '../../assets/ofertas/ofertacomida11.jpg';
import oferta12Image from '../../assets/ofertas/ofertacomida12.jpg';
import oferta13Image from '../../assets/ofertas/ofertacomida13.jpg';
import oferta14Image from '../../assets/ofertas/ofertacomida14.jpg';

const Offers = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [reservations, setReservations] = useState(() => {
    const storedReservations = localStorage.getItem('reservations');
    return storedReservations ? JSON.parse(storedReservations) : [];
  });

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('language') || 'Español';
  });

  useEffect(() => {
    // Sincronizar el idioma desde localStorage
    const language = localStorage.getItem('language') || 'Español';
    setSelectedLanguage(language);
  }, []);

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
    },
    {
      id: 11,
      title: 'Tour a San Cristóbal de las Casas',
      image: oferta11Image,
      normalPrice: '$800',
      discountPrice: '$600',
      description: 'Descubre la magia de San Cristóbal de las Casas con un tour guiado por sus calles coloniales.',
      category: 'Cultura',
      location: 'San Cristóbal de las Casas, Chiapas'
    },
    {
      id: 12,
      title: 'Visita a las Lagunas de Montebello',
      image: oferta12Image,
      normalPrice: '$1000',
      discountPrice: '$750',
      description: 'Explora las impresionantes lagunas de Montebello con sus aguas cristalinas y paisajes únicos.',
      category: 'Naturaleza',
      location: 'Lagunas de Montebello, Chiapas'
    },
    {
      id: 13,
      title: 'Tour a la Selva Lacandona',
      image: oferta13Image,
      normalPrice: '$1200',
      discountPrice: '$900',
      description: 'Adéntrate en la Selva Lacandona y descubre su flora, fauna y cultura ancestral.',
      category: 'Aventura',
      location: 'Selva Lacandona, Chiapas'
    },
    {
      id: 14,
      title: 'Clases de Artesanías en Chiapa de Corzo',
      image: oferta14Image,
      normalPrice: '$400',
      discountPrice: '$300',
      description: 'Aprende a crear artesanías tradicionales con artesanos locales en Chiapa de Corzo.',
      category: 'Cultura',
      location: 'Chiapa de Corzo, Chiapas'
    }
  ];

  const handleFavorite = (offer) => {
    const updatedFavorites = [...favorites, offer];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleReserve = (offer) => {
    const updatedReservations = [...reservations, offer];
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
  };

  return (
    <div className="offers-container">
      <h1>{selectedLanguage === 'Español' ? 'Ofertas' : 'Offers'}</h1>
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h2>{offer.title}</h2>
              <p className="normal-price">
                {selectedLanguage === 'Español' ? 'Precio Normal' : 'Normal Price'}: {offer.normalPrice}
              </p>
              <p className="discount-price">
                {selectedLanguage === 'Español' ? 'Precio con Descuento' : 'Discount Price'}: {offer.discountPrice}
              </p>
              <p>{offer.description}</p>
            </div>
            <button
              className="favorite-button"
              onClick={() => handleFavorite(offer)}
            >
              {selectedLanguage === 'Español' ? 'Favorito' : 'Favorite'}
            </button>
            <button
              className="reserve-button"
              onClick={() => handleReserve(offer)}
            >
              {selectedLanguage === 'Español' ? 'Reservar' : 'Reserve'}
            </button>
            <button
              className="location-button"
              onClick={() => console.log(`Ver ubicación: ${offer.location}`)}
            >
              {selectedLanguage === 'Español' ? 'Ver Ubicación' : 'View Location'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;