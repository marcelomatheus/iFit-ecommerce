import React, { useState } from 'react';
import './Form.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setMessage('Preencha todos os campos');
    } else {
      try{
        const response = await axios.post("url", {
            username, password
        });
        setMessage(error.response.data.error)
      }catch(error){
        console.error("Registration failed:", error.response.data.error);
        setMessage(error.response.data.error)
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {message && <div className="error">{message}</div>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
