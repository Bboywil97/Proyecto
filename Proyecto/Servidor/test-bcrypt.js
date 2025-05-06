const bcrypt = require('bcrypt');
const pool = require('./bd'); // Asegúrate de que esta ruta sea correcta

const email = 'juan.perez@examples.com'; // Email del usuario
const password = '123456'; // Contraseña ingresada en texto plano

(async () => {
    try {
        // Obtener el hash de la base de datos
        const [rows] = await pool.query('SELECT password_hash FROM usuarios WHERE email = ?', [email]);

        if (rows.length === 0) {
            console.log('Usuario no encontrado');
            return;
        }

        const hash = rows[0].password_hash;

        // Comparar la contraseña ingresada con el hash
        const esValida = await bcrypt.compare(password, hash);
        console.log('¿Contraseña válida?', esValida);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        pool.end(); // Cerrar la conexión a la base de datos
    }
})();