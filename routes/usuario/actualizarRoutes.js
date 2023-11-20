const express =require("express");
const router= express.Router();

const{
actualizarProducto,
actualizandoProducto,
productoActualizado


}= require('../../controllers/usuario/actualizarProductoControllers');
router.get('/',actualizarProducto)
router.get('/:id',actualizandoProducto)
router.post('/:id',productoActualizado)



 

module.exports =router;