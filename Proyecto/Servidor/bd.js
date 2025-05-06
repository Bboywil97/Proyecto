const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'turism',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Opcional: Prueba de conexión al iniciar
pool.getConnection()
    .then(connection => {
        console.log('Conexión a BD exitosa!');
        connection.release();
    })
    .catch(err => {
        console.error('Error al conectar a BD:', err);
    });

module.exports = pool;
