const express =require("express");
const router= express.Router();

const{
actualizarProducto,
actualizandoProducto,
productoActualizado


}= require('../../controllers/usuario/actualizarProductoControllers');
router.get('/',actualizarProducto)
router.post('/actualizarFormulario',actualizandoProducto)
router.post('/actualizar',productoActualizado)



 

module.exports =router;