const express =require("express");
const router= express.Router();

const{
productoActualizado
}= require('../../controllers/usuario/productoActualizadoControllers');

router.get('/', productoActualizado);




 

module.exports =router;