const express =require("express");
const router= express.Router();

const{
usuarioActualizado
}= require('../../controllers/usuario/usuarioActualizadoControllers');

router.get('/', usuarioActualizado);




 

module.exports =router;