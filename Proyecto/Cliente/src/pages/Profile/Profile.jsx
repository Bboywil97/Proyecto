import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    bio: 'Desarrollador web apasionado por la tecnología y el aprendizaje continuo.',
    profilePicture: '../../assets/profile-placeholder.png',
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={user.profilePicture}
          alt="Foto de perfil"
          className="profile-image"
        />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
        <p className="profile-bio">{user.bio}</p>
        <button className="edit-profile-button">Editar Perfil</button>
      </div>
    </div>
  );
};

export default Profile;