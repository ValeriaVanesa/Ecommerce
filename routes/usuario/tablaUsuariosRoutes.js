const express =require("express");
const router= express.Router();

const{
   listarClientes
}= require('../../controllers/usuario/tablaUsuariosControlers');

router.get('/', listarClientes);




 

module.exports =router;