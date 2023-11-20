const express =require("express");
const router= express.Router();

const{
 eliminarProducto,
 productoEliminado


}= require('../../controllers/usuario/eliminarProductoControllers');

router.get('/', eliminarProducto);
router.post('/:id',productoEliminado)



 

module.exports =router;