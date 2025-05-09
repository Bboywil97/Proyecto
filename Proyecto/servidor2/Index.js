const express = require('express');
const cors = require('cors');
const app = express();
const sitiosRoutes = require('./Routes/SitiosRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/sitios', sitiosRoutes);

// Manejo de errores generales
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ success: false, error: 'Error en el servidor' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});