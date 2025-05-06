import React, { useState } from 'react';
import axios from 'axios'; // Importar axios
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios/registro', {
        nombre: name,
        email,
        password,
      });

      if (response.data.success) {
        setSuccess(true);
        alert('Usuario registrado con éxito');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Error al registrar el usuario');
    }
  };

  return (
    <div className="register-container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit} className="register-form">
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Registro exitoso</p>}
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;