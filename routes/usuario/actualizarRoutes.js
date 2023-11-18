const express =require("express");
const router= express.Router();

const{
actualizarProducto,
productoActualizado


}= require('../../controllers/usuario/actualizarProductoControllers');

router.get('/', actualizarProducto);
router.post('/',productoActualizado)



 

module.exports =router;