const { response } = require('express');
const Carrito = require('../modules/carrito');
const mongoose = require('mongoose'); // Asegúrate de importar mongoose

const carritoGet = async (req, res = response) => {
    try {
        const carritos = await Carrito.find();
        res.json({ carritos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const carritoPost = async (req, res = response) => {
    try {
        const { nombre_producto, nombre_usuario, nombre_metodo, estado_confirmacion, direccion_envio, subtotal, total } = req.body;
        const carrito = new Carrito({  nombre_producto, nombre_usuario, nombre_metodo, estado_confirmacion, direccion_envio, subtotal, total });
        await carrito.save();
        res.json({ msg: 'Carrito creado', carrito });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const carritoPut = async (req, res = response) => {
    try {
        const { id } = req.params; // Use `id` instead of `id_carrito`
        const { nombre_producto, nombre_usuario, nombre_metodo, estado_confirmacion, direccion_envio, subtotal, total } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'ID no válido' });
        }

        const carrito = await Carrito.findByIdAndUpdate(id, { nombre_producto, nombre_usuario, nombre_metodo, estado_confirmacion, direccion_envio, subtotal, total }, { new: true });

        if (!carrito) {
            return res.status(404).json({ msg: 'Carrito no encontrado' });
        }

        res.json({ msg: 'Carrito actualizado', carrito });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const carritoDelete = async (req, res = response) => {
    try {
        const { id } = req.params; // Use `id` instead of `id_carrito`

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'ID no válido' });
        }

        const carrito = await Carrito.findByIdAndDelete(id);

        if (!carrito) {
            return res.status(404).json({ msg: 'Carrito no encontrado' });
        }

        res.json({ msg: 'Carrito eliminado', carrito });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

module.exports = {
    carritoGet,
    carritoPost,
    carritoPut,
    carritoDelete
}
