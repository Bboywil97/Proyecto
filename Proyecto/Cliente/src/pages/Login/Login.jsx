import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      login(email);
      navigate('/home', { replace: true });
    }, 1500);
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
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
            src="../../assets/loggin/logo de google.png"
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