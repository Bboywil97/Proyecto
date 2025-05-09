import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('language') || 'Español';
  });

  useEffect(() => {
    // Sincronizar el idioma desde localStorage
    const language = localStorage.getItem('language') || 'Español';
    setSelectedLanguage(language);
  }, []);

  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    bio: selectedLanguage === 'Español'
      ? 'Desarrollador web apasionado por la tecnología y el aprendizaje continuo.'
      : 'Web developer passionate about technology and continuous learning.',
    profilePicture: '../../assets/profile-placeholder.png',
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={user.profilePicture}
          alt={selectedLanguage === 'Español' ? 'Foto de perfil' : 'Profile picture'}
          className="profile-image"
        />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
        <p className="profile-bio">{user.bio}</p>
        <button className="edit-profile-button">
          {selectedLanguage === 'Español' ? 'Editar Perfil' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default Profile;