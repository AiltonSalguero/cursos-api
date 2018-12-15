const mongoose = require('mongoose');

const URI = 'mongodb://localhost/cursos-api'; //Si no existe, crea la base de datos

mongoose.connect(URI)
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err));


//Exportar para que pueda ser usado por el servidor
module.exports = mongoose;