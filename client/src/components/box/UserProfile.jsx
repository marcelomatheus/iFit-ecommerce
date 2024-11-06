// src/components/UserProfile.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import './style/UserProfile.css';

const UserProfile = () => {
  const { logout } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // Chamada à API para atualizar as informações do usuário
      await axios.put('https://api.exemplo.com/user/update', userData);
      alert('Informações atualizadas com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar as informações:', error);
      alert('Erro ao atualizar as informações.');
    }
  };

  return (
    <div className="user-profile">
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSave}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="save-button">Salvar Alterações</button>
      </form>
      <button onClick={logout} className="logout-button">Sair</button>
    </div>
  );
};

export default UserProfile;
