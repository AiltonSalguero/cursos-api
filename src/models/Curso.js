const mongoose = require('mongoose');
const { Schema } = mongoose;

const CursoSchema = new Schema({
    codigo: String,
    nombre: String,
    seccion: String,
    inicio: Number,
});
module.exports = mongoose.model('Curso', CursoSchema); //module.exports exporta para poder usarlo en otra parte