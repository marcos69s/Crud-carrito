const {Schema, model} = require('mongoose'); // Importa las funciones Schema y model de mongoose para definir esquemas y modelos de datos

// Define el esquema del modelo Proveedor
const CarritoSchema = Schema({

    // Define que el campo id_proveedor es obligatorio
    id_carrito: { type: Number, required: [true, 'El id del carrito es obligatorio'],unique: true },

    // Define que el campo nombre es obligatorio
    nombre_producto: { type: String, required: [true, 'El nombre del producto es obligatorio'] },

    nombre_usuario: { type: String, required: [true, 'El nombre del usuario es obligatorio'] },

    nombre_metodo: { type: String, required: [true, 'El nombre del metodo de pago es obligatorio'] },

    estado_confirmacion: { type: String, required: [true, 'El nombre del metodo de pago es obligatorio'] },

    direccion_envio: { type: String, required: [true, 'El nombre de la direccion del envio obligatorio'] },

    // Define que el campo telefono es obligatorio
    subtotal: { type: Number, required: [true, 'El subtotal es obligatorio'] },

    total: { type: Number, required: [true, 'El total es obligatorio'] },
  
})

// Crea y exporta el modelo Proveedor a partir del esquema ProveedorSchema
module.exports = model('Carrito', CarritoSchema)
