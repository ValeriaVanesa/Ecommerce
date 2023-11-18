const express =require("express");
const router= express.Router();

const{
   tablaUsuarios
}= require('../../controllers/usuario/tablaUsuariosControlers');

router.get('/', tablaUsuarios);




 

module.exports =router;