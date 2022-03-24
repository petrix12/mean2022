const mongoose = require('mongoose')

const LibroSchema = new mongoose.Schema({
    titulo: {
        required: [true, 'Ingrese un título de libro'],
        maxlength: [500, 'El título de libro no puede ser mayor de 500 caracteres'],
        type: String
    },
    descripcion: String,
    precio: Number,
    fechaPublicacion: Date,
    autor: { id: String, nombreCompleto: String }
})

module.exports = mongoose.model('Libro', LibroSchema)