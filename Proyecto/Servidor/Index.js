const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/sitios', require('./routes/sitioRoutes'));
app.use('/api/imagenes', require('./routes/imagenRoutes'));

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal!' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
app.use((err, req, res, next) => {
    console.error('Error:', {
        message: err.message,
        stack: err.stack,
        sql: err.sql
    });
    
    res.status(500).json({
        error: 'Error en el servidor',
        detalle: process.env.NODE_ENV === 'development' ? err.message : 'Contacte al administrador'
    });
});