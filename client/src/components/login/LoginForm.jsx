import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext'
import './Form.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [setToken] = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = null /*await axios.post("rota",{
            username,
            password
        });*/
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token);
        navigate('/products')
    } catch (error){
        console.log("Authentication failed:", error);
        setToken(null);
        localStorage.removeItem("token");
        if(error.response && error.response.data){
            setErrorMessage(error.response.data);
        }else{
            setErrorMessage("Um erro inesperado aconteceu, tente novamente")
        }
    }
  };

  return (
    <div className="form-container">
        
      <h2>Login</h2>
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
        {errorMessage && <div className="error">{ErrorMessage}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
