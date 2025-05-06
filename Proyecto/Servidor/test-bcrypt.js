const bcrypt = require('bcrypt');

const password = '123456'; // Contraseña ingresada
const hash = '$2b$10$...'; // Reemplaza con el hash almacenado en la base de datos

bcrypt.compare(password, hash, (err, result) => {
    if (err) {
        console.error('Error al comparar:', err);
    } else {
        console.log('¿Contraseña válida?', result);
    }
});