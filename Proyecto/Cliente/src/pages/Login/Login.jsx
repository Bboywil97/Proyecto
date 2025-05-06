import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importar axios
import { useAuth } from '../../context/useAuth';
import './Login.css';
import logo from '../../assets/logo.png'; // Importa el logo
import googleIcon from '../../assets/loggin/logo de google.png'; // Importa el ícono de Google

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios/login', {
        email,
        password,
      });

      if (response.data.success) {
        login(response.data.user); // Guardar los datos del usuario en el contexto
        navigate('/home', { replace: true });
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container custom-background">
      <form onSubmit={handleSubmit} className="login-form">
        <img 
          src={logo} /* Usa la imagen importada */
          alt="Logo" 
          className="login-logo" 
        />
        <h1>Iniciar Sesión</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="email">Correo Electrónico</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button
          type="submit"
          className={`login-button ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Procesando...' : 'Iniciar Sesión'}
        </button>
        <button
          type="button"
          className="register-button"
          onClick={() => navigate('/register')}
        >
          Registrarse
        </button>
        <button
          type="button"
          className="google-register-button"
          onClick={() => alert('Registro con Google en desarrollo')}
        >
          <img
            src={googleIcon} /* Usa la imagen importada */
            alt="Google Icon"
            className="google-icon"
          />
          Registrarse con Google
        </button>
      </form>
    </div>
  );
};

export default Login;