const {response} = require('express');
const Carrito = require('../modules/carrito');

const carritoGet = async (req, res = response) => {
    try {
        const carritos = await Carrito.find();
        res.json({
            carritos
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Error en el servidor'});
    }
}

const carritoPost = async (req, res = response) => {
    try {
        const { id_carrito, nombre_producto, nombre_usuario, nombre_metodo,
             estado_confirmacion, direccion_envio, subtotal, total } = req.body;
        const carrito = new Carrito({id_carrito, nombre_producto, nombre_usuario, nombre_metodo,
            estado_confirmacion, direccion_envio, subtotal, total });
        await carrito.save();
        res.json({
            msg: 'Carrito creado',
            carrito
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

// Controlador para actualizar un proveedor existente
const carritoPut = async (req, res = response) => {
    try {
        const { id_carrito } = req.params; // Cambiar _id a id_proveedor
        const { nombre_producto, nombre_usuario, nombre_metodo, estado_confirmacion, direccion_envio, subtotal, total} = req.body;
        const carrito = await Carrito.findOneAndUpdate({ id_carrito }, { nombre_producto, nombre_usuario, nombre_metodo, 
            estado_confirmacion, direccion_envio, subtotal, total }, { new: true });

        if (!carrito) {
            return res.status(404).json({
                msg: 'carrito no encontrado'
            });
        }

        res.json({
            msg: 'Carrito actualizado',
            carrito
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

// Controlador para eliminar un proveedor existente
const carritoDelete = async (req, res = response) => {
    try {
        const { id_carrito } = req.params; // Cambiar _id a id_proveedor
        const carrito = await Carrito.findOneAndDelete({ id_carrito });

        if (!carrito) {
            return res.status(404).json({
                msg: 'Carrito no encontrado'
            });
        }

        res.json({
            msg: 'Carrito eliminado',
            carrito
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports ={
    carritoGet,
    carritoPost,
    carritoPut,
    carritoDelete
}
