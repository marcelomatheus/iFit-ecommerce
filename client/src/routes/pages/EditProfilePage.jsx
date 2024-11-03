// src/pages/EditProfilePage.js
import React from 'react';
import UserProfile from '../components/UserProfile';
import './EditProfilePage.css';

const EditProfilePage = () => {
  return (
    <div className="edit-profile-page">
      <h1>Configurações de Conta</h1>
      <UserProfile />
    </div>
  );
};

export default EditProfilePage;
