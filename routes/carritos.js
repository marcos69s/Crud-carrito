const { Router } = require('express');
const router = Router();
const { carritoGet, carritoPost, carritoPut, carritoDelete } = require('../controllers/carrito');

// Ruta para obtener todos los proveedores (GET '/')
router.get('/', carritoGet);

// Ruta para crear un nuevo proveedor (POST '/')
router.post('/', carritoPost);

// Ruta para actualizar un proveedor existente (PUT '/:idProveedor')
router.put('/:id_carrito', carritoPut); // Cambiar _id a id_proveedor

// Ruta para eliminar un proveedor existente (DELETE '/:idProveedor')
router.delete('/:id_carrito', carritoDelete); // Cambiar _id a id_proveedor

module.exports = router;
