const { Schema, model, Types } = require('mongoose');

const CarritoSchema = Schema({
    nombre_producto: { type: String, required: true },
    nombre_usuario: { type: String, required: true },
    nombre_metodo: { type: String, required: true },
    estado_confirmacion: { type: String, required: true },
    direccion_envio: { type: String, required: true },
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true }
});

module.exports = model('Carrito', CarritoSchema);
