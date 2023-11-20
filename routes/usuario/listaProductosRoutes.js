const express =require("express");
const router= express.Router();

const{
    listarProductos
 
   
 

 
}= require('../../controllers/usuario/listaProductosControlers');

router.get('/', listarProductos);









 

module.exports =router;