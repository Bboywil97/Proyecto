import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false);

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulación de llamada a API
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Bienvenido, ${email}!`);
    }, 1500);
  };

  return (
    <div className="fullscreen-login">
      <div className="login-background">
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}></div>
          ))}
        </div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className={`login-container ${shake ? 'shake' : ''}`}>
        <div className="login-box">
          <div className="login-header">
            <h1 className="login-title">Bienvenido</h1>
            <div className="login-subtitle">Inicia sesión para continuar</div>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className={`form-group ${isFocused.email ? 'focused' : ''} ${email ? 'has-value' : ''}`}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
              />
              <div className="underline"></div>
            </div>
            
            <div className={`form-group ${isFocused.password ? 'focused' : ''} ${password ? 'has-value' : ''}`}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
              />
              <div className="underline"></div>
            </div>
            
            <button type="submit" className={`login-button ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Procesando...
                </>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </form>
          
          <div className="login-footer">
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            <div className="signup-link">
              ¿No tienes una cuenta? <a href="#">Regístrate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;