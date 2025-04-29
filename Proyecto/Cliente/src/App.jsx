import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/useAuth';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import Filter from './pages/Filter/Filter.jsx';
import Settings from './pages/Settings/Settings.jsx';
import Navbar from './components/Navbar.jsx';
import Favorites from './pages/Favorites/Favorites.jsx';
import Offers from './pages/Offers/Offers.jsx';
import Reservations from './pages/Reservations/Reservations.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Mar from './pages/Mar/Mar.jsx';
import Montana from './pages/Montana/Montana.jsx';
import Pueblo from './pages/Pueblo/Pueblo.jsx';
import Ciudad from './pages/Ciudad/Ciudad.jsx';
import Comidas from './pages/Comidas/Comidas.jsx';
import Hoteles from './pages/Hoteles/Hoteles.jsx';

function App() {
  const ProtectedRoutes = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home email="usuario@ejemplo.com" />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mar" element={<Mar />} />
          <Route path="/montana" element={<Montana />} />
          <Route path="/pueblo" element={<Pueblo />} />
          <Route path="/ciudad" element={<Ciudad />} />
          <Route path="/comidas" element={<Comidas />} />
          <Route path="/hoteles" element={<Hoteles />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </>
    );
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ProtectedRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;