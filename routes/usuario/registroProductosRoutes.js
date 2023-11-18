const express =require("express");
const router= express.Router();

const{
 formProductos,
 registroProducto,
 


}= require('../../controllers/usuario/registroProductosControlers');

router.get('/', formProductos);
router.post('/',registroProducto);





 




module.exports =router;